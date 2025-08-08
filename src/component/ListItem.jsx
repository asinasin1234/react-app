function ListItem(){
return(
    <div>
        {product.map((prod) => (
            <h1>{prod.name}</h1>
            
        ))}
    </div>
);
}

const product = [
    { id: "123" , name: "laptop" , price:"60000"},
    { id: "324" , name: "keyboard" , price:"500"},
    { id: "453" , name: "mouse" , price:"600"},
];

export default ListItem;


