import { db } from "./db";

export async function getUserByName(username){
    try {
        const existingUser = await db.user.findFirst({ where: { username: username } });

        return existingUser;
    } catch (error) {
        return null;
    }
}

export async function getUserByID(id){
    // try {
        const existingUser = await db.user.findFirst({ where: { id: 'cls0q91wi0001twms6m8o6dcu' } });

        return existingUser;
    // } catch (error) {
    //     return null;
    // }
}

export async function getProductByID(id){
    try {
        const existingUser = await db.user.findUnique({ where: { id } });

        return existingUser;
    } catch (error) {
        return null;
    }
}

export async function getProductByName(name){
    try {
        const existingUser = await db.user.findFirst({ where: { name } });

        return existingUser;
    } catch (error) {
        return null;
    }
}
