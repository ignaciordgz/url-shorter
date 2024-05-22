import axios from "axios"

const BASE_URL = "http://localhost:8080/api"

export const axiosPostStoreUrl = ( {originalURL} ) => 
{
    return axios.post(BASE_URL + "/storeURL", {originalURL})
}