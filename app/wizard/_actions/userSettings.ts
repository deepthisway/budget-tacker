"use server"

import { UpdateUserCurrencySchema } from "@/app/zod-schemas/userSettings"
import prisma from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export async function UpdateUserCurrency(currency: string)  {
    const parsedBody = UpdateUserCurrencySchema.safeParse({
        currency
    })
    if(!parsedBody.success) {
        throw new Error(parsedBody.error.issues[0].message)
    }

    const user = await currentUser();
    if(!user) {
        redirect('/sign-in')
        }
    
    const userSettings = await prisma.userSettings.update({
        where: {
            userId: user.id
        },
        data:{
            currency 
        }
    })
    return userSettings

}

// updates the currency field of the user settings