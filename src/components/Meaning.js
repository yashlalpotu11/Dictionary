import React from 'react'
import Example from './Example'
import Synonyms from './Synonmys'
import './Meaning.css'

const Meaning = (props) =>{
    return(
        <div className="Meaning">
            {" "}
            <h2>{props.meaning.partOfSpeech}</h2>
            <div className="row">
              <div className="col-11">
                {props.meaning.definitions.map(function(definition, index){
                    return(
                        <div key={index}>
                            <div>
                                <strong>Defination :</strong>
                                {" "}{definition.definition}
                                <Example example = {definition.example}/>
                                <Synonyms synonyms={definition.synonyms}/>
                            </div>
                        </div>
                    );
                })}
              </div>  
            </div>
        </div>
    )
}
export default Meaning;