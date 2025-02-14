import ActivityCard from "@/components/ActivityCard";
import PageHeader from "@/components/PageHeader";
import { serverFetch } from "@/lib/server-fetch";

export default async function Aktiviteter(){
    const activities = await serverFetch('http://localhost:4000/api/v1/activities');

    return(
        <main className="main-spacing">
            <PageHeader text = "Aktiviteter"/>
            {
                activities?.map( ( activity ) => {
                    return (
                        <ActivityCard activityInfo={activity} key={ activity?.id } />
                    )
                } )
            }
        </main>
    )
}