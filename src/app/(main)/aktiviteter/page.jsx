import ActivityCard from "@/components/ActivityCard";
import PageHeader from "@/components/PageHeader";
import { serverFetch } from "@/lib/server-fetch";

export default async function Aktiviteter(){
    const activities = await serverFetch('http://localhost:4000/api/v1/activities');

    return(
        <>
            <PageHeader text = "Aktiviteter"/>

            {/* <p>{ activities[1].name }</p> */}
            
            {
                activities?.map( ( activity ) => {
                    return (
                        //TODO - Add UUID to the key value
                        <ActivityCard activityInfo={activity} key={ activity?.id } />
                    )
                } )
            }
        </>
    )
}