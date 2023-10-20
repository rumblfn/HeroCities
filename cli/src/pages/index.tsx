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
    <main className={styles.main}>
      <h1>Города-герои — Lorem ipsum.</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet aperiam
        assumenda, consectetur, consequatur ea earum, eligendi enim est fugiat laborum molestias nihil porro quaerat
        quasi quos recusandae sequi tempora temporibus ullam. Ad alias assumenda debitis deleniti earum esse harum ipsum
        laudantium magnam, molestias mollitia neque nisi praesentium rerum soluta.
      </p>
    </main>
    <div className={styles.grid}>
      {cities.map(city => <Card city={city} key={city.id}/>)}
    </div>
  </div>
}
