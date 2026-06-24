"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { createSessionToken, SESSION_COOKIE, SESSION_MAX_AGE } from "@/lib/auth"

type LoginState = { error?: string }

export async function login(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const user = String(formData.get("user") || "").trim()
  const pass = String(formData.get("pass") || "")

  const validUser = process.env.INTERMEDIARIOS_USER || "intermediario"
  const validPass = process.env.INTERMEDIARIOS_PASS || "pad2026"

  if (user !== validUser || pass !== validPass) {
    return { error: "Usuario o contraseña incorrectos." }
  }

  const token = await createSessionToken(user)
  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  })

  redirect("/intermediario")
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE)
  redirect("/intermediario/login")
}
