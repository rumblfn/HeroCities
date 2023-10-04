import Link from "next/link";
import {getCities} from "@/data/cities";
import {useEffect, useState} from "react";
import {Data} from "@/data/initialData";
import Image from "next/image";
import styles from "@/styles/index.module.css";
import {Card} from "@/components/Card";

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
    <div className={styles.grid}>
      {cities.map(city => <Card city={city} key={city.id}/>)}
    </div>
  </div>
}
