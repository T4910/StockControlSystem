"use client"
import Flash from './flash'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { LoginSchema } from "@/middleware/schema"
import { login } from "@/actions/login"
import { useState, useTransition } from "react"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import Link from 'next/link'

const PlainForm = () => {
    const [flash, setFlash] = useState({status: "", message: ""})
    const [pending, startTransition] = useTransition()
    let loginResponse;

    const form = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            username: "",
            email: ""
        }
    });

    const startLogin = (details) =>{
        startTransition(async () => {
            loginResponse = await login(details)
            console.log(loginResponse)
            setFlash(loginResponse)
        })
    }

    return (
        <Form {...form}>
            <Flash state={flash}/>
            <form 
                onSubmit={form.handleSubmit(startLogin)}
                className="space-y-6" 
            >
                {/* native HTML form element */}
                <div className="space-y-4">
                    {/* Form Input div */}
                    <FormField 
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input 
                                        disabled={pending}
                                        placeholder="Joe"
                                        type="text"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input 
                                        disabled={pending}
                                        placeholder="******"
                                        type="password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button 
                    disabled={pending}
                    type="submit"
                    className="w-full"
                    // variant="default"
                >
                    Login
                </Button>
            </form>
        </Form>
    )
}

export default PlainForm