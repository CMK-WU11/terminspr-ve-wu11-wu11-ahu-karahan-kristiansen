"use client"

import Image from "next/image"
import splash from "@/assets/images/splash-image.jpg"
import { useEffect } from "react"
import "@/components/LinkButton/linkbtn-style.scss"

import "@/styles/error-page-style.scss"

export default function Error({ error, reset }) {

	useEffect(function () {
		console.error(error)
	}, [error])

	return (
		<main className="error-page">

			<div className="background-tint">
            </div>

			<div className="error-container">
				<h1>Ups, noget gik galt!</h1>
				<button onClick={() => reset()}>Prøv igen</button>
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
