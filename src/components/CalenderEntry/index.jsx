import Link from "next/link";

export default function CalenderEntry({ activityInfo }){

    return(
            <Link href={"/aktivitet/" + activityInfo.id} className="activity-link">
                <section className="activity-details">
                    <h1>{ activityInfo?.name }</h1>
                    <p>{ activityInfo?.weekday } { activityInfo?.time }</p>
                </section>
            </Link>
    )
}