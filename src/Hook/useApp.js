
import { useEffect, useState } from "react"
const useProducts =()=>{
    const [products, setProducts] =useState([]);
    const [loading,setLoading] = useState(true)
    const [error, setError] =useState(null)


    useEffect(()=>{
        setLoading(true)
        fetch("/JsonData.json").then(res =>res.json())
        .then(data=>setProducts(data))
        .catch(err=>{
            console.error("Error fetching data:", err);
            setError(err)
             })
        .finally(()=>setLoading(false))
    },[] )
    return {products, loading, error}


}
export default useProducts