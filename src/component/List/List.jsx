import { useContext } from "react";
import { ThisContext } from "../../pages/Nothing";
import "./list.css";
import { ThisUser } from "../../pages/Nothing";

function List(props) {
  const product = useContext(ThisContext);
  
  return (
    <div className="list-cont">
      {product.map((prod) => (
        <h1 className="list-item">{prod.name}</h1>
      ))}
    </div>
  );
}

export default List;



































// function ListItem({title, movieOne, movieTwo}) {
//   return (

//   <div>
//     <h1> {title} </h1>
//     <ul>
//       <li> {movieOne} </li>
//       <li> {movieTwo} </li>
//       <List item={items}/>
//     </ul>
//   </div>
//   );
// }
// export default ListItem;