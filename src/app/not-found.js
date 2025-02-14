import Link from 'next/link'
import Image from "next/image"
import splash from "@/assets/images/splash-image.jpg"

import "@/components/LinkButton/linkbtn-style.scss"

import "@/styles/error-page-style.scss"
import LinkButton from '@/components/LinkButton'

export default function NotFound() {

    return (
        <main className="error-page">

            <div className="background-tint">
            </div>

            <div className="error-container">
                <h1>Siden ikke fundet</h1>
                <LinkButton link='/aktiviteter' linktext="Hjem" className="fade-in"/>
            </div>

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
