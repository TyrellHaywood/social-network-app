import { NextApiHandler } from "next";
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import bcrypt, { compare } from "bcrypt";


export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            name: "Sign In",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "hello@example.com"
                },
                password: {label: "Password", type: "password"}
            },
            // handle auth!
            async authorize(credentials) {
                // check if credentials are correct
                if(!credentials?.email || !credentials.password) {
                    return null;
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })
                // user does not exist
                if (!user) {
                    return null
                }

                const isPasswordValid = await compare(credentials.password, user.password)

                if (!isPasswordValid) {
                    return null
                }

                return {
                    id: user.id +'',
                    email: user.email,
                    name: user.name
                }
            }
        })
    ],
    pages: {
        signIn: "/login"
    }
};

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
