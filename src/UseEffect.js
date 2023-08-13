import { useState, useEffect } from "react"


const UseEffect = () => {
    const [capital,setcapital] = useState("Tashkent");

    // componentDidMount
    useEffect(()=>{
        console.log("render");
    },[])

    // componentDidUpdate
    useEffect(() => {
        console.log("update",capital);
    },[capital]);

    // componentWillUnmount
    useEffect(() => {
        return () => console.log("Unmount",capital);
    },[capital]);
 
    function selectcapital(city) {
        setcapital(city);
    };

  return (
    <div style={{marginTop:"50px"}}>
      <h1>Functional Component Lifecycle</h1>
      <h2>Choose your capital</h2>
      <hr />
      <button onClick={() => selectcapital("Tashkent")}>Uzbekistan</button>
      <button onClick={() => selectcapital("Washington")}>USA</button>
      <button onClick={() => selectcapital("Varshava")}>Poland</button>
      <hr />
      <p>= {capital}</p>
    </div>
  )
}
 
export default UseEffect
