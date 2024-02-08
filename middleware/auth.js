import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db"
import { getUserByID } from "../lib/getInfo";

export const {
    handlers: { GET, POST},
    auth,
    signIn,
    signOut,
} = NextAuth({
    callbacks: {
        async jwt({token}){
            return token;
        },
        async session({ session }){
            const user = await getUserByID()
            console.log('user:', session);
            return session;
        }
    },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig  
})