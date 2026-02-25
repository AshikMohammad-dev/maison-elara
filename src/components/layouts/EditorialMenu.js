import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";

function EditorialMenu({ close, onCategorySelect }) {

  const [menuItems, setMenuItems] = useState([]);

  // ===============================
  // AUTO CATEGORY SYSTEM
  // ===============================
  useEffect(() => {

    const unsubscribe = onSnapshot(
      collection(db, "products"),
      (snapshot) => {

        const categoryCount = {};

        // Count products per category
        snapshot.forEach((doc) => {

          const data = doc.data();

          if (!data.category) return;

          const category =
            data.category
              .trim()
              .toLowerCase();

          categoryCount[category] =
            (categoryCount[category] || 0) + 1;

        });

        // ✅ Auto hide empty categories
        const activeCategories =
          Object.keys(categoryCount)
            .filter(cat => categoryCount[cat] > 0);

        // Build Menu
        const dynamicMenu = [

          {
            id: "collections",
            label: "Collections",
            type: "section"
          },

          ...activeCategories.map(cat => ({

            id: cat.replace(/\s+/g, "-"),

            label:
              cat.charAt(0).toUpperCase() +
              cat.slice(1),

            type: "category"

          })),

          {
            id: "visit",
            label: "Visit",
            type: "section"
          },

          {
            id: "contact",
            label: "Contact",
            type: "section"
          }

        ];

        setMenuItems(dynamicMenu);

      }
    );

    return () => unsubscribe();

  }, []);

  // ===============================
  // CLICK HANDLER
  // ===============================
  const handleClick = (item) => {

    // Collections
    if (item.id === "collections") {

      onCategorySelect(null);

      setTimeout(() => {
        document
          .getElementById("products")
          ?.scrollIntoView({
            behavior: "smooth"
          });
      }, 120);
    }

    // Category
    else if (item.type === "category") {

      onCategorySelect(item.label);

      setTimeout(() => {
        document
          .getElementById("products")
          ?.scrollIntoView({
            behavior: "smooth"
          });
      }, 120);
    }

    // Sections
    else {

      document
        .getElementById(item.id)
        ?.scrollIntoView({
          behavior: "smooth"
        });

    }

    close();

  };

  return (
    <>
      <div
        className="menu-overlay"
        onClick={close}
      />

      <div className="side-menu">

        <button
          className="menu-close"
          onClick={close}
        >
          ×
        </button>

        <ul>

          {menuItems.map((item) => (

            <li
              key={item.id}
              onClick={() => handleClick(item)}
            >
              {item.label}
            </li>

          ))}

        </ul>

      </div>
    </>
  );
}

export default EditorialMenu;