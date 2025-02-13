import Image from "next/image";
import { cookies } from "next/headers";
import ActivityButton from "../ActivityButton";

import "./activitydetails-style.scss"

export default async function ActivityDetails({ activityInfo }){
    const cookieStore = await cookies()
    const token = cookieStore.get("dance_token")
    const uid = cookieStore.get("dance_uid")

    return(
        <>
            <header className="activity-header">
                <Image
                    alt= { activityInfo?.name }
                    src={ activityInfo?.asset?.url }
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                        zIndex: "-2",
                    }}
                />
                
                <ActivityButton className="activity-btn" token={token.value} uid={uid.value} id={activityInfo?.id}/>
                
            </header>

            <section className="activity-details">
                <h1>{ activityInfo?.name }</h1>
                <p>{ activityInfo?.minAge } - { activityInfo?.maxAge } år | { activityInfo?.weekday } kl. { activityInfo?.time }</p>
                <p>{ activityInfo?.description }</p>
            </section>
        </>
    )
}