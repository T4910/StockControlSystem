import NextAuth from "next-auth"
import authConfig from "./middleware/auth.config"
import {
    AUTH,
    AUTHAPI,
    DEFAULT_LOGIN_REDIRECT,
} from "@/middleware/routes"

const { auth } = NextAuth(authConfig)

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(AUTHAPI);
    const isAuthRoute = AUTH.includes(nextUrl.pathname);

    if(isApiAuthRoute) return null;

    // Made it this format to avoid redirection loops
    if(isAuthRoute){
        if (isLoggedIn){
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }

        return null
    } 
    
    if(!isLoggedIn) return Response.redirect(new URL('/login', nextUrl));

    return null;
})

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
}