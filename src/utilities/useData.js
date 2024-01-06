import useSWR from "swr"
import axios from "axios"

const fetcher = url => axios.get(url).then(res => res.data)

const useData = (URL,options,shouldNotFetch) => {

    return useSWR(shouldNotFetch ? null : URL ,fetcher,options)
}

export default useData
