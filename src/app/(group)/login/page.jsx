import Image from "next/image";
import splash from "@/assets/images/splash-image.jpg"

import PageHeader from "@/components/PageHeader";
import LoginForm from "@/components/LoginForm";

import "@/styles/login-page-style.scss"

export default function Login(){
    return(
        <main className="main-login">

            <div className="background-tint">
            </div>

            <section className="login-section">
                <PageHeader text = "Log ind"/>
                
                <LoginForm />
            </section>

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
        </main>
    )
}