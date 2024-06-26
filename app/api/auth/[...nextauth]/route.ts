import { NextApiHandler } from "next";
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            name: "Sign In",
            credentials: {
                email: {
                    label: "email",
                    type: "email",
                    placeholder: "hello@example.com"
                },
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials) {
                // handle auth!
                const user = {id: "1", name: "tyrell", email: "test@test.com"};
                return user;
            }
        })
    ]
};

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, authOptions);

export { authHandler as GET, authHandler as POST };
