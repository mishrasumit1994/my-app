import React from "react";

const Hello = () => {
// with JSX
return (
    // <div className="jsx">
    //     <h1>Understanding JSX</h1>
    // </div>
//Without JSX
    React.createElement(
        'div',
        {id:'',className:'jsx'},
        React.createElement(
            'h1',
            null,
            'hello Sumit is testing JSX'
        )
        )
)

}

export default Hello