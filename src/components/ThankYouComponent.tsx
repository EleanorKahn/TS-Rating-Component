import React from 'react';

const ThankYouComponent = (props: { rating: number }) => {
  return (
    <div>
        <h2>You selected {props.rating} out of 5</h2>
        <p>Thank you!</p>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don&apos;t hesitate to get in touch!</p>
    </div>
  );
};

export default ThankYouComponent;