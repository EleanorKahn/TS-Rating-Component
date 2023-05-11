import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <h2>How did we do?</h2>
          <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
          </div>
          <button>Submit</button>
        </div>

        <div>
          <h2>You selected Add rating here out of 5</h2>
          <p>Thank you!</p>
          <p>We appreciate you taking the time to give a rating. If you ever need more support, don&apos;t hesitate to get in touch!</p>
        </div>
      </div>

      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Eleanor</a>.
      </footer>
    </div>
  );
}

export default App;
