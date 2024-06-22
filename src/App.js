import "./css/App.css";
import nav from "./nav.js";
import hero from "./hero.js";
import About from "./About.js";
import footer from "./footer.js";
import content from "./content.js";
import React, { useEffect } from "react";
import { handleScroll } from "./scroll.js";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {nav()}
      {hero()}
      {About()}
      {content()}
      {footer()}
    </>
  );
}

export default App;
