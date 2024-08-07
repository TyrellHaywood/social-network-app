import { NextApiHandler } from "next";
import NextAuth, { type NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";


export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "hello@example.com"
                },
                password: {
                    label: "Password", 
                    type: "password"
                }
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
    callbacks: {
        session: ({ session, token }) => {
            console.log("Session Callback", {session, token})
            return session
        }, 
        jwt: ({ token, user }) => {
            console.log("JWT Callback", {token, user})
            return token
        }
    }
};