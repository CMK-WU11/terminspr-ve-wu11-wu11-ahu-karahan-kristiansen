import ActivityCard from "@/components/ActivityCard";
import PageHeader from "@/components/PageHeader";
import { serverFetch } from "@/lib/server-fetch";

export default async function Kalender({ params }){

    // const uid = (await params).uid

    // const userActivities = await serverFetch(`http://localhost:4000/api/v1/users/${uid}`);
    
    return(
        <>
            <PageHeader text = "Kalender"/>

            {/* {
                userActivities?.map( ( activity ) => {
                    return (
                        <ActivityCard activityInfo={activity} key={ activity?.id } />
                    )
                } )
            } */}
        </>
    )
}