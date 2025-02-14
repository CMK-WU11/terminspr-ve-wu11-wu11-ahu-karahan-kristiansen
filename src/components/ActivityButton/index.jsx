'use client'

import "@/components/PrimaryButton/primarybtn-style.scss"

import { useEffect, useState } from "react"


export default function ActivityButton({className, token, uid, id }) {

    const [isSignedUp, setIsSignedUp] = useState(false)
    
	useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:4000/api/v1/users/${uid}`, {
                "method": "GET",
                "headers": {
                    "Authorization": "Bearer " + token
                }
            })
            const data = await response.json()
            console.log("user activities", data.activities) //logging only the activities
            setIsSignedUp( data.activities.some(element => element === id))
        }
        fetchData();
    }), [];

	return (
        <button className={`primary-btn${ className ? ` ${className}` : ''}`}>
            {/* {isSignedUp ? "Tilmeld" : "Forlad"} */}
            Tilmeld
        </button>
	)
}