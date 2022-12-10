import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductoId } from "../../services/productos";
function ItemDetailContainer(){
    const [producto, setproductData] = useState({});
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
        width: "18.1rem",
    }
    return (
        <div className="card col-sm-1 col-md-1 col-lg-1 m-auto" style={miestilo}>
            <img src={producto.imagen} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title m-0 fw-bold"></h5>
                <p className="card-text m-0">{producto.nombre}</p>
                <p className="card-text m-0">{producto.descripcion}</p>
                <p className="card-text m-0">S/ {producto.precio}</p>
                <p className="card-text m-0">CodProducto {producto.id}</p>
            </div>
        </div>
    )
}
export default ItemDetailContainer