import React from "react";
import { PersonaProvider } from "../PersonaContext/PersonaContext";
import AppUI from "./AppUI";

function App() {
  return (
    <PersonaProvider>
      <AppUI />
    </PersonaProvider>
  );
}

export default App;
