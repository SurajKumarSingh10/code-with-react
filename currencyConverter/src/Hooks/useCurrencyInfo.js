import { useState } from "react";
import { useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/ismartcoding/currency-api@main/latest/data.json`)
        .then((res)=> res.json())
        .then((res)=>setData(res))
        console.log(data);
    },[currency])

    return data
}

export default useCurrencyInfo