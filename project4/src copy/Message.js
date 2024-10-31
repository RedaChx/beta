import React from 'react';
class Message extends React.Component {
    constructor() {
        super();
        this.state = {message:"Bienvenu visiteur",btnMessage:"inscription"}
    }
    f1(){
        if(this.state.btnMessage==="inscription")
        {this.setState({message:"votre inscription est effectuée",btnMessage:"merci"})}
        else
        {this.setState({message:"merci",btnMessage:"inscription"})}
    }
    inscription(){
        this.setState({message:"votre inscription est effectué",btnMessage:"merci"})
    } // we can use this or not
    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button  onClick={()=>this.f1()}>{this.state.btnMessage}</button>
                {/*<button onClick={()=>this.inscription()}>{this.state.btnMessage}</button>*/}
            </div>)
            //<button onClick={()=>this.setState(message:"votre inscription est effectué"),btnMessage:"merci"}>{this.state.btnMessage}</button>
    }
}
export default Message;