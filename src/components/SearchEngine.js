import React, { useState } from 'react'
import axios from "axios"
import './SearchEngine.css'
import Results from './Results'
// import Loading from './Loading'

const SearchEngine = (props) =>{

    const[wordInput, setWordInput] = useState(props.defaultKeyword);
    const[loaded, setLoaded] = useState(false);
    const[results, setResults] = useState(null);

    function handleWordInput(e){
        setWordInput(e.target.value);
    }

    function handleResponse(response){
        if(response.data){
            console.log(response.data[0]);
            setResults(response.data[0]);
            // setFine("yash");
        }
        
    }

    function handleSubmit(e){
        e.preventDefault();
        search();
    }

    function search(){
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${wordInput}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function load(){
        setLoaded(true);
        search();
    }

    // if(fine){
    //     return toast("fine", { type: "success" }); 
    // }

    if(loaded){
        return (
            <> 
                <div className="SearchEngine">
                    <form onSubmit={handleSubmit}>
                        <div className="form-row"> 
                            <input type="search" onChange={handleWordInput} className="form-control" placeholder="Type a word or phrase"/>
                            <button type="submit" value="search" className="btn btn-success">Search</button>
                        </div>
                    </form>
                </div>
                {/* <ToastContainer position="top-center" /> */}
                <Results results={results}/>
                {/* {loaded ? <Results results={results}/> : <Loading/> } */}
            </>
        );
    }
    else{
        load();
        return <h1>Loading...</h1>
    }
}
export default SearchEngine;