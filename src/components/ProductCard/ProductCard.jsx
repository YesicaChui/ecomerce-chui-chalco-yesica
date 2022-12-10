
import { Link } from "react-router-dom";

function ProductCard({ producto }) {
    const miestilo = {
        width: "18.1rem",
    }
    return (
        <div className="card col-sm-12 col-md-6 col-lg-3 m-2" style={miestilo}>
            <Link to={"/item/" + producto.id}><img src={producto.imagen} className="card-img-top" alt="..." /></Link>
            <div className="card-body">
                <h5 className="card-title m-0 fw-bold"></h5>
                <p className="card-text m-0">{producto.nombre}</p>
                <p className="card-text m-0">S/ {producto.precio}</p>
                <p className="card-text m-0">CodProducto {producto.id}</p>
                <div id="buttonsAddCar">
                    <Link to={"/item/" + producto.id}>
                        <button type="button" className="btn btn-primary" >Ver detalle</button></Link>
                </div>
            </div>
        </div>
    )
}
export default ProductCard