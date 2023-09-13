"use server";

import { prisma } from "@/lib/prisma";
import { createCollectionSchemaType } from "@/schema/createCollection";
import { currentUser } from "@clerk/nextjs";

export async function createCollection(form: createCollectionSchemaType) {
    const user = await currentUser();

    if (!user) {
        throw new Error("User not found")
    }

    return await prisma.collection.create({ 
        data: { 
            name: form.name,
            color: form.color,
            userId: user.id
        }
    } )
}

export async function deleteCollection (id: number) {
    const user = await currentUser();

    if (!user) {
        throw new Error("User not found")
    }

    return await prisma.collection.delete({
        where: {
            userId: user?.id,
            id: id
        }
    })
}