import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Table from './_components/productTable'
import { auth, signOut } from "@/middleware/auth"
import { Button } from "@/components/ui/button"


const page = async () => {
  const session = await auth();

  return (
    <div className="grid place-items-center h-screen">
      <form action={async () => {
        "use server";

        await signOut();
      }}>
        <Button type="submit">Signout</Button>
      </form>
      <Card className="w-[40rem] bg-white">
        <CardHeader>
            <h1 className="flex justify-center font-bold text-black text-2xl">List of Goods</h1>
        </CardHeader>
        <CardContent>
          <Table />
        </CardContent>
        <CardFooter>
            {JSON.stringify(session)}
        </CardFooter>
      </Card>
    </div>
  )
}

export default page