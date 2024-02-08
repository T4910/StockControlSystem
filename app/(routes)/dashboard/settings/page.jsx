import Settings from "./_compnents/settings"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

//   change this route to become a part of the dashboard - hence the quick settings
const page = () => {
  return (
    <div className="h-screen grid items-center">
        <Card className="w-[50rem] bg-white">
            <CardHeader>
                <h1 className=" font-bold text-black text-2xl">Quick Settings</h1>
            </CardHeader>
            <CardContent>
                <Settings />
            </CardContent>
        </Card>
    </div>
  )
}

export default page