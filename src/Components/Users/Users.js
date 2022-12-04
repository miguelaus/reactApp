import React from "react";

const Users = () => {

    const [users, setUsuarios] = React.useState([])

    React.useEffect(() => {
       obtenerDatos()
    }, [])

    const obtenerDatos = async() => {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const users = await data.json()
        setUsuarios(users)
    }

    return (
        <div>
            <h1>Usuarios que han disfrutado de nuestros servicios Previamente:</h1>
            <ul>    
                {
                    users.map(item => ( 
                        <li key={item.id}>
                             {item.name} {item.surname}
                        </li>

                    ))
                }
            </ul>
        </div>
    )
}

export default Users