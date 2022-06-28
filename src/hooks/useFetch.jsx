import { useState/*, useEffect*/ } from 'react'
import axios from 'axios'

export const useFetch = API => {

    const [ response, setResponse ] = useState(null)
    const [ loader, setLoader ] = useState(false)
    
    const handleFetch = async e => {
        e.preventDefault()
        
        setResponse(null)
        setLoader(true)

        try {
            const res = await axios.get(API)
            // console.log(res)
            setResponse(res.data)
        } catch (error) {
            console.warn(error)  
            setResponse(error.response.data)
        }
        
        setLoader(false)
    }

    // console.log(response)

    return { response, loader, handleFetch }

}