import React from 'react'
import Loader from "react-loader-spinner"

const Loading = () =>{
    return(
        <Loader
            type="TailSpin"
            height={50}
            width={50}
            timeout={5000}
            color="rgb(155, 236, 34)"
        />
    )
}
export default Loading;