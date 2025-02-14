import CalenderEntry from "@/components/CalenderEntry";
import PageHeader from "@/components/PageHeader";
import { serverFetch } from "@/lib/server-fetch";
import { cookies } from "next/headers";

export default async function Kalender(){

    const cookieStore = await cookies();
    const uid = cookieStore.get('dance_uid')?.value
    const token = cookieStore.get('dance_token')?.value

    const response = await fetch(`http://localhost:4000/api/v1/users/${ uid }`, {
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "Authorization": `Bearer ${ token }`
        }
    })
    const userActivities = (await response.json())?.activities
    console.log("user activities", userActivities) //logging only the activities
    
    return(
        <main>
            <PageHeader text = "Kalender"/>
            {
                userActivities?.map( ( activity ) => {
                    return (
                        <CalenderEntry activityInfo={activity} key={ activity?.id } />
                    )
                } )
            }
        </main>
    )
}