import './Products.css';

function Product(props){
    return <div className={"d1"}>
            <img src={props.p.thumbnail} alt="img PC"/>
            <h3>{props.p.title}</h3>
            <span>{props.p.price}</span><br/>
            <button>Ajouter au panier</button>
        </div>
}

export default Product;