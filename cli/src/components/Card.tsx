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
    <Link href={`/city/${city.id}`}>
      <Image
        width={0}
        height={0}
        sizes="100vw"
        src={city.preview}
        alt={`preview ${city.name}`}
        style={{width: '100%', height: '100%', borderRadius: '10px'}}
      />
      <span>{city.name}</span>
    </Link>
  </div>
}