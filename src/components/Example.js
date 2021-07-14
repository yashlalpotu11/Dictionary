import React from 'react'

const Example = (props) =>{
    if(props.example){
        return (
            <div className="Example">
                {" "}<strong>Example : </strong>
                <em>{props.example}</em>
            </div>
        )
    }
    else{
        return null;
    }
}
export default Example;