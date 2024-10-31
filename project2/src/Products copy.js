import './Products.css';

function Product1(props){
    return <tr>
            <td>{props.p.title}</td>
            <td>{props.p.price}</td>
            <td src={props.p.thumbnail} alt="img PC"></td>
        </tr>
}

export default Product1;