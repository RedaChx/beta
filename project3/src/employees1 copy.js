import TAbEmployee from "./employees copy";
function ListeEmployees(props){
    return <div>
        <h1>Liste des employés</h1><br/>
        <div class="Ti">Information des employés</div>
        <table border={1}>
            <th>Photo</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>salaire "€"</th>
            <th>Grade</th>
            <th>Echelle</th>
        {props.liste.map(x=><TAbEmployee p={x}/>)}
        </table>
    </div>
}

export default ListeEmployees;