import React from "react";

function formulario() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellido" />
        <input type="text" placeholder="Correo" />
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default formulario;