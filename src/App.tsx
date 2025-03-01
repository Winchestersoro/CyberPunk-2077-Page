import React from "react";
import FirstSlide from "./components/FirstSlide/FirstSlide";
import SecondSlide from "./components/SecondSlide/SecondSlide";
import Header from "./components/Header/Header";
import ThirdSlide from "./components/ThirdSlide/ThirdSlide";
import "./App.css";
import FourthSlide from "./components/FourthSlide/FourthSlide";
import FifthSlide from "./components/FifthSlide/FifthSlide";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <div className="UserView">
      <Header />
      <FirstSlide />
      <SecondSlide />
      <ThirdSlide />
      <FourthSlide />
      <FifthSlide />
      <Footer />
    </div>
  );
};

export default App;
