
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./dropdown.module.scss";
import { getCategoria } from "@/api/apiService/getApi";

const Dropdown = ({categories, selected, setSelected}) => {

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className={styles.dropdown}>
            <div className={styles.button} onClick={()=>setIsOpen(!isOpen)}>
                <Image  src="/images/Filter.svg" height={15} width={15} />
                {selected ? selected.name : "Filter by category"}
                {selected && <Image alt="filter" src="/images/Close.png" height={15} width={15} onClick={() => setSelected(null)}/>}

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

export default Dropdown;