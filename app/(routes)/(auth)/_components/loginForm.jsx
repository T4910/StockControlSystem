import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Form from './form'

const loginForm = () => {
  return (
    <Card className="w-96 bg-white">
        <CardHeader>
            <h1 className="flex justify-center font-bold text-black text-2xl">Login</h1>
        </CardHeader>
        <CardContent>
            <Form />
        </CardContent>
    </Card>
  )
}

export default loginForm