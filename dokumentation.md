# Dokumentation for Terminsprøve - Landrup Dans

Ahu Karahan Kristiansen, WU11

## Tech-Stack

* **Next JS**  
Mit projekt bruger Next Js, som mit Front-End Framework. Jeg har valgt dette Framework da det ligger frisk i min hukommelse. Derudover foretrækker jeg routing systemet og derved mappestruktureringen i Next. Der er også server side og client side som optimerer renderingen af siden og SEO ved dynamisk indhold. Hjælpemidlerne er også let tilgængelige, da Next er et populær valg af Framework og veldokumenteret. 

* **SCSS**
Min web app er stylet med SCSS. Jeg foretrækker fuld kontrol over min styling fremfor at bruge et Framework som Tailwind trods muligheden for at hurtigøre styling processen, er mit workflow dog mere effektivt ved brug af SCSS grundet fuld kontrol. Det er også lettere overskueligt at have alt stylingen i filer der indikerer dette fremfor klasser på diverse komponenter. Derudover tilbyder SCSS yderligere funktionalitet end almindelig CSS med mixins og nesting kræver færre tegn i SCSS end I CSS.

* **React-Icons**
Et Kæmpe ikon bibliotek som jeg har anvendt til ikonerne på min side. Dette har jeg gjort da jeg var sikker på at kunne finde et ikon som matcher ikonerne i projektet. Jeg kunne også gemme ikonerne lokalt, men ændringer af ikonerne er lettere med et kæmpe bibliotek til rådighed fremfor at gemme og ændre navnet og stien manuelt.

* **Zod**
Jeg har anvendt Zod for at validerer min form, da denne valideringsmulighed har taget højde for den kæmpe kode tilsvarende REGEX ville have for samme niveau af validering.

* **Render**
Netlify og Vecels gratis plan har begrænset funktionalitet, den største er loading tiden ikke må overskride 5 sekunder. Derfor er Render det oplagte valg. Fælles for dem alle er at hostingen er gjort klar til skalering, som vi kan betale os til.
Min hjemmeside link: [https://terminspr-ve-wu11-wu11-ahu-karahan.onrender.com](https://terminspr-ve-wu11-wu11-ahu-karahan.onrender.com)

## Kode Eksempel

[Login Form](/src/components/LoginForm/index.jsx)

```jsx
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
            
            <span className="form-error">{formState?.error}</span>

            <PrimaryButton text={isPending ? "Logger ind" : "Log ind"} disable={isPending}/>
        </form>
    )
}
```

Dette component er client-side renderet, da componentet har hooks brugeren integarerer med.

Jeg starter med at importerer to React hooks useActionState og useEffect. Jeg importerer også de nødvendige komponenter, LoginAction samt stylingen til formen.

Først definerer jeg mit LoginForm Component.
Derefter anvender jeg useActionState hooket, som kræver 
- formState som indeholder formens state inklusiv data og errors.
- formAction bliver kaldt når formen er submittet.
- isPending boolean der indikerer hvorvidt form submission venter på respons fra serveren.

Min Effect Hook, logger min formState til consollen når den ændres, dette gør det også lettere at debugge.

Min Form sætter formens aktion til at være formAction funktionen. Så når formen er submittet vil functionen blive kaldet.

noValidate er for at forhindre browseren for at bruge sin egen formvalidering (da jeg bruger Zod for validering).

Jeg implementerer derefter mine inputs for username og password, fælles for disse er at 
- jeg starter med at definerer defaultValue / inital value for input feltet.
- ?. operatoren giver adgang til nested properties uden at give en error hvis en del af min chain er null eller undefined.
Det resterende er type, navn attributen af inputet (for at identificerer inputtet i formdataen) og placeholder som i dette tilfælde er brugernavn og i det andet felt adgangskode.

En error message dukker desuden op hvis felterne er efterladt tomme, og derfor fortæller at man skal udfylde et brugernavn og adgangskode.

I bunden er en sidste span som bliver vist hvis man skriver sit brugernavn eller adgangskode forkert, hvilket skal personen af sikkerhedsmæssige grunde ikke vide så det er en general error message: "Forkert email eller password" (Dette foregår i actions/login.js)

Min submit button er en component som tager 2 props, text - hvor der står "Log ind", medmindre formen er igang med at blive submittet, så ændres den til "Logger ind". 
Derudover bliver den disabled hvis isPending er true, dette forhindre flere submissions til serveren og derved forhindre flere login forsøg. 