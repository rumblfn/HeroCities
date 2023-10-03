import styles from '../../page.module.css'
import {notFound} from "next/navigation";
import {data} from "@/data/getCities";

export default function Page({ params }: { params: { id: string } }) {
    const city = data.find(c => c.id === Number(params.id))
    if (!city) return notFound()

    return <div>
        <h4>{city.name}</h4>
        {city.description}
    </div>
}