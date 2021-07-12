import React, { useState } from 'react'
import axios from "axios"
import './SearchEngine.css'
import Results from './Results'

const SearchEngine = (props) =>{

    const[wordInput, setWordInput] = useState(props.defaultKeyword);
    const[loaded, setLoaded] = useState(false);
    const[results, setResults] = useState(null);

    function handlwWordInput(e){
        setWordInput(e.target.value);
    }

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function search(){
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${wordInput}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(e){
        e.preventDefault();
        search();
    }

    function load(){
        setLoaded(true);
        search();
    }
    if(loaded){
        return (
            <>
                <div className="SearchEngine">
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="search"
                            className="search-form"
                            placeholder="Type a word or phrase"
                            onChange={handlwWordInput}
                        />
                        <input type="submit" value="search" className="search-button"/>
                    </form>
                    <div className="source">
                        <a href="https://github.com/yashlalpotu11/Dictionary">Open Source</a>
                        {" "} by Yash Lalpotu
                    </div>
                </div>
                <Results results={results}/>
            </>
        );
    }
    else{
        load();
        return "Loading..."
    }
}
export default SearchEngine;