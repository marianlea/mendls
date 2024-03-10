import axios from "axios";
const SERVER_URL = process.env.REACT_APP_SERVER_URL



async function all() {
    let res = await axios.get(`${SERVER_URL}/api/pastries`)
    return res.data
}

const Pastries = {
    all
}

export default Pastries