"use client"
import Header from "@/components/Header"
import styles from '@/components/Header/header.module.scss'
import List from "@/components/Lists/List"

const PageList = () =>{
    return(
        <main className={styles.mainContainer}>
            <Header />
            <List />
        </main>
    )
}

export default PageList;