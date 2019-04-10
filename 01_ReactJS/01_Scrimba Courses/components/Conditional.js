import React from 'react';

function Conditional (props){
  return (
    <div>
     {props.isLoading ? <h1>Loading...</h1> : <h1>Some Cooling Rendering Stuff...</h1>}
    </div>
  )
}

export default Conditional;
