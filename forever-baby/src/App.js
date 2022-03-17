import React from 'react';
import Header from "./components/header";
import Nav from "./components/nav";
import NewsLetter from "./components/newsLetter";
import UpperFooter from "./components/upperFooter";
import LowerFooter from "./components/lowerFooter";
import Carosel from "./components/carosel";
import MobileHeader from "./components/mobileHeader";

function App() {
  return (
    <div>
      {
        window.innerWidth < 900 ? <MobileHeader/> : <Header/>
      }
      { 
        window.innerWidth > 900 ? <Nav/> : null
      }
      <Carosel/>
      <NewsLetter/>
      <UpperFooter/>
      <LowerFooter/>
    </div>
  );
}

export default App;
