import Image from "next/image";
import splash from "@/assets/images/splash-image.jpg"

import PageHeader from "@/components/PageHeader";
import LoginForm from "@/components/LoginForm";

export default function Login(){
    return(
        <>
            <PageHeader text = "Log ind"/>


            <LoginForm />

            <Image
                alt="splash image"
                src={splash}
                placeholder="blur"
                quality={100}
                fill
                sizes="100vw"
                style={{
                    objectFit: 'cover',
                    zIndex: "-2"
                }}
            />
        </>
    )
}