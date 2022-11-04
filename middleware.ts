import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const JWT_EXPIRED_MESSAGE = "jwt expired";

export default async function middleware(req: NextRequest, res: NextResponse) {
  const userToken = req.cookies.get("username");

  if (userToken === undefined) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/", "/gif", "/api"],
};
