import React, { useEffect, useState } from 'react';
import request from 'request';
import {getlivematches} from '../api/football_matches'
export default function Live(props){

    const [liveMatches,setLiveMatches] = useState([]);

    useEffect(()=>{
     var x = getlivematches();
     setLiveMatches(x);
    },[])

    return(
        <div className="home">
         console check...
        </div>
    )
}
