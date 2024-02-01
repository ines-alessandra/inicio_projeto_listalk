import { useMutation } from "react-query";
import styles from "./login.module.scss";
import { useState } from "react";
import { postLogin } from "@/api/login/postLogin";
import api from "@/api/http-common";
import { useRouter } from "next/navigation";

const Login = () =>{
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const {push} =  useRouter();

    const logged = async () => {
        
        try{
          await postLogin(login, senha);
          push('/list');
        }catch(error){
          console.log(error);
        }  
      }

    return(
        <>
        <div className={styles.titleSection}>
            <h2 className={styles.title}>Welcome back!</h2>
            <h4 className={styles.subTitle}>Your organized world awaits...</h4>
        </div>
        <div className={styles.loginContainer}>
            <div className={styles.login}>
                <div>
                    <label htmlFor="login" className={styles.login__label}>E-mail Address<span className={styles.login__label__span}>*</span></label>
                    <input className={styles.login__input} type="text" value={login} onChange={(e) => setLogin( e.target.value)} placeholder="Enter your best e-mail" />
                    <label htmlFor="senha" className={styles.login__label}>Password<span className={styles.login__label__span}>*</span></label>
                    <input className={styles.login__input} type="password" value={senha} onChange={(e) => setSenha( e.target.value)} placeholder="Enter a strong password" />
                </div>
                <button className={styles.login__buttonLogin} onClick={logged}>Login</button>
            </div>
        </div>
        </>
    )
}

export default Login;