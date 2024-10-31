import React, {useState} from 'react';
function MessageFct(props){
    const [message,setmessage]=useState("Bienvenu visiteur");
    const [messagebtn,setmessagebtn]=useState("inscription");
    const f2 = () => {
        if(messagebtn==="inscription"){
            setmessage("votre inscription est effectué");
            setmessagebtn("merci");
    }else{
        setmessage("Bienvenu visiteur");
        setmessagebtn("inscription");
        }
    }
    return(
        <div>
            <h1>{message}</h1>
            <button onClick={()=>f2()}>{messagebtn}</button>
        </div>
        )
    
}
export default MessageFct;