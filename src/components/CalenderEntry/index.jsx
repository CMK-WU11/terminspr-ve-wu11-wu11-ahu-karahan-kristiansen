import Link from "next/link";

import "./calender-entry-style.scss"

export default function CalenderEntry({ activityInfo }){

    return(
        <Link href={"/aktivitet/" + activityInfo.id}>
            <article className="calender-details">
                <h1>{ activityInfo?.name }</h1>
                <p>{ activityInfo?.weekday } { activityInfo?.time }</p>
            </article>
        </Link>
    )
}