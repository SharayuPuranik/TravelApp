import React from 'react';
import './App.css';
import Navbar from './Navbar';
import travel from './travel.jpeg'; 


function App() {
  // Set the URL of the single image you want to display
  const imageUrl = travel;

  const backgroundImageUrl = `${process.env.PUBLIC_URL}${imageUrl}`;

  const bannerStyle = {
    backgroundColor: '#333',
    flex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="App">
      <Navbar />
      <div style={bannerStyle}></div>
    </div>
  );
}

export default App;
