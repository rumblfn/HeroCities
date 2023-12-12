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
      <h1>Города-герои</h1>
      <p className={styles.description}>
        {'"'}Город-герой{'"'} - высшая степень отличия, которой удостоились города, прославившиеся своей героической обороной во время Великой Отечественной войны. <br/>
        Впервые термин «город-герой» прозвучал в приказе Верховного Главнокомандующего СССР Иосифа Сталина от 1 мая 1945 года: «Сегодня, 1 мая, произвести салют в столицах союзных республик: Москве, Киеве, Минске, ... , а также в городах-героях: Ленинграде, Сталинграде, Севастополе и Одессе — двадцатью артиллерийскими залпами». <br/>
        Позднее к четырем упомянутым городам присоединились и другие. В 1965 году было официально утверждено положение о почетном звании «Город-герой», а к 1985 году был окончательно оформлен перечень из 13 городов-героев. В него вошли: Ленинград, Одесса, Севастополь, Волгоград (Сталинград), Киев, Брестская крепость, Москва, Керчь, Новороссийск, Минск, Тула, Мурманск, Смоленск.
      </p>
    </main>
    <div className={styles.grid}>
      {cities.map(city => <Card city={city} key={city.id}/>)}
    </div>
  </div>
}