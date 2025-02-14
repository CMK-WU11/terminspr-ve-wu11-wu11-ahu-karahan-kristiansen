import Link from "next/link";

import "./calender-entry-style.scss"

export default function CalenderEntry({ activityInfo }){

    return(
        <Link href={"/aktivitet/" + activityInfo.id}>
            <article className="calender-details">
                <h2>{ activityInfo?.name }</h2>
                <p>{ activityInfo?.weekday } { activityInfo?.time }</p>
            </article>
        </Link>
    )
}