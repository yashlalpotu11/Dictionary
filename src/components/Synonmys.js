import React from 'react'

const Synonmys = (props) =>{
    if(props.synonmys){
        return (
            <div className="Synonyms">
                <strong>Synonyms :</strong>
                <ul>
                    {props.synonyms.map(function(synonym, index){
                        return <li key={index}>{synonym}</li>
                    })}
                </ul>
            </div>
        )
    }
    else{
        return null;
    }
}
export default Synonmys;