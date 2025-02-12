'use server' //actions skal have dette

import { z } from "zod"

export default async function LoginAction(prevState, formData){ //server actions skal være async

    const username = formData.get("username")
    const password = formData.get("password")

    const schema = z.object({
        username: z.string().min(1, {message: "Du skal udfylde et brugernavn"}), //min 1 tegn langt, laver vi ikke egen costume beskeder, så bruger zod standard engelske beskeder
        password: z.string().min(1, {message: "Du skal udfylde et adgangskode"})
    })

    const validate = schema.safeParse({
        username,
        password
    })
    
    if(!validate.success){ //kun returner fejl hvis formularen er udfyldt forkert
        return{
            formData: {
                username,
                password
            },
            errors: validate.error.format() //Formater til et object vi kan bruge
        }  
    }

} 