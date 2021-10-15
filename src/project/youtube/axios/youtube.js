import axios from "axios";

const Key='AIzaSyDv0qzbnXWIkQE3lLYFg6LtM-BFDnx4Dhs'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:6,
        key:Key
    }
})