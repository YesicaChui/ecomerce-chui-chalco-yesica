import { useState } from "react";
function ItemCount({fdisminuir,faumentar,cantidad,faddToCar}) {

    return (
        <div id="buttonsAddCar">
            <button onClick={fdisminuir} id="btnDisminuir${producto.id}" type="button" className="btn btn-primary" >-</button>
            <span className="mx-4" id="itemNro${producto.id}">{cantidad}</span>
            <button onClick={faumentar} id="btnAumentar${producto.id}" type="button" className="btn btn-primary" >+</button>
            <button onClick={faddToCar} id="btnAgregarProductoCarrito${producto.id}" type="button" className="btn btn-primary" >Agregar</button>
        </div>
    )
}

export default ItemCount