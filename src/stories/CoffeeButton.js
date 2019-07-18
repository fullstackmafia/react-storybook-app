import React, { useState } from 'react';
const ButtonStyle = {
  backgroundColor: 'lightblue',
  padding: '10px',
  borderRadius: '5px',
  fontSize: '15px',
  border: '#66c2ff 3px solid',
  cursor: 'pointer'
};


const CoffeeButton = ({children}) => {
  const [count, setCount] = useState(1);

  return (
    <button style={ButtonStyle} onClick={()=> setCount(count + 1)}>
    {new Array(count).fill(children)}
    {(count < 2)
    ? <div>Please serve 1 cup of coffee</div>
    : <div>Please serve {count} cups of coffee</div>
    
  }
    </button>
  );
};
export default CoffeeButton;