import React from 'react';
import Star from './Star';

export default function Stars({count}) {

    const stars = [...new Array(count)].map(()=><li key={Math.floor(Math.random() * 100)}><Star/></li>)
    console.log(stars)
  return (
    <div>

    <ul className="stars">
        {stars}
  </ul>
 
</div>
  );
}
