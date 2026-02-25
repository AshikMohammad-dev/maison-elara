import { useEffect, useState } from "react";
import {
collection,
addDoc,
getDocs,
deleteDoc,
doc,
updateDoc
} from "firebase/firestore";

import { db } from "../../firebase/firebase";
import { uploadImage } from "../utils/uploadImage";
import ConfirmModal from "../components/ConfirmModal";

export default function ProductsAdmin(){

const [products,setProducts]=useState([]);
const [categories,setCategories]=useState([]);

const [loading,setLoading]=useState(true);

const [uploading,setUploading]=useState(false);
const [progress,setProgress]=useState(0);

const [editId,setEditId]=useState(null);

const [modalState, setModalState] = useState({
  isOpen: false,
  type: "",
  message: "",
  productId: null
});

const [form,setForm]=useState({
name:"",
price:"",
category:"",
image:""
});


// =====================
// FETCH PRODUCTS
// =====================

const fetchProducts = async()=>{

setLoading(true);

const snap =
await getDocs(collection(db,"products"));

setProducts(
snap.docs.map(d=>({
id:d.id,
...d.data()
}))
);

setLoading(false);

};


// =====================
// FETCH CATEGORIES
// =====================

const fetchCategories = async()=>{

const snap =
await getDocs(collection(db,"categories"));

setCategories(
snap.docs.map(d=>d.data().name)
);

};


useEffect(()=>{

fetchProducts();
fetchCategories();

},[]);


// =====================
// IMAGE UPLOAD
// =====================

const handleUpload = async(e)=>{

const file = e.target.files[0];
if(!file) return;

setUploading(true);

const url =
await uploadImage(file,setProgress);

setForm(prev=>({
...prev,
image:url
}));

setUploading(false);

};


// =====================
// ADD OR UPDATE
// =====================

const saveProduct = async()=>{

if(!form.name || !form.image){

setModalState({
isOpen: true,
type: "error",
message: "Please fill all required fields (Name & Image)"
});
return;

}


// UPDATE
if(editId){

await updateDoc(
doc(db,"products",editId),
form
);

setModalState({
isOpen: true,
type: "success",
message: "Product Updated Successfully ✅"
});

setEditId(null);

}else{

await addDoc(
collection(db,"products"),
form
);

setModalState({
isOpen: true,
type: "success",
message: "Product Added Successfully ✅"
});

}

setForm({
name:"",
price:"",
category:"",
image:""
});

fetchProducts();

};


// =====================
// EDIT
// =====================

const editProduct=(product)=>{

setEditId(product.id);

setForm({

name:product.name,
price:product.price,
category:product.category,
image:product.image

});

window.scrollTo({
top:0,
behavior:"smooth"
});

};


// =====================
// DELETE
// =====================

const deleteProduct = async(id)=>{

setModalState({
isOpen: true,
type: "delete",
message: "Are you sure you want to delete this product? This action cannot be undone.",
productId: id
});

};

const confirmDelete = async () => {
  await deleteDoc(doc(db,"products", modalState.productId));
  fetchProducts();
  setModalState({ ...modalState, isOpen: false });
};


// =====================
// UI
// =====================

return(

<div>

<h2>Products</h2>

<div className="admin-form">

<input
placeholder="Product Name"
value={form.name}
onChange={e=>
setForm({...form,name:e.target.value})
}
/>

<input
placeholder="Price"
value={form.price}
onChange={e=>
setForm({...form,price:e.target.value})
}
/>


{/* CATEGORY DROPDOWN */}

<select
value={form.category}
onChange={e=>
setForm({...form,category:e.target.value})
}
>

<option value="">
Select Category
</option>

{categories.map(cat=>(
<option key={cat}>
{cat}
</option>
))}

</select>



{/* IMAGE */}

<label className="upload-btn">

{uploading
?`Uploading ${progress}%`
:"Upload Image"}

<input
type="file"
accept="image/*"
capture="environment"
hidden
onChange={handleUpload}
/>

</label>


{form.image &&(

<img
src={form.image}
className="preview"
alt=""
/>

)}



{/* BUTTON */}

<div className="form-actions">

<button
className="save-btn"
onClick={saveProduct}
>

{editId
? "Update Product"
: "Add Product"}

</button>


{editId &&(

<button
className="cancel-btn"
onClick={()=>{

setEditId(null);

setForm({
name:"",
price:"",
category:"",
image:""
});

}}
>
Cancel
</button>

)}

</div>

</div>



{/* PRODUCTS */}

{loading?

<div className="skeleton-grid">

{[1,2,3,4].map(i=>(
<div
key={i}
className="skeleton-card"
/>
))}

</div>

:

<div className="admin-list">

{products.map(p=>(

<div
key={p.id}
className="admin-card"
>

<img src={p.image} alt=""/>

<h4>{p.name}</h4>

<p>{p.category}</p>

<p>₹ {p.price}</p>

<div className="card-actions">

<button
className="edit"
onClick={()=>
editProduct(p)
}
>
Edit
</button>

<button
className="delete"
onClick={()=>
deleteProduct(p.id)
}
>
Delete
</button>

</div>

</div>

))}

</div>

}

{/* CONFIRM MODALS */}
<ConfirmModal
  isOpen={modalState.isOpen && modalState.type === "error"}
  title="Error"
  message={modalState.message}
  confirmText="OK"
  cancelText=""
  isDanger={true}
  onConfirm={() => setModalState({ ...modalState, isOpen: false })}
  onCancel={() => setModalState({ ...modalState, isOpen: false })}
/>

<ConfirmModal
  isOpen={modalState.isOpen && modalState.type === "success"}
  title="Success"
  message={modalState.message}
  confirmText="OK"
  cancelText=""
  isDanger={false}
  onConfirm={() => setModalState({ ...modalState, isOpen: false })}
  onCancel={() => setModalState({ ...modalState, isOpen: false })}
/>

<ConfirmModal
  isOpen={modalState.isOpen && modalState.type === "delete"}
  title="Delete Product"
  message={modalState.message}
  confirmText="Delete"
  cancelText="Cancel"
  isDanger={true}
  onConfirm={confirmDelete}
  onCancel={() => setModalState({ ...modalState, isOpen: false })}
/>

</div>

);

}