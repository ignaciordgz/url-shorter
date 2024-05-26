import axios from "axios"

const BASE_URL = "https://url-shorter-apirest.onrender.com/api"

export const axiosPostStoreUrl = ( {originalURL} ) => 
{
    return axios.post(BASE_URL + "/storeURL", {originalURL})
}