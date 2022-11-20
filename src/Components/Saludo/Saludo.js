import React, {Fragment} from "react";

function Saludo(props) {
    console.log(props)
    return (
        <Fragment>
            <h2>Hola! {props.persona} {props.apellido} </h2>
        </Fragment>
    )

}
export default Saludo
