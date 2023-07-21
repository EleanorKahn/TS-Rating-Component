import React, { useState } from 'react';
import FooterComponent from './components/FooterComponent';
import ThankYouComponent from './components/ThankYouComponent';
import RatingComponent from './components/RatingComponent';
//import './css/App.css';

function App() {

  const [rating, setRating] = useState(0);
  const [submit, setSubmit] = useState(false);

  if (submit) {
    console.log(`${rating}`);
  }

  return (
    <div className="App">
      <div>
        {!submit 
          ? <RatingComponent setSubmit={setSubmit} setRating={setRating} />
          : <ThankYouComponent rating={rating} />
        }
      </div>
      <FooterComponent />
    </div>
  );
};

export default App;
