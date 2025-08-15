import React from "react";
import ListItem from "../component/ListItem";
import User from "../component/User/User";

export const ThisContext = React.createContext();
export const ThisUser = React.createContext();

function Nothing(props) {
 
  const product = [
    { id: "123", name: "laptop", price: "60000" },
    { id: "324", name: "keyboard", price: "500" },
    { id: "453", name: "mouse", price: "600" },
  ];

   let isLogged=false;

  return (
    <>
      <div>
        <ThisContext.Provider value={product}>
        <h1>This is App</h1>
        <ListItem />
        </ThisContext.Provider>
       
        <ThisUser.Provider value={isLogged}>
         <User />
         </ThisUser.Provider>
      </div>
    </>
  );
}
export default Nothing;
