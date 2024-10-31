import "./employees.css"
function Employee(props){
    return (
        <div className={"d1"}>
            <img src={props.p.photo} alt="profil"/>
            <h2>{props.p.nom} {props.p.prenom}</h2>
            <h3>salaire € {props.p.salaire}</h3>
            <p>Grade : {props.p.grade}</p>
            <p>Echelle : {props.p.echelle}</p>
        </div>
    )
}
export default Employee;
