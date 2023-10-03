import styles from '../../page.module.css'
import {notFound} from "next/navigation";
import {getCity} from "@/data/cities";

export default async function Page({ params }: { params: { id: string } }) {
    const city = await getCity(Number(params.id))
    if (!city) return notFound()

    return <div>
        <h4>{city.name}</h4>
        {city.description}
    </div>
}