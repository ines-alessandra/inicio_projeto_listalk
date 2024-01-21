"use client"
import Image from 'next/image'
import { useState } from 'react'
import Login from '@/components/Login';
import Home from '@/components/Home';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import styles from '@/components/Home/home.module.scss';

export default function PageHome() {
  const [visible, setVisible] = useState(false);
  return (
    <main className={styles.mainContainer}>
      <Header setVisible={setVisible}></Header>
      {visible && <Login setVisible={setVisible} />}
      <Home />
      <Footer />
    </main>
  )
}
