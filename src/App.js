import './App.css';
import LoadingScreen from 'views/LoadingScreen/LoadingScreen';
import LoadingEnd from 'views/LoadingEnd/LoadingEnd';
import React, { useEffect, useState } from 'react';
import MainLayout from 'layouts/MainLayout';
import { getFilteredChannels } from 'services/ayonNodeJS';


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isEndAnimationFinished, setIsEndAnimationFinished] = useState(false);

  useEffect(() => { 
    sleep(1000).then(() => {
      setIsLoading(false);
    });

  }, []);

  const handleAfterLoading = () => {
    if (isLoading) {
      return <LoadingScreen />;
    } else if (!isEndAnimationFinished) {
      return <LoadingEnd onAnimationEnd={()=> setIsEndAnimationFinished(true)}/>;
    } else {
      return <MainLayout />;
    }
  };

  

  return (
    <div className="App">
      <header className="App-header">
        {handleAfterLoading()}
      </header>
    </div>
  );
}

export default App;
