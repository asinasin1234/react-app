function counter(){
    const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const inputRef = useRef(null);

  const counter = () => {
    countRef.current++;

    console.log("count", count);
    console.log("count ref", countRef.current);
  };
  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <p>counter:{countRef.current}</p>
      <button onClick={counter}>add</button>
      <p>counter two: {count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>

      <div>
        <input ref={inputRef} type="text" />
        <button onClick={handleClick}>focus</button>
      </div>
    </>
  );
}
export default counter;