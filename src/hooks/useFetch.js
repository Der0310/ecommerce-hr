import axios from "axios";
import { useState } from "react";


const useFetch = () => {
    const [apiData, setapiData] = useState();
    const getApi = (url) => {
        axios.get(url)
            .then(res => setapiData(res.data))
            .catch(err => console.log(err))
    }
    return [apiData, getApi]; // get api rellena a apidata
}

export default useFetch;