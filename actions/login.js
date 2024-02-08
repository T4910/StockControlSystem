"use server"
import { signIn } from '@/middleware/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/middleware/routes';
import { LoginSchema } from '@/middleware/schema';
import { AuthError } from 'next-auth';

export const login = async (details) => {
    const checkedFields = LoginSchema.safeParse(details); 

    if (!checkedFields.success) return {status: "error", message: "Invalid inputs" };

    const { username, password } = checkedFields.data;

    try {
        await signIn('credentials', {
            username,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
    } catch (error) {
        if(error instanceof AuthError){
            switch (error.type) {
                case "CredentialSignin":
                    return { status: "error", message: "Invalid credentials!" }
                    // break;
            
                default:
                    return { status: "error", message: "Something went wrong" }
                    // break;
            }
        }

        throw error;
    }

    return {status: "success", message: "Authentication successful"}
}