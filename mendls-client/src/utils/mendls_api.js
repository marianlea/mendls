require ('dotenv').config()
import axios from "axios";



async function all() {
    let res = await axios.get(`${process.env.SERVER_URL}/api/pastries`)
    return res.data
}

const Pastries = {
    all
}

export default Pastries