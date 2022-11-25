import User from "./User/User"
function UsersContainer(){
    const user = {
        name :'Lucas',
        surname: 'Cravero'
    }
    return (
        <div className="users-container">
            <User name={user.name} surname={user.surname}/>
        </div>
    )
}
export default UsersContainer;