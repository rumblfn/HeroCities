import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {City} from "@/data/initialData";
import styles from "@/styles/card.module.css";

interface CardPropsI {
  city: City;
}

export const Card: FC<CardPropsI> = ({city}) => {
  return <div className={styles.card}>
    <Image 
      width={0}
      height={0}
      sizes="100vw"
      src={city.preview}
      alt={`preview ${city.name}`}
      style={{width: '100%', height: 'auto', borderRadius: '10px'}}
    />
    <Link href={`/city/${city.id}`}>{city.name}</Link>
  </div>
}