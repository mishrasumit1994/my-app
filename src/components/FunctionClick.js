import React from 'react'

function clickHandler(){
    console.log('clicked - functional component')
}

const FunctionClick = () => {

    return(
        <button onClick={clickHandler}>Click me</button>
    )


}
export default FunctionClick