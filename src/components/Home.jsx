import Nav from "./nav";
import React, { useEffect } from 'react';
import Categories from "./Categories";
function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = "darkbrown";
    return () => {
      document.body.style.backgroundColor = "darkbrown";
    };
  }, []);

  return (
    <>
    <Categories/>
      <Nav className="centered-nav" />
    
    </>
  );
}

export default Home;
