import { useState/*, useEffect*/ } from 'react'

export const useFetchData = API => {

    const [ data, setData ] = useState(null)
    const [ loader, setLoader ] = useState(false)
    
    const handleFetchData = async e => {
        e.preventDefault()
        setData(null)
        setLoader(true)
        const response = await fetch(API)
        const result = await response.json()
        setData(result)
        setLoader(false)
        /*setTimeout(() => {
            setData(result)
            setLoader(false)
        }, 1500)*/
    }

    //console.log(data)

    return { data, loader, handleFetchData }

}