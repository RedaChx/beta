import Product from "./Products";
function Lesproduits(props){
    return <div className="Prod">
        {props.liste.map(x=><Product p={x}/>)}
    </div>
}

export default Lesproduits;