import {FC} from "react";
import Link from "next/link";
import styles from "@/styles/header.module.css";
import Image from "next/image";

export const Header: FC = () => {
    return <header className={styles.header}>
        <div className={`${styles.wrapper} container`}>
            <Link href="/">
                <div className="link">
                    <Image src="/logo.svg" alt="logo" width={32} height={32}/>
                    <span className={styles.title}>Города-герои</span>
                </div>
            </Link>
            <Link href="/test/">
                <div className={styles.testButton}>
                    <span className={styles.testText}>Пройти тест</span>
                    <div className={styles.testIcon}>
                        <Image src="/arrow-right.svg" alt="arrow" width={24} height={24}/>
                    </div>
                </div>
            </Link>
        </div>
    </header>
}