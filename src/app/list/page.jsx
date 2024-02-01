"use client"
import Header from "@/components/Header"
import Lists from "@/components/Lists"
import styles from '@/components/Header/header.module.scss'

const PageLists = () =>{
    return(
        <main className={styles.mainContainer}>
            <Header />
            <Lists />
        </main>
    )
}

export default PageLists;