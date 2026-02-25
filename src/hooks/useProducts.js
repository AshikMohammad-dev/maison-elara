import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function useProducts(){

 const [products,setProducts] = useState([]);

 useEffect(()=>{

   const fetchProducts = async ()=>{

     const snapshot = await getDocs(
       collection(db,"products")
     );

     const data = snapshot.docs.map(doc=>({
       id: doc.id,
       ...doc.data()
     }));

     setProducts(data);

   };

   fetchProducts();

 },[]);

 return products;
}