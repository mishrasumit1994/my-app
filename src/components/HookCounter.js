import React ,{useState} from "react";


function HookCounter(){
    const [count , SetCount ]= useState(0);

    return(<div>
        <button onClick={() => SetCount(count + 1)}>
            <h1>Function Componenetss ADF</h1>
            Count {count}
        </button>
    </div>
    )

}
export default HookCounter