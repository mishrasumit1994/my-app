import React, { Component } from "react";

// const Xyz = (props) =>{

//     return <div>
//         <h1>Hello {props.name} , {props.heroName}</h1>
//         {props.children}
//     </div>
// }

class Xyz extends Component{
    render(props){
        return(<h1>
            {this.props.name}
            {this.props.heroName}
            {this.props.children}
            </h1>
        )
    }
}

export default Xyz;