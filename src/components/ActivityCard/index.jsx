import Image from "next/image";

import "./activitycard-style.scss"
import Link from "next/link";


export default function ActivityCard({ activityInfo }){

    return(
        
        <Link href={"/aktivitet/" + activityInfo.id} className="activity-link">
            <article className="activity-card">

                <div className="activity-info">
                    <p>{ activityInfo?.name }</p>
                    <p>{ activityInfo?.minAge } - { activityInfo?.maxAge } år</p>
                </div>

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
            </article>
        </Link>
    )
    
}