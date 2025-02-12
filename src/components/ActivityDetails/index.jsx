import Image from "next/image";

import "./activitydetails-style.scss"
import PrimaryButton from "../PrimaryButton";


export default function ActivityDetails({ activityInfo }){

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

                <PrimaryButton text="Tilmeld" className="activity-btn"/>
            </header>

            <section className="activity-details">
                <h1>{ activityInfo?.name }</h1>
                <p>{ activityInfo?.minAge } - { activityInfo?.maxAge } år | { activityInfo?.weekday } kl. { activityInfo?.time }</p>
                <p>{ activityInfo?.description }</p>
            </section>
        </>
    )
    
}