import Employee from "./employees";
function LesEmployees(props){
    return <div className="Emp">
        <h1>Liste des employés</h1><br/>
        {props.liste.map(x=><Employee p={x}/>)}
    </div>
}

export default LesEmployees;