import styles from "./header.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation"
import Image from "next/image";

const Header = ({ setVisible }) => {
    const {push} = useRouter();
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
                <h1>About</h1>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.loginButton} onClick={() => push("/login")}>
                    Login
                </button>
                <button className={styles.registerButton} onClick={() => push("/register")}>
                    Register
                </button>
            </div>
      </div>
    );
  };
  
  export default Header;