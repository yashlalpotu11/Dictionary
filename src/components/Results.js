import React from 'react'
import Meaning from './Meaning'
import Phonetic from './Phonetic'
import './Results.css'


const Results = (props) =>{
    
    if(props.results){
        return(
            <>
                <div className="Results">
                    <section>
                        <h1>{props.results.word}</h1>

                        {props.results.phonetics.map(function(phonetic, index){
                            return(
                                <h1 key={index}>
                                    <Phonetic phonetic={phonetic} />
                                </h1>
                            );
                        })}
                    </section>
                    {props.results.meanings.map(function(meaning, index){
                        return (
                            <section key={index}>
                                <Meaning meaning = {meaning} />
                            </section>
                        )
                    })}
                </div>
            </>
        )
    }
    else{
        return null;
    }
}
export default Results;