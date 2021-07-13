import React from 'react'
import { GiSpeaker } from 'react-icons/gi';
import './Phonetic.css'
const Phonetic = (props) =>{
    return(
        <a href={props.phonetic.audio} target="_top" rel="noreferrer"><GiSpeaker className="logoAudio"/></a>
    )
}
export default Phonetic;