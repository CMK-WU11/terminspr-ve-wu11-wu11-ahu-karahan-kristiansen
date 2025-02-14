import Image from "next/image";
import { cookies } from "next/headers";

import ActivityButton from "../ActivityButton";
import PageHeader from "@/components/PageHeader";

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

                <PageHeader text = { activityInfo?.name }/>
                
                <p>{ activityInfo?.minAge } - { activityInfo?.maxAge } år | { activityInfo?.weekday } { activityInfo?.time }</p>
                <p>{ activityInfo?.description }</p>
            </section>
        </>
    )
}