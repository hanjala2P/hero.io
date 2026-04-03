import axios from "axios";
import { useEffect, useState } from "react"

const useCards =()=>{
    const [card , setCard] =useState([]);
    const [loading , setLoading] =useState(true);
    const [error , setError] =useState(null);

    useEffect(
        ()=>{ axios('/appData.json')
            .then(data => setCard(data.data))
            .catch(err => setError(err))
            .finally(()=>setLoading(false))
        },[]
    )
    return {card , loading , error}
}
export default useCards;