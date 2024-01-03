import Nav from "./nav";
import React, { useEffect } from 'react';
import Categories from "./Categories";
function Home() {
 

  return (
    <>
    <Categories/>
      <Nav className="centered-nav" />
    
    </>
  );
}

export default Home;
