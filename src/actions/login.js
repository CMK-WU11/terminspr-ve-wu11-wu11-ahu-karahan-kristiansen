'use server' //actions skal have dette

export default async function LoginAction(prevState, formData){ //server actions skal være async

    const username = formData.get("username")
    const password = formData.get("password")

    if (!username.lenght || !password.lenght){
        return { error: "Du skal udfylde begge felter" }
    }
} 