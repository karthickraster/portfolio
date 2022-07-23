import React from "react";
import { About } from "./Components/About/About";
import { Home } from "./Components/Home/Home";
import { Portfolio } from "./Components/Portfolio/Portfolio";
import { Services } from "./Components/Services/Services";
import "./style.css";

export default function App() {
  return (
    <div>
      
      <Home/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}
