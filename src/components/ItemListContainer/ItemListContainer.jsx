import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos, getProductosCategoryId } from "../../services/productos";
import ProductCard from "../ProductCard/ProductCard";
function ItemListContainer() {
    const { id } = useParams();

    console.log("my id:" + id);
    const [productData, setproductData] = useState([]);

    useEffect(() => {
        // TODO: call mock service to get groups data
        if (id) {
            getProductosCategoryId(id)
                .then((productos) => setproductData(productos))
                .catch((error) => {
                    console.error("[Productos_error]: ERROR - ", error);
                    setproductData([]);
                });
        } else {
            getProductos()
                .then((productos) => setproductData(productos))
                .catch((error) => {
                    console.error("[Productos_error]: ERROR - ", error);
                    setproductData([]);
                });
        }


        return () => console.log("Se desmonto el componente");
    }, [id]);

    const isProductoVacio = productData.length === 0;
    return (
        <section class="container-fluid">
            <div class="row " id="productos">

                {isProductoVacio ? (
                    <span className="loading-text">Cargando productos' datos...</span>
                ) : (
                    productData.map((producto) => (
                        <ProductCard key={producto.id} producto={producto} />

                    ))
                )}
            </div>
        </section>

    )
}
export default ItemListContainer;