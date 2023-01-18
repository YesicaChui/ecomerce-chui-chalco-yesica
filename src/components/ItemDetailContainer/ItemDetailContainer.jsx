import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductoId } from "../../services/productos";
import ItemCount from "../ItemCount/ItemCount";
import { ItemDetail } from "../ItemDetail/ItemDetail";

function ItemDetailContainer(){
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

    

    return (
        <ItemDetail producto={producto}/>
    )
}
export default ItemDetailContainer