import axios from "axios";
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '2eef00dc15484404bdf71e4a76d26a1a'
    }
})