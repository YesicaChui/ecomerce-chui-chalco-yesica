function CartWidget() {
    return (
        <button id="btnCarrito" type="button" className="btn btn-light position-relative">
            <img src="https://icones.pro/wp-content/uploads/2021/05/icone-de-panier-noir.png" alt=""
                style={{ width: "40px", height: "50px" }} />
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" id="badgeCarrito">
                0
            </span>
        </button>
    )
}
export default CartWidget;