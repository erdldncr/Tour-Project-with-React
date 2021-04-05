import React from 'react';
import Tour from './Tour';
const Tours = ({tours,removeTour}) => {
    console.log(tours)
  return <section>
    <div className="title">
      <h1>Our Tours</h1>
      <div className="underline"></div>
    </div>
    <div className="">
      { tours.map((tour=><Tour removeTour={removeTour} key={tour.id}  tour={tour}/> )) }
    </div>
  </section>
};

export default Tours;
