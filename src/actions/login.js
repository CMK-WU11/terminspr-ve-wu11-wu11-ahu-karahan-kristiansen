'use server'

import { z } from "zod"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function LoginAction(prevState, formData){ 

    const username = formData.get("username")
    const password = formData.get("password")

    const schema = z.object({
        username: z.string().min(1, {message: "Du skal udfylde et brugernavn"}),
        password: z.string().min(1, {message: "Du skal udfylde et adgangskode"})
    })

    const validate = schema.safeParse({
        username,
        password
    })
    
    if(!validate.success){
        return{
            formData: {
                username,
                password
            },
            errors: validate.error.format()
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
        
		if (response.status === 401) { // status 401 = Unauthorized  
			return {
				formData: {
					username,
					password
				},
				error: "Forkert email eller password"
			}
		}

        if (!response.ok){
            throw new Error( 'Error: ' + response.statusText )
        }

		const data = await response.json()
        console.log(data)

		const cookieStore = await cookies() //import cookies fra next headers
		cookieStore.set("dance_token", data.token, { maxAge: data.validUntil }) //maxAge is set to the same as the api - stored in validUntil
		cookieStore.set("dance_uid", data.userId, { maxAge: data.validUntil }) 

	} catch (error) {
		throw new Error(error) 
	}
	redirect("/")
}