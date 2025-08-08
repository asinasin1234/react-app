import { useState } from "react";
import "./App.css";
import Condition from "./component/Condition";
import ListItem from "./component/ListItem";

function App(props) {
  const isLogin = true;
  return (
    <>
      <Condition isLogin={isLogin} />
      {/* <ListItem/> */}
    </>
  );
}

export default App;
