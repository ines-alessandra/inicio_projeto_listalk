"use client"
import Header from "@/components/Header"
import Register from "@/components/Register"
import styles from '@/components/Header/header.module.scss';

const PageRegister = () =>{
    return(
        <main className={styles.mainContainer}>
            <Header />
            <Register />
        </main>
    )
}

export default PageRegister;