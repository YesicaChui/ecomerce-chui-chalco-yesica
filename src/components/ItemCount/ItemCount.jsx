import { useState } from "react";
function ItemCount({stock}) {
    const [cantidad, setCantidad] = useState(1); 
    function disminuirCantidad(){
        if(cantidad-1>0){
            setCantidad(cantidad-1)
        }
       
    }

    function aumentarCantidad(){
        if(stock>=cantidad+1){
            setCantidad(cantidad+1)
        }
            
    }
    return (
        <div id="buttonsAddCar">
            <button onClick={disminuirCantidad} id="btnDisminuir${producto.id}" type="button" className="btn btn-primary" >-</button>
            <span className="mx-4" id="itemNro${producto.id}">{cantidad}</span>
            <button onClick={aumentarCantidad} id="btnAumentar${producto.id}" type="button" className="btn btn-primary" >+</button>
            <button id="btnAgregarProductoCarrito${producto.id}" type="button" className="btn btn-primary" >Agregar</button>
        </div>
    )
}

export default ItemCount