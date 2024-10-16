import axios from "axios"

export const api_key = 'be50234029227861244dc229b3cedd4e'
export const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3'
})