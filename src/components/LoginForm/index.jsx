'use client'

import { useActionState, useEffect } from "react"
import PrimaryButton from "../PrimaryButton"
import LoginAction from "@/actions/login"

import "./loginform-style.scss"

export default function LoginForm(){

    const [formState, formAction, isPending] = useActionState(LoginAction, null)

    useEffect(function() {
        console.log("formstate", formState)
    }, [formState])

    return(

        <form action={formAction} className="loginform" noValidate>

            <input 
                defaultValue={formState?.formData?.username}
                type="text" 
                name="username" 
                placeholder="brugernavn"
            />
            <span className="form-error">{formState?.errors?.username?._errors[0]}</span>

            <input 
                defaultValue={formState?.formData?.password} 
                type="password" 
                name="password" 
                placeholder="adgangskode" 
            />
            <span className="form-error">{formState?.errors?.password?._errors[0]}</span>

            {/* {isPending ? "Logger ind" : "Log ind"} */}

            <PrimaryButton text="Log ind" disable={isPending}/>
        </form>
    )
}

