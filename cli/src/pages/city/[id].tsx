import {getCity} from "@/data/cities";
import {useEffect, useState} from "react";
import {City} from "@/data/initialData";
import {useRouter} from "next/router";

export default function Page() {
  const router = useRouter();
  const [city, setCity] = useState<City>()

  useEffect(() => {
    getCity(Number(router.query.id))
      .then(data => {
        console.log(data)
        if (data) setCity(data)
      })
      .catch(console.error)
  }, [router])

  return city
    ? <div>
      <h4>{city.name}</h4>
      {city.description}
    </div>
    : null

}