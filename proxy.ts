import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth"

const LOGIN_PATH = "/intermediario/login"

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl

  // La página de login es pública para poder iniciar sesión.
  if (pathname === LOGIN_PATH) {
    return NextResponse.next()
  }

  const token = req.cookies.get(SESSION_COOKIE)?.value
  const session = await verifySessionToken(token)

  if (!session) {
    const url = req.nextUrl.clone()
    url.pathname = LOGIN_PATH
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  // Protege /intermediario y todas sus sub-rutas.
  matcher: ["/intermediario/:path*"],
}
