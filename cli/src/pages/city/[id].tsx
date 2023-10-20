import {getCity} from "@/data/cities";
import {FC, useEffect, useState} from "react";
import {City} from "@/data/initialData";
import {useRouter} from "next/router";
import styles from "@/styles/city.module.css";
import {Carousel, CarouselItem} from "@/components/Carousel";
import Image from "next/image";

interface SlidePropsI {
  image: string
}

const Slide: FC<SlidePropsI> = ({image}) => (
  <div>
    <Image
      src={`/cities/images/${image}`}
      alt={image}
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: '100vw', height: '70vh', objectFit: "cover" }}
    />
  </div>
);

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

  if (!city) return null

  return <>
    <Carousel>
      {city.images.map((image, id) =>
        <CarouselItem key={image + id}>
          <Slide image={image}/>
        </CarouselItem>
      )}
    </Carousel>
    <div className="container">
      <div className={styles.main}>
        <h1 className={styles.title}>{city.name}</h1>
        <div className={styles.body}>
          <p className={styles.text}>
            {city.description}
          </p>
        </div>
      </div>
    </div>
  </>
}