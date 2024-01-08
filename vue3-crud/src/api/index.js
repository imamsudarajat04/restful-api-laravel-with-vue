// import axios
import axios from "axios";

const Api = axios.create({
    //set default url api
    baseURL: 'http://127.0.0.1:8000'
});

export default Api