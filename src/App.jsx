import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {InputText} from './components/InputText'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Olá meu nome é Angelo</h1>

      <InputText />
      <input type="text" name="nome" id="nome" placeholder="nome"/>
      <br/>
      <input type="text" name="sobrenome" id="sobrenome" placeholder="sobrenome"/>
    </>
  );
}

export default App;
