import Link from "next/link";
import {getCities} from "@/data/cities";
import {useEffect, useState} from "react";
import {Data} from "@/data/initialData";

export default function Home() {
  const [cities, setCities] = useState<Data>([])

  useEffect(() => {
    getCities()
      .then(data => {
        if (data?.length) setCities(data)
      })
      .catch(console.error)
  }, [])

  return <div>
    <header>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/test/">Test</Link>
        </li>
      </ul>
    </header>
    <ul>
      {cities.map(city => <li key={city.id}>
        <Link href={`/city/${city.id}`}>{city.name}</Link>
      </li>)}
    </ul>
  </div>
}
