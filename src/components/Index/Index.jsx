import React, { useEffect, useState } from "react";
import "../Index/Index.css";
import { IndexCarousel } from "./IndexCarousel";
import { IndexCarouselBag } from "./IndexCarouselBag";
import {doc, getDoc, getDocs, getFirestore, collection} from 'firebase/firestore'

export const Index = () => {

/*   const [items, setItems] = useState([])

  useEffect(() => {
    const db = getFirestore();
    const biciRef = doc(db, "items", "cUbSx11TU0x4RhyL68BO")
    getDoc(biciRef).then((snapshot) => {
      if (snapshot.exists()) {
        setItems({id: snapshot.id, ...snapshot.data()})
      }
    })

  }, []) */

  const [items, setItems] = useState([])

    useEffect(() => {
      const db = getFirestore()
      const djRefCollection = collection(db, 'items')
  
      getDocs(djRefCollection).then((snapshot) => {
        if(snapshot === 0){
          console.log("No hay resultados")
        }    
      setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
      })
  
    }, [])

    console.log(items)

  return (
    <>
    <div className="container-index">
      <IndexCarousel/>
      <IndexCarouselBag/>
    </div>
{/* 
    {
      items && 
      <div>
        <img src={items.image} alt="" />
      </div>
    } */}
    </>
  );
};
