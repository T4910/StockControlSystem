"use server"
import { AddUserSchema } from '@/middleware/schema';
import { getUserByName } from '@/lib/getInfo';
import bcrypt  from 'bcryptjs'
import { db } from '@/lib/db'

const register = async (form) => {
    const details = {
        username: form.get('username'),
        password: form.get('password')
    };
    const checkedFields = AddUserSchema.safeParse(details); 
    
    if (!checkedFields.success) return {status: "error", message: "Invalid inputs" };

    const { username, password } = checkedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByName(username);
    if (existingUser) return {status: "error", message: "Username taken!" };

    await db.user.create({
        data: { username, password: hashedPassword }
    });

    return {status: "success", message: "Authentication successful"};
}

export default register;