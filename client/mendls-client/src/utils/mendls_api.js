import axios from "axios";


async function all() {
    let res = await axios.get('/api/pastries')
    console.log(res.data);
    return res.data
}

const Pastries = {
    all
}

export default Pastries