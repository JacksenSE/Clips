import Nav from "./nav";
import React, { useEffect } from 'react';
import RandomClip from "./RandomClip";
import Goat from "../assets/Hireme.gif"
function Home() {
 

  return (
    <>
     <Nav className="centered-nav" />
     <RandomClip className="RandomClip"/>
     <img src={Goat} alt="Goat"className="Goat"/>
     <p className="GoatH">Hire Me </p>
    </>
  );
}

export default Home;
