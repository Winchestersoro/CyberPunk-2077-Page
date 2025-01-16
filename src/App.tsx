import React from 'react';
import LendingCyberpunk from './components/FirstSlide/LendingCyberpunk';
import SecondSlide from './components/SecondSlide/SecondSlide';
import Header from './components/Header/Header';
import './App.css';
const App: React.FC = () => {
    return (
        <div className='UserView'>
            <Header></Header>
            <LendingCyberpunk />
            <SecondSlide />
        </div>
    );
};

export default App;