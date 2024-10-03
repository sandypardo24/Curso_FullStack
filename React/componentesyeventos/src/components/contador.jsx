import React, { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count +2)}>Incrementar</button>
    </div>
  );
}

export default Contador;
