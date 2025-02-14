import CalenderEntry from "@/components/CalenderEntry";
import PageHeader from "@/components/PageHeader";
import { serverFetch } from "@/lib/server-fetch";
import { cookies } from "next/headers";

export default async function Kalender(){

    const cookieStore = await cookies();
    const uid = await cookieStore.get('dance_uid')?.value
    const token = await cookieStore.get('dance_token')?.value

    const userActivities = (await getUserActivities())
    
    async function getUserActivities(){
        try {
            const response = await fetch(`http://localhost:4000/api/v1/users/${ uid }`, {
                "method": "GET",
                "headers": {
                    "content-type": "application/json",
                    "Authorization": `Bearer ${ token }`
                }
            })

            if (!response.ok) {
                const error = await response.text();
                throw new Error(`Server error: ${response.status} ${response.statusText}\n${error}`);
            }

            const user = await response.json()
            const userActivities = await user?.activities
            console.log("user activities", userActivities) //logging only the activities
            return await  userActivities
        } catch (error) {
            throw new Error(`Error while fetching user activities:\n${ error }`)
        }
    }

    return(
        <main className="main-spacing">
            <PageHeader text = "Kalender"/>
            {
                
                userActivities ?
                userActivities?.map( ( activity ) => {
                    return (
                        <CalenderEntry activityInfo={activity} key={ activity?.id } />
                    )
                } )
                : null
            }
        </main>
    )
}