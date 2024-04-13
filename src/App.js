import './App.css';
import LoadingScreen from 'views/LoadingScreen/LoadingScreen';
import LoadingEnd from 'views/LoadingEnd/LoadingEnd';
import React, { useEffect, useState } from 'react';
import MainLayout from 'layouts/MainLayout';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isEndAnimationFinished, setIsEndAnimationFinished] = useState(false);

  useEffect(() => { 
    sleep(3000).then(() => {
      setIsLoading(false);
    });

    const params =  new URLSearchParams({
      longitude: 159,
      lowerLim: 0,
      upperLim: 10,
    });

    fetch(`http://localhost:8080/nearestToLocation?${params}`)
    .then(response => response.text())  // Convert the response data to a string
    .then(data => {
      console.log(data);  // 'Hello, World!'
    })
    .catch((error) => {
      console.error('Error:', error);
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
