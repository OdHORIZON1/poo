import React, { useState } from 'react';
import '../css/loading.css'

const Loading = ()=>{
    const [boool, setBoool] = useState(true);
    window.addEventListener('DOMContentLoaded', ()=>{
        setBoool(false);
    });
return(
    <>
    {boool &&
    <div className="loading">
        <span className="l1">Loading</span>
        <span className="l2">
           <span className="l11">.</span>
           <span className="l12">.</span>
           <span className="l13">.</span>
        </span>
    </div>}
    </>
);
}

export default Loading;