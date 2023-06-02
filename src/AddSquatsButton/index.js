import React from "react";



function AddSquatsButton({numberOfSquats, addSquats}){
    return(
        <button onClick={()=>addSquats(1)} >
            Add {numberOfSquats}
        </button>
    );
}
export default AddSquatsButton;