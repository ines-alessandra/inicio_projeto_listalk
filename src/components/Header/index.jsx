import styles from "./header.module.scss";
import api from "@/api/http-common";
import Link from "next/link";
import { useRouter } from "next/navigation"
import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
    const {push} = useRouter();
    const[session, setSession] = useState(false); //session é a var, e setSession é a função altera valor
    const verifySession = () => {
        if (localStorage.getItem('token')){
            setSession(true);
        }else{
            setSession(false);
        }
    }

    useEffect(
        () => {verifySession()},[]
    );

    const removeToken = () => {
        localStorage.removeItem('token');
        api.defaults.headers.authorization = null;
        setSession(false);
        push('/');     
    }

    return (
        <div className={styles.header}>
            <div className={styles.leftSection}>
                <Image
                    src="/images/pecil_535524.png" 
                    alt="Pencil"
                    className={styles.image}
                    width={30}
                    height={30}
                />
            </div>
            <div className={styles.titleContainer}>
                <Link href="/" className={styles.titleContainer__link}>Home</Link>
                <Link href="/list" className={styles.titleContainer__link}>Lists</Link>
                
            </div>
            <div className={styles.buttonContainer}>
                {session &&
                    <button className={styles.registerButton} onClick={removeToken}>
                        Logout
                    </button>
                }
                {!session &&
                    <>
                        <button className={styles.loginButton} onClick={() => push("/login")}>
                            Login
                        </button>
                        <button className={styles.registerButton} onClick={() => push("/register")}>
                            Register
                        </button>
                    </>
                }
                
            </div>
      </div>
    );
  };
  
  export default Header;