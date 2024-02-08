import Credentials from "next-auth/providers/credentials"
import bcyrpt from "bcryptjs"
import { LoginSchema } from "@/middleware/schema";
// import { getUserByName } from "./lib/getInfo";

export default {
    providers: [
        Credentials({
            async authorize(credentials){
                const checkedFields = LoginSchema.safeParse(credentials);
                if(!checkedFields.success) return null;

                const { username, password } = checkedFields.data;

                const user = null; //await getUserByName(username);
                // console.log('THE USER: ', user)
                if(!user) return null;
                
                const passwordMatch = await bcyrpt.compare(password, user.password);
                user.info = {
                    id: user.id,
                    username: user.username,
                    role: user.role
                };
                if(passwordMatch) return user;
            }
        })
    ]
};
