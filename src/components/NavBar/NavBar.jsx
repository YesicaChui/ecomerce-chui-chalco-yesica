import CartWidget from "../CartWidget/CartWidget";
function NavBar() {
    return (

        <nav className="navbar navbar-expand-lg bg-light sticky-top p-0">
            <div className="container-fluid ">
                <a className="navbar-brand" href="#" id="menuLogo"><img id="logo" src="https://previews.123rf.com/images/kannaa123rf/kannaa123rf1602/kannaa123rf160200100/51849875-cosm%C3%A9ticos-de-calidad-profesional-tienda-elegante-del-logotipo-accesorios-y-cosm%C3%A9ticos-s%C3%ADmbolo-de-co.jpg" alt=""
                    style={{ width: "80px" }} />
                    <p className="text-center fw-bold fs-6">Cosméticos Yesica</p>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" id="menuInicio">Inicio</a>
                        </li>
                        <li className="nav-item dropdown" id="menuAdmin">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorias
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" id="menuMaquillaje" >Maquillaje</a></li>
                                <li> <a className="dropdown-item" href="#" id="menuDermatologico" >Cuidado Dermatologico</a></li>
                                <li> <a className="dropdown-item" href="#" id="menuCabello" >Cuidado Cabello</a></li>
                            </ul>
                        </li>


                    </ul>
                    <form className="d-flex" role="search">
                        <input id="inputBuscar" className="form-control me-2" type="search" placeholder="Que estas buscando"
                            aria-label="Search" />
                        <button className="btn btn-outline-success" type="button" id="btnSearch"><img
                            src="https://static.vecteezy.com/system/resources/previews/000/442/725/non_2x/vector-find-icon.jpg" alt=""
                            style={{ width: "30px" }} /></button>
                    </form>

                    <button id="btnSesion" type="button" className="btn btn-light d-flex">
                        <div className="d-flex me-1">
                            <div className="align-self-center pt-2 ms-2">
                                <p className="m-0 text-end fw-bold" id="textoPerfil">Hola</p>
                                <p> <span id="textoSesion" >Inicia Sesión</span> </p>
                            </div>
                        </div>
                        <img className="align-self-center" src="https://cdn-icons-png.flaticon.com/512/1361/1361728.png" alt=""
                            style={{ width: "40px", height: "50px" }} />

                    </button>
                    <div className="d-flex">
                        <div className="align-self-center pt-2 ms-2">
                            <p className="m-0">Carrito</p>
                            <p>S/ <span id="textoTotal">0.00</span> </p>
                        </div>
                    </div>

                </div>
                <CartWidget></CartWidget>
            </div>
        </nav>
    )
}
export default NavBar;