import React from 'react';

const ThankYouComponent = (props: { rating: number }) => {
  return (
    <div>
        <h2 className='user-rating'>You selected {props.rating} out of 5</h2>
        <p className='thank-you'>Thank you!</p>
        <p className='ty-paragraph'>We appreciate you taking the time to give a rating. If you ever need more support, don&apos;t hesitate to get in touch!</p>
    </div>
  );
};

export default ThankYouComponent;