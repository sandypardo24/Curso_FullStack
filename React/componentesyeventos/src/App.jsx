import React from "react";
import MyInput from "./components/myInputs";
import Contador from "./components/contador"; // Si vas a usar este componente
import formulario from "./components/formulario";
function App() {
  return (
    <div>
      <h1>My App</h1>
      <MyInput />
      <Contador /> {/* Si quieres usar también el contador */}
    </div>
   
  );
}

export default App;
