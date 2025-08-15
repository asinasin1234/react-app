import React, { useContext } from "react";
import Nothing, { ThisUser } from "../../pages/Nothing";



function User() {
    const val = useContext(ThisUser);

    if(val){
    return(
        <div>
            <h1>This is home page</h1>
        </div>
    )}else{
        return(
            <div>
            <h1>you have to login</h1>
            </div>
        )
    }
}
export default User;