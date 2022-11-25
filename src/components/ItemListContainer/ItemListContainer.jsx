function ItemListContainer(props){
    const {greeting} =props;
    const styling = {
        padding: "1rem",
        backgroundColor: "pink",
        width:"300px",
        margin:"auto",
        color:"blue"
    };
    return(
        <div style={styling}>{greeting}</div>
    )
}
export default ItemListContainer;