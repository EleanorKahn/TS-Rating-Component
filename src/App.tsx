import React, { useState } from 'react';
import FooterComponent from './components/FooterComponent';
import './css/App.css';

function App() {
  const [rating, setRating] = useState(5);
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

        <div>
          <h2>You selected {rating} out of 5</h2>
          <p>Thank you!</p>
          <p>We appreciate you taking the time to give a rating. If you ever need more support, don&apos;t hesitate to get in touch!</p>
        </div>

        }

      </div>

      <FooterComponent />
    </div>
  );
}

export default App;
