'use server' //actions skal have dette

import { z } from "zod"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

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

	try {
		const response = await fetch("http://localhost:4000/auth/token", {
			"method": "POST",
			"headers": {
				"content-type": "application/json"
			},
			"body": JSON.stringify({
				"username": username, 
				"password": password
			})
		})
        
		if (response.status === 401) { // status 401 = Unauthorized   - hvis vi skriver forkert brugernavn eller adgangskode! 
			return {
				formData: {
					username,
					password
				},
				error: "Forkert email eller password" // generel fejl hvis api svarer 400 ellers forsætte med cookies
			}
		}

        if (!response.ok){
            throw new Error( 'Error: ' + response.statusText )
        }

		const data = await response.json()
        console.log(data)

		const cookieStore = await cookies() //import cookies fra next headers
		cookieStore.set("dance_token", data.token, { maxAge: data.validUntil }) //maxage is set to the same as the api (stored in validUntil)
		cookieStore.set("dance_uid", data.userId, { maxAge: data.validUntil }) 

	} catch (error) {
		throw new Error(error) //sker der en fejl throw error
	}
	redirect("/") //redirect til forsiden
}