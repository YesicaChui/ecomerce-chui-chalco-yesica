import { useParams } from "react-router-dom";
import { useEffect, useState,useContext } from "react";
import { getProductoId } from "../../services/productos";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import Context from "../Context/Context";
function ItemDetailContainer() {
    const { dispatch } = useContext(Context);
    const [producto, setproductData] = useState({});
    const [cantidad, setCantidad] = useState(1);
    const { id } = useParams();

    useEffect(() => {
        // TODO: call mock service to get groups data
        getProductoId(id)
            .then((producto) => setproductData(producto))
            .catch((error) => {
                console.error("[Productos_error]: ERROR - ", error);
                setproductData({});
            });


        return () => console.log("Se desmonto el componente");
    }, [id]);
    const miestilo = {
        width: "40rem",
    }

    function disminuirCantidad() {
        if (cantidad - 1 > 0) {
            setCantidad(cantidad - 1)
        }

    }

    function aumentarCantidad() {
        if (producto.stock >= cantidad + 1) {
            setCantidad(cantidad + 1)
        }
    }

    function addToCar(){
        console.log("presione addToCar")
        dispatch({
            type: "ADD-TO-CART",
            payload: {
              "id":producto.id,             
              "nombre":producto.nombre,
              "descripcion":producto.descripcion,
              "precio":producto.precio,
              "categoria":producto.categoria,
              "stock":producto.stock,
              "imagen":producto.imagen,
              "idFirebase":producto.idFirebase,
              "cantidad":cantidad
            },
          });
    }

    return (
        <ItemDetail producto={producto} fdisminuir={disminuirCantidad} faumentar={aumentarCantidad} cantidad={cantidad} faddToCar={addToCar} />
    )
}
export default ItemDetailContainer