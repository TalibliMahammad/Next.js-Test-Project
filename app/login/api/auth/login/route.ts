import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  if (username === "admin" && password === "1234") {
    const response = NextResponse.json({
      success: true,
      message: "Giriş uğurlu",
    });
    response.cookies.set("auth-token", "my-secret-token", {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      path: "/",
    });
    return response;
  }
  return NextResponse.json(
    {error:'istifadəçi adı və ya şifrəsi yalnışdır'},
    {status:401}
  )
}
