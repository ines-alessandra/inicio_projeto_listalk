"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./lists.module.scss";

import { getCategories, getLists  , createList} from "@/api/apiService/getApi";
import Dropdown from "./Dropdown";

const Lists = () => {

    useEffect(() => {
        fillCategories();
        fillLists();
    } , []);

    const [categories, setCategories] = useState([]);
    const [selected, setSelected] = useState();
    const [lists, setLists] = useState([]);

    const fillCategories = async () => {
        const response = await getCategories();
        console.log(response);
        setCategories(response);
    }

    const newList = async () => {
        const response = await createList({
            name: "Edit the list name...",
            description: "Add a description to your list here",
            category: categories[0]
        });
        fillLists();
        console.log("new list");
    }

    const fillLists = async () => {
        const response = await getLists();
        console.log(response);
        setLists(response);
    }

    return (
       <>
        <div className={styles.listContainer}>
            <div className={styles.listHeader}>
                <div className={styles.titleSection}>
                    <h2 className={styles.title}>Your lists</h2>
                    <h4 className={styles.subTitle}>All in one place.</h4>
                </div>
                <div className={styles.filtroSection} >
                    <Dropdown categories={categories} selected={selected} setSelected={setSelected}/>
                </div>
            </div>

            <div className={styles.listSection}> 
               {lists && lists.length > 0 && lists.map((list) => (
                !selected || list.category.name === selected.name ?
                   <div key={list.id} className={styles.listItem}>
                       <Link href={`/list/${list.id}`} className={styles.list}>
                       <h3>{list.name}</h3>
                       </Link>
                   </div>
                   : null
               ))
               }           
            </div>
          
                <button className={styles.buttonAdd} onClick={newList}>Add new list</button>
           
            
        </div>
        
       </>
    );
  };
  
  export default Lists;