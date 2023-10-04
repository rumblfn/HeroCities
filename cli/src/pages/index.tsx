import Link from "next/link";
import {getCities} from "@/data/cities";
import {useEffect, useState} from "react";
import {Data} from "@/data/initialData";
import {Header} from "@/components/Header";

export default function Home() {
  const [cities, setCities] = useState<Data>([])

  useEffect(() => {
    getCities()
      .then(data => {
        if (data?.length) setCities(data)
      })
      .catch(console.error)
  }, [])

  return <div className="container">
    <ul>
      {cities.map(city => <li key={city.id}>
        <Link href={`/city/${city.id}`}>{city.name}</Link>
      </li>)}
    </ul>
  </div>
}
