import styles from './page.module.css'
import {data} from "@/data/getCities";
import Link from "next/link";

export default function Home() {
  return <div>
    <header>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/test">Test</Link>
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
