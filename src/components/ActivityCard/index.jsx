import Image from "next/image";
import Link from "next/link";

import "./activitycard-style.scss"

export default function ActivityCard({ activityInfo }){

    return(
        
        <Link href={"/aktivitet/" + activityInfo.id}>
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