import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import adduser from "@/actions/adduser"

const newuser = () => {
  return (
    <div className="flex flex-row space-x-1">
        <form action={adduser} className="space-x-4">
            <Input 
                placeholder="New Username"
                name="username"
                type="text"
                className="inline w-72"
            />
            <Input 
                placeholder="******"
                name="password"
                type="password" 
                className="inline w-72"           
            />
            <Button type="submit">Add user</Button>
        </form>
    </div>
  )
}

export default newuser