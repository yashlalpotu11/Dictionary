import React, { useState } from 'react'
import axios from "axios"
import './SearchEngine.css'
import Results from './Results'

const SearchEngine = (props) =>{

    const[wordInput, setWordInput] = useState(props.defaultKeyword);
    const[loaded, setLoaded] = useState(false);
    const[results, setResults] = useState(null);

    function handleWordInput(e){
        setWordInput(e.target.value);
    }

    function handleResponse(response){
        // if(response.title === "No Definitions Found"){
        //     console.log(response.title);
        //     setResults(response.title);
        // }
        // else{
        //     console.log(response.data[0]);
        //     setResults(response.data[0]);
        // }
        if(response.data){
            console.log(response.data[0]);
            setResults(response.data[0]);
        }
        else{
            console.log(response.title);
            setResults(response.title);
        }
    }

    function search(){
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${wordInput}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(e){
        e.preventDefault();
        search();
        // setWordInput(" ");
    }


    function load(){
        setLoaded(true);
        search();
    }
    if(loaded){
        return (
            <>
                {/* <div className="SearchEngine">
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="search"
                            className="search-form"
                            placeholder="Type a word or phrase"
                            onChange={handleWordInput}
                        />
                        <input type="submit" value="search" className="search-button"/>
                    </form>
                    <div className="source">
                        <a href="https://github.com/yashlalpotu11/Dictionary">Open Source</a>
                        {" "} by Yash Lalpotu
                    </div>
                </div> */}
                <div className="SearchEngine">
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <input type="search" onChange={handleWordInput} className="form-control" placeholder="Type a word or phrase"/>
                            <button type="submit" value="search" className="btn btn-success">Search</button>
                        </div>
                    </form>
                </div>
                <Results results={results}/>
            </>
        );
    }
    else{
        load();
        return <h1>Loading...</h1>
    }
}
export default SearchEngine;