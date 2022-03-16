import Header from "./components/header";
import NavDesktop from "./components/nav";
import NewsLetter from "./components/newsLetter";
import UpperFooter from "./components/upperFooter";
import LowerFooter from "./components/lowerFooter";
import Carosel from "./components/carosel";
import MobileHeader from "./components/mobileHeader";

function App() {
  return (
    <div>
      {
        window.innerWidth < 426 ? <MobileHeader/> : <Header/>
      }
      <NavDesktop/>
      <Carosel/>
      <NewsLetter/>
      <UpperFooter/>
      <LowerFooter/>
    </div>
  );
}

export default App;
