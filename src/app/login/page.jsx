"use client"
import { useState } from 'react'
import Header from "@/components/Header"
import Login from "@/components/Login"
import styles from '@/components/Header/header.module.scss';

const PageLogin = () =>{
    const [visible, setVisible] = useState(false);
    return(
        <main className={styles.mainContainer}>
            <Header setVisible={setVisible}></Header>
            {visible && <Login setVisible={setVisible} />}
            <Login />
        </main>
    )
}

export default PageLogin;