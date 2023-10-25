import React, { useEffect, useState } from 'react'

export default function UserId() {

const [count ,setCount]=useState(0);
const userId=[100,200,300];

const [ahmed,,taher]=userId;

useEffect(()=>{

    console.log('here');

    
},);


console.log(ahmed);
console.log(taher);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}} type="button">+</button>
    </div>
  )
}
