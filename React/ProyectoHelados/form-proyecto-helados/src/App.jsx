import React from "react";
import MainNavBar from "./components/MainNavBar";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <MainNavBar />
      <div className="container mt-4">
        <Home />
      </div>
    </>
  );
}

export default App;
