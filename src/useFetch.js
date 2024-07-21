import { useState,useEffect } from "react";
const useFetch = (url) =>{
    
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

useEffect((err)=>{
    setTimeout(()=>{
        fetch(url)
    .then(res => {
        if(!res.ok){
            throw Error('could not fecth the data from the rsource')
        }
        return res.json();
    })
    .then(data=>{
        console.log(data)
        setData(data)
        setIsPending(false)

    })
    .catch((err)=>{
        setError(err.message)
    })
    },0
);
},[url]);

return {data, isPending, error}

}

export default useFetch;