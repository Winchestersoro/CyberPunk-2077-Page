import React from "react";
import FirstSlide from "./components/FirstSlide/FirstSlide";
import SecondSlide from "./components/SecondSlide/SecondSlide";
import Header from "./components/UI/Header/Header";
import ThirdSlide from "./components/ThirdSlide/ThirdSlide";
import "./App.css";
import FourthSlide from "./components/FourthSlide/FourthSlide";

const App: React.FC = () => {
  return (
    <div className="UserView">
      <Header />
      <FirstSlide />
      <SecondSlide />
      <ThirdSlide />
      <FourthSlide />
    </div>
  );
};

export default App;
