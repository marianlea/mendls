import axios from "axios";


async function all() {
    let res = await axios.get('/api/pastries')
    return res.data
}

const Pastries = {
    all
}

export default Pastries