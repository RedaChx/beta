import "./employees copy.css"
function TAbEmployee(props){
    return (
        <tr>
            <td><img src={props.p.photo} alt="profil"/></td>
            <td><p>{props.p.nom}</p></td>
            <td><p>{props.p.prenom}</p></td>
            <td><p>{props.p.salaire}</p></td>
            <td><p>{props.p.grade}</p></td>
            <td><p>{props.p.echelle}</p></td>
        </tr>
    )
}
export default TAbEmployee;