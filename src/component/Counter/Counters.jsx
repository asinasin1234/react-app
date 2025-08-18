import { useCounter } from "../../hooks/customHook";
function counters(){
    const [count, counterOne] = useCounter();
  
  return (
    <>
      <p>counter:{count}</p>
      <button onClick={counterOne}>add</button>
      

     
    </>
  );
}
export default counters;