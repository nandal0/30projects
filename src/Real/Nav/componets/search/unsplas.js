import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization:
        'Client-ID 2tbflic8faN4KQuDYeyAcTU_K_0iBUvaISOY4bN9h14'
    }
})