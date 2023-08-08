import React from 'react';

const ThankYouComponent = (props: { rating: number }) => {
  return (
    <div className='thank-you-container'>
      <img className='robot' src='/images/illustration-thank-you.svg' alt='a robot printing something THINK OF A BETTER ALT'></img>
        <h3 className='user-rating'>You selected {props.rating} out of 5</h3>
        <h2 className='thank-you'>Thank you!</h2>
        <p className='ty-paragraph'>We appreciate you taking the time to give a rating. If you ever need more support, don&apos;t hesitate to get in touch!</p>
    </div>
  );
};

export default ThankYouComponent;