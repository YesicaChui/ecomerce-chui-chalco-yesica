import "./Button.css"
function Button(prop){
    const {label}=prop;
    /* const buttonStyles ={
        padding: "1rem",
        backgroundColor:"yellow"
    } */
    return (
        <button className="mi-boton"/* style={buttonStyles} */>{label} </button>
    )
}

export default Button;