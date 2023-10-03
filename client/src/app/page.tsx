import Link from "next/link";
import {getCities} from "@/data/cities";

export default async function Home() {
  const data = await getCities()
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
      {data.map(city => <li key={city.id}>
        <Link href={`/city/${city.id}`}>{city.name}</Link>
      </li>)}
    </ul>
  </div>
}
