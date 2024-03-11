import axios from 'axios'
import { useState } from 'react'

const useFetch = (url) => {

    const [response, setresponse] = useState()
    const [hasError, setHasError] = useState(false)
  
    const getApi=()=>{
        axios.get(url)
        .then(response => {
          setresponse(response.data)
          setHasError(false)
        })
        .catch(error => {console.log(error)
        setHasError(true)})
    }
    

  return [response, getApi, hasError]
}

export default useFetch