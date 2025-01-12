import React from 'react';
import LendingCyberpunk from './components/FirstSlide/LendingCyberpunk';
import SecondSlide from './components/SecondSlide/SecondSlide';
import './App.css';
const App: React.FC = () => {
    return (
        <div className='UserView'>
            <LendingCyberpunk />
            <SecondSlide />
        </div>
    );
};

export default App;