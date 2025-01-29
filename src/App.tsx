import React from "react";
import FirstSlide from "./components/FirstSlide/FirstSlide";
import SecondSlide from "./components/SecondSlide/SecondSlide";
import Header from "./components/UI/Header/Header";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="UserView">
      <Header />
      <FirstSlide />
      <SecondSlide />
    </div>
  );
};

export default App;
