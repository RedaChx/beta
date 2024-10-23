import './styleliste.css';
function Elementsliste(props){
    return <div>
        <h3>{props.titre}</h3>
    <ol type= {props.type}>
    <li >Element 1</li>
<li >Element 2</li>
<li >Element 3</li>
<li >Element 4</li>
    </ol>
    </div> 
}

export default Elementsliste;