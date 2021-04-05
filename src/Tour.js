import React, { useState } from 'react';

const Tour = ({tour:{id,image,info,price,name},removeTour}) => {
    const [show,setShow]=useState(false)
    function filterTour(e){
       removeTour(e.currentTarget.id)
    }
  return <article className="single-tour">
    <img src={image} alt={name}/>
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
        <p>{show&&info || `${info.slice(0,200)}...` }
        
          <button onClick={()=>{setShow(!show)}}>{show?`show Less`:`show more`}</button>
        </p>
        <button id={id} onClick={filterTour} className="delete-btn">Not Interested</button>
    </footer>
  </article>
};

export default Tour;
