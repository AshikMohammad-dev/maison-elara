function AdminSkeleton(){

return(

<div className="skeleton-grid">

{Array(6).fill().map((_,i)=>(

<div
key={i}
className="skeleton-card"
/>

))}

</div>

);

}

export default AdminSkeleton;