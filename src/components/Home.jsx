import Nav from "./nav";
import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = "black";
    return () => {
      document.body.style.backgroundColor = "black";
    };
  }, []);

  return (
    <>
      <Nav className="centered-nav" />
      <div className="HomeH">
        <h1>Zentra Clips</h1>
      </div>
      <div className="HomeP">
        <p>Clips from some of the best gamers on the planet.</p>
      </div>
    </>
  );
}

export default Home;
