import React from 'react'
import ItemCount from "../ItemCount/ItemCount";



export const ItemDetail = ({producto}) => {
const miestilo = {
    width: "40rem",
}

  return (
    <div className="card col-sm-1 col-md-1 col-lg-1 m-auto d-flex flex-row" style={miestilo}>
    <img src={producto.imagen} className="card-img-top" style={{
width: "17rem",
}} alt="..." />
    <div className="card-body">
        <h5 className="card-title m-0 fw-bold"></h5>
        <p className="card-text m-0">{producto.nombre}</p>
        <p className="card-text m-0">{producto.descripcion}</p>
        <p className="card-text m-0">S/ {producto.precio}</p>
        <p className="card-text m-0">Stock {producto.stock}</p>
        <p className="card-text m-0">CodProducto {producto.id}</p>
       <ItemCount stock={producto.stock}/>
    </div>
</div>
  )
}
