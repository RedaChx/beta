import React, { useRef, useState } from "react";
function Inscription(props){
    const nomRef = useRef();
    const prenomRef = useRef();
    const [information, setInformation] = useState("");
    function envoyer() {
        const nom = nomRef.current.value.toUpperCase();
        const prenom = prenomRef.current.value.toUpperCase();
        setInformation(`Nom: ${nom}, Prénom: ${prenom}`);
    }
    return (
    <div>
        <h2>Inscription</h2>
        <div>
            <label>Nom:</label>
            <input type="text" ref={nomRef} />
        </div>
        <br/> <hr/>
        <div>
            <label>Prénom:</label>
            <input type="text" ref={prenomRef} />
        </div>
        <br/> <hr/>
        <button onClick={envoyer}>Afficher</button>
        <hr/>
        <p>{information}</p>
    </div>
    );
}
export default Inscription;