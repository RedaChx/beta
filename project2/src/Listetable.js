import Product1 from "./Products copy";

function Listetable(props){
    return (<table border={1} border-color='black'>
            <tr>
                <th>Produit</th>
                <th>Prix</th>
                <th>Image</th>
            </tr>
            {props.liste.map(x=><Product1 p={x}/>)}
        </table>
    )
    

}

export default Listetable;