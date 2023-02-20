import React from 'react';
import Star from './Star';

export default function Stars({count}) {
    let cocount = [];
    while(count>0){
        cocount.push(Math.floor(Math.random() * 100))
        console.log(count)
        count--
    }
    console.log(cocount)
    const stars = cocount.map((item) => <li key={item}>{<Star/>}</li>);
  return (
    <div>

    <ul className="stars">
        {stars}
  </ul>
 
</div>
  );
}
