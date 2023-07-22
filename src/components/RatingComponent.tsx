import React from 'react';
//import {IconStar} from '../assets/images/icon-star.svg';

const RatingComponent = (props: { setSubmit: Function, setRating: Function }) => {
  return (
    <div>
        <img src='/images/icon-star.svg' alt='small yellow star'></img> 
        {/* <div className='star'></div> */}
        <h2 className='rating-title'>How did we do?</h2>
        <p className='rating-paragraph'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <ul className='rating-options'>
            <li>
                <button onClick={() => props.setRating(1)}>1</button>
            </li>
            <li>
                <button onClick={() => props.setRating(2)}>2</button>
            </li>
            <li>
                <button onClick={() => props.setRating(3)}>3</button>
            </li>
            <li>
                <button onClick={() => props.setRating(4)}>4</button>
            </li>
            <li>
                <button onClick={() => props.setRating(5)}>5</button>
            </li>
        </ul>
        <button 
            className='submit' 
            type='submit' 
            onClick={() => props.setSubmit(true)}
        >
            SUBMIT
        </button>
    </div>
  );
};

export default RatingComponent;