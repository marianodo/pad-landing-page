// Autenticación simple sin base de datos para el Portal de Intermediarios.
// Usa una cookie httpOnly firmada con HMAC-SHA256 (compatible con el runtime Edge / middleware).
// Las credenciales y el secreto se configuran por variables de entorno.

export const SESSION_COOKIE = "pad_intermediarios_session"

// Duración de la sesión: 30 días.
export const SESSION_MAX_AGE = 60 * 60 * 24 * 30

function getSecret(): string {
  return (
    process.env.AUTH_SECRET ||
    // Fallback solo para desarrollo local. En producción definí AUTH_SECRET.
    "pad-dev-secret-cambiar-en-produccion"
  )
}

function toBase64Url(bytes: Uint8Array): string {
  let bin = ""
  for (const b of bytes) bin += String.fromCharCode(b)
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}

function strToBase64Url(str: string): string {
  return toBase64Url(new TextEncoder().encode(str))
}

function base64UrlToStr(b64: string): string {
  const padded = b64.replace(/-/g, "+").replace(/_/g, "/")
  const bin = atob(padded + "=".repeat((4 - (padded.length % 4)) % 4))
  const bytes = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i)
  return new TextDecoder().decode(bytes)
}

async function sign(payload: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(getSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  )
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload))
  return toBase64Url(new Uint8Array(sig))
}

export async function createSessionToken(user: string): Promise<string> {
  const payload = strToBase64Url(JSON.stringify({ u: user, t: Date.now() }))
  const signature = await sign(payload)
  return `${payload}.${signature}`
}

export async function verifySessionToken(
  token: string | undefined | null,
): Promise<{ u: string; t: number } | null> {
  if (!token) return null
  const [payload, signature] = token.split(".")
  if (!payload || !signature) return null

  const expected = await sign(payload)
  // Comparación de longitud constante para evitar timing attacks.
  if (signature.length !== expected.length) return null
  let diff = 0
  for (let i = 0; i < expected.length; i++) {
    diff |= signature.charCodeAt(i) ^ expected.charCodeAt(i)
  }
  if (diff !== 0) return null

  try {
    const data = JSON.parse(base64UrlToStr(payload))
    if (typeof data?.u !== "string" || typeof data?.t !== "number") return null
    // Expiración acorde a SESSION_MAX_AGE.
    if (Date.now() - data.t > SESSION_MAX_AGE * 1000) return null
    return data
  } catch {
    return null
  }
}
