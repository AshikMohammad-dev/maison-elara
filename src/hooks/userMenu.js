import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function useMenu() {

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {

    const fetchMenu = async () => {

      const snapshot = await getDocs(
        collection(db, "menu")
      );

      const menu = snapshot.docs.map(doc => ({
        id: doc.data().id,
        label: doc.data().label,
        type: doc.data().type,
        order: doc.data().order || 0
      }));

      menu.sort((a,b)=> a.order - b.order);

      setMenuItems(menu);
    };

    fetchMenu();

  }, []);

  return menuItems;
}