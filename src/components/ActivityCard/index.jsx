import Image from "next/image";


export default function ActivityCard({ activityInfo }){

    return(
        <article>
            <div>
                <p>{ activityInfo?.name }</p>
            </div>
            <Image
                    alt="splash image"
                    src={ activityInfo?.asset?.url }
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                        zIndex: "-2",
                        maxWidth: "300px"
                        
                    }}
                />
        </article>
    )
}