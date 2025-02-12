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

            <input type="text" name="username" placeholder="brugernavn"/>

            <input type="password" name="password" placeholder="adgangskode" />

            <span>{formState?.error}</span>

            {/* {isPending ? "Logger ind" : "Log ind"} */}

            <PrimaryButton text="Log ind" disable={isPending}/>
        </form>
    )
}

