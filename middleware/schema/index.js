import { z } from 'zod';

export const LoginSchema = z.object({
    username: z.string().min(1),
    password: z.string().min(1, {
        message: "Password is required",
    })
})

export const AddUserSchema = z.object({
    username: z.string().min(1),
    password: z.string().min(1, {
        message: "Password is required",
    })
})