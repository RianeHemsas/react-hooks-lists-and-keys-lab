import React from "react";
import About from "./About";

function NavBar() {
  const links = ["home", "about", "projects"];
const list = links.map((item) => {
    return <a href={`#${item}`} key={item}>{item}</a>;
  });

  return <nav>
    {list}
   
  
    
</nav>;
}

export default NavBar;
