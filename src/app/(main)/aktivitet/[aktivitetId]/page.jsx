import ActivityDetails from "@/components/ActivityDetails";
import { serverFetch } from "@/lib/server-fetch";

export default async function Aktivitet({ params }) {

    const aktivitetId = (await params).aktivitetId

    const activity = await serverFetch(`http://localhost:4000/api/v1/activities/${aktivitetId}`);

	return (
        <main>
            <ActivityDetails activityInfo={activity} key={ activity?.id } />
        </main>

	)
}