function User(props){
    const {name,surname} = props;
    return (
        <div className="user">
            <ul className="user-data">
                <li>{name}</li>
                <li>{surname}</li>
            </ul>
        </div>
    )
}
export default User;