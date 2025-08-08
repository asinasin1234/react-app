import ListItem from "./ListItem";

function Condition(props) {
  const isLogin = props.isLogin;

  // return (
  //   <div>
  //     {isLogin ? <h1>welcome back</h1> : <h1>You have to login</h1>}
  //     {isLogin && <h1>Have a nice day</h1>}
  //     {isLogin ? <ListItem/> : <h1>you have to login</h1>}
  //   </div>
  // );


  const style = {
    color:"yellow"
  }
  const myStyle = {
    color:"blue"
  }
  if (isLogin) {
    return <h1 style={style}><ListItem/></h1>
  } else {
    return <h1 style={myStyle}><ListItem/></h1>;
  }
}

export default Condition;
