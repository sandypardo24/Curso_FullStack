import React from "react";

function Propiedades() {
    let estilos = {
        color: "red",
        background: "black",
        padding: "10px",
        margin: "10px"
    };
    let usuario = {id: 1, nombre: "Juan", edad: 25};

    console.log(usuario.nombre);

    let {id, edad} = usuario;
    console.log(id, "DESTRUCTURE");
    console.log(edad, "DESTRUCTURE");

    return (<div>Propiedades</div>);
}

export default Propiedades;