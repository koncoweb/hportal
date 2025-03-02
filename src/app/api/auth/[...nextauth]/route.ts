import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { compare } from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";

// Create the NextAuth handler using the imported authOptions
const handler = NextAuth(authOptions);

// Export the handler for the GET and POST methods
export { handler as GET, handler as POST };

// Additional API endpoints for checking authentication status
export async function GET_STATUS(request: Request) {
  const session = await getServerSession(authOptions);
  return NextResponse.json({
    authenticated: !!session,
    session,
  });
}

export async function POST_STATUS(request: Request) {
  const session = await getServerSession(authOptions);
  return NextResponse.json({
    authenticated: !!session,
    session,
  });
}