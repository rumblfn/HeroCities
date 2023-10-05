import {Card} from "@/components/Card";
import {getCities} from "@/data/cities";
import {Data} from "@/data/initialData";
import {useEffect, useState} from "react";
import styles from "@/styles/index.module.css";

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
