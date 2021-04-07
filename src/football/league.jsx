import { useEffect, useState } from "react"
import axios from 'axios';

export default function League()
{
    //const [data,setData] = useState({});
    useEffect(()=>{
       const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v2/leagues/season/2019',
        headers: {
            'x-rapidapi-key': 'fcc4080188msh30631611aa41accp1afca3jsn1517c40a3e0c',
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
        }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
        
    },[])
        
    return (
        <div>
             is data in console??   
        </div>
    )
}