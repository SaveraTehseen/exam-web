"use server"

import prisma from "@/lib/db"
import { formSchema } from "@/schemas/formSchema"
import {z} from "zod"




export const  createLorem = async(values:z.infer<typeof formSchema>) => {

    const validatedValues= formSchema.safeParse(values)
    
    if (!validatedValues.success){
        return{
            error: "invalid values"
        }
    }

    await prisma.lorem.create(
        {
            data:{
                name: validatedValues.data?.name,
                isCompleted: true

            }
        }
    )
 
}

