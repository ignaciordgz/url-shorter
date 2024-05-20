import axios from "axios"

const BASE_URL = "http://localhost:8080/api"

export const axiosGetShortUrl = () => 
{
    return axios.get(BASE_URL + "/shortURL")
}

export const axiosPostStoreUrl = ( originalUrl ) => 
{
    return axios.post(BASE_URL + "/storeURL")
}