import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { initializeFirebase } from "./configFirebase";

export const getProducts = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const app = initializeFirebase();
    const db = getFirestore(app);
    const djRefCollection = collection(db, "items");

    getDocs(djRefCollection)
      .then((snapshot) => {
        if (snapshot.size === 0) {
          console.log("No hay resultados");
        } else {
          setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        }
      })
      .catch((error) => {
        console.log("Error al obtener los productos:", error);
      });
  }, []);

  return {
    items,
  };
};