import { useState } from "react";

// hooks (ilgaklar)
// useState

const UseState = () => {
    const [count, setCount] = useState(5);

  function increment(){
    setCount((prev) => prev + 1);
  }

  return (
    <div>
        <h1>Easy-pjeasy counter</h1>
      <h2>{count}</h2>
      <button onClick={increment}>+1 qo'shgin</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-1 ayrilgin</button>     
      <hr />
    </div>
  )
}

export default UseState
