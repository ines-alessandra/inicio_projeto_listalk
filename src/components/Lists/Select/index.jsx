
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./select.module.scss";
import { getCategoria } from "@/api/apiService/getApi";

const Select = ({categories, selected, setSelected}) => {

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className={styles.dropdown}>
            <div className={styles.button} onClick={()=>setIsOpen(!isOpen)}>
                {selected ? selected.name : "Filter by category"}
                

            </div>

            {isOpen && categories && categories.length > 0 &&
                <div className={styles.list}>
                    {categories.map((category) => (
                        <div className={styles.item} key={category.id} onClick={() => {
                            setSelected(category)
                            setIsOpen(false)
                        }}>{category.name}</div>
                    ))}
                </div>
            }
        </div>
    )




};

export default Select;