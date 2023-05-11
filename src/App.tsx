import React, { useState } from 'react';
import FooterComponent from './components/FooterComponent';
import ThankYouComponent from './components/ThankYouComponent';
import './css/App.css';

function App() {
  // interface rating {
  //   rating: number;
  // }

  const [rating, setRating] = useState(0);
  const [submit, setSubmit] = useState(false);

  if (submit) {
    console.log(`${rating}`);
  }

  return (
    <div className="App">
      <div>

        {!submit 
        
        ?

        <div>
          <h2>How did we do?</h2>
          <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          <div>
            <button onClick={() => setRating(1)}>1</button>
            <button onClick={() => setRating(2)}>2</button>
            <button onClick={() => setRating(3)}>3</button>
            <button onClick={() => setRating(4)}>4</button>
            <button onClick={() => setRating(5)}>5</button>
          </div>
          <button type="submit" onClick={() => setSubmit(true)}>Submit</button>
        </div>

        :

        <ThankYouComponent rating={rating} />

        }

      </div>

      <FooterComponent />
    </div>
  );
}

export default App;
