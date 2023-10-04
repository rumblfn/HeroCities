import {FC} from "react";
import styles from "@/styles/header.module.css";
import Link from "next/link";

export const Header: FC = () => {
    return <header className={styles.header}>
        <div className={`${styles.wrapper} container`}>
            <div className="link">
                <Link href="/">Home</Link>
            </div>
            <div className="link">
                <Link href="/test/">Test</Link>
            </div>
        </div>
    </header>
}