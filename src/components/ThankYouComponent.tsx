import React from 'react';

const ThankYouComponent = (props: { rating: number }) => {
  return (
    <div>
        <h2 className='text-orange bg-mediumGrey'>You selected {props.rating} out of 5</h2>
        <p className='text-white'>Thank you!</p>
        <p className='text-lightGrey'>We appreciate you taking the time to give a rating. If you ever need more support, don&apos;t hesitate to get in touch!</p>
    </div>
  );
};

export default ThankYouComponent;