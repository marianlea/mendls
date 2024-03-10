import axios from "axios";



async function all() {
    let res = await axios.get('https://mendls-server.vercel.app/api/pastries')
    return res.data
}

const Pastries = {
    all
}

export default Pastries