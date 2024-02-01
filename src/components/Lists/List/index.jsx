"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./list.module.scss";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";


import { getCategories, getItem, updateList , deleteList , createItem, createCategories, getList} from "@/api/apiService/getApi";
import Select from "../Select";

const List = () => {

    useEffect(() => {
        fillCategories();
    } , []);

    const [categories, setCategories] = useState([]);
    const [selected, setSelected] = useState();
    const [item, setItem] = useState([]);
    const [newCategory, setNewCategory] = useState("");
    const [newItems, setNewItems] = useState("");
    const { id } = useParams();
    const [list, setList] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const {push} =  useRouter();


    

    const fillCategories = async () => {
        const response = await getCategories();
        console.log(response);
        setCategories(response);
    }

    const newCategories = async () => {
        const response = await createCategories({
            "name": newCategory
        });
        fillCategories();
    }

    const newItem = async () => {
        const response = await createItem(id,{
            "content": newItems
        });
        fillItem();
    }

    const fillItem = async () => {
        const response = await getItem(id);
        console.log(response);
        setItem(response);
    }

    const fillList = async () => {
        const response = await getList(id);
        console.log(response);
        setList(response);
        setName(response.name);
        setDescription(response.description);
    }

    useEffect(() => {
        fillItem();
        fillCategories();
        fillList();
    } , []);


    const saveList = async () => {
        const response = await updateList(id, {
            name: name,
            description: description,
            category:selected
            
        });
        console.log(response);
        push(`/list`);
    }

    const removeList = async () => {
        const response = await deleteList(id);
        console.log(response);
        push(`/list`);
    }

    return (
       <>
        <div className={styles.listContainer}>
            <div className={styles.listHeader}>
                <div className={styles.titleSection}>
                    <textarea className={styles.title} value={name} onChange={(e)=>{setName(e.target.value)}} ></textarea>
                    <textarea className={styles.subTitle} value={description} onChange={(e)=>{setDescription(e.target.value)}} ></textarea>
                </div>
               
            </div>    
            <div className={styles.listSection}> 
               {item && item.length > 0 && item.map((iten) => (
                   <div key={iten.id} className={styles.listItem}>
                       <div className={styles.item}>
                       <h3>{iten.content}</h3>
                       <Image src={`/images/Close.png`} width={15} height={15} ></Image>
                       </div>
                   </div>
               ))
               }           
            </div>
               <section className={styles.bottom}  >
            <div className={styles.inputContainer} >
                <label htmlFor={newItems}>New item:</label>
                <div className={styles.input}>
                    <input type="text" value={newItems} onChange={(e) => setNewItems(e.target.value)} placeholder="Enter your another item to your list" />
                    <button onClick={newItem}><Image src={`/images/Vector.png`} width={15} height={15} ></Image></button>
                </div>
                
                <label htmlFor={newCategory}>New category:</label>
                <div className={styles.input}>
                <Select categories={categories} selected={selected} setSelected={setSelected}/>
                </div>
            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.buttonAdd} onClick={removeList}>Delet List</button>
                <button className={styles.buttonAdd} onClick={saveList}>Save list</button>
            </div>
            </section>
        </div>
        
       </>
    );
  };
  
  export default List;