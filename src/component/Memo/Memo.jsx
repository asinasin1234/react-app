import { useCallback, useMemo, useState } from "react";

function Memo() {
const [count, setCount] = useState(0)
const [input, setInput] = useState("")
 


 const calculation = useCallback( ()=>{
    console.log("calulation rendering");
    
    let value=0;
    for(let i=0; i<1000000; i++){
        value += i;
    }
    return value;
 },[count])
  return (
    <>
      <h1>UseMemo()</h1>
      <h1>calculation: {calculation()}</h1>
      <button onClick={calculation}>recalculate</button>
      <div>
        <input type="text" onChange={(e)=>setInput(e.target.value)}/>
      </div>
    </>
  );
}
export default Memo;
