import React from "react";
// import image from './image.jpg'
// import rabees form "./index"
// import React, { Component } from "react";

// class Adeema extends Component(){
//     // const  bijja = "piyara piyara sa likh kiya ab"
//     render (){
//         return <h1>This is Adeema {this.props.name}</h1>;              
//      }
// }

// function Adeemaamir(props){
//     return <h1>hello world my name is {props.name}</h1>;              
// }

// export default Adeemaamir;

function Ranarabees(props){
    return <div> <h1 style={{backgroundColor: "darkkhaki",color: "red",fontStyle:"italic"}}>hello EveryOne My Name Is {props.name}</h1>
    <button onClick={fire}>Click Me Bro</button>
    </div>
}
function fire() {
    alert("Hello EveryOne WellCome In RANA BROTHERS AND SONS INTERNATIONAL MASS COMMUNICATIONS (RBASIMC)");
}

export default Ranarabees;


