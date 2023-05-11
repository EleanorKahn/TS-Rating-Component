import React from 'react';
import { FunctionBody } from 'typescript';

const RatingComponent = (props: { setSubmit: Function, setRating: Function }) => {

  return (
    <div>
        <h2>How did we do?</h2>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div>
        <button onClick={() => props.setRating(1)}>1</button>
        <button onClick={() => props.setRating(2)}>2</button>
        <button onClick={() => props.setRating(3)}>3</button>
        <button onClick={() => props.setRating(4)}>4</button>
        <button onClick={() => props.setRating(5)}>5</button>
        </div>
        <button type="submit" onClick={() => props.setSubmit(true)}>Submit</button>
    </div>
  );
};

export default RatingComponent;