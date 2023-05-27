import {getDocs, getFirestore, collection} from 'firebase/firestore'
import React, { useEffect, useState } from "react";
import "../../styles/Index.css";
import { IndexCarousel } from "./IndexCarousel";
import { IndexCarouselBag } from "./IndexCarouselBag";

export const Index = () => {

  const [items, setItems] = useState([])

  // getting items to show in index carousel, not interesting scaling it at the moment

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

  return (
    <>
    <div className="container-index">
      <IndexCarousel/>
      <IndexCarouselBag/>
    </div>
    </>
  );
};
