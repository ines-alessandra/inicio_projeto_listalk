import styles from "./register.module.scss";


const Register = ({}) =>{
    return(
        <>
        <div className={styles.titleSection}>
            <h2 className={styles.title}>Register now</h2>
            <h4 className={styles.subTitle}>to be a part of the list world.</h4>
        </div>
        <div className={styles.registerContainer}>
            <div className={styles.register}>
                <div>
                    <label htmlFor="username" className={styles.register__label}>Username<span className={styles.register__label__span}>*</span></label>
                    <input className={styles.register__input} type="text" placeholder="Enter your chosen username" />
                    <label htmlFor="email" className={styles.register__label}>E-mail Address<span className={styles.register__label__span}>*</span></label>
                    <input className={styles.register__input} type="text" placeholder="Enter your best e-mail" />
                    <label htmlFor="senha" className={styles.register__label}>Password<span className={styles.register__label__span}>*</span></label>
                    <input className={styles.register__input} type="password" placeholder="Enter a strong password" />
                </div>
                <button className={styles.register__buttonRegister} onClick={() => mutate()}>Register</button>
            </div>
        </div>
        </>
    )
}

export default Register;