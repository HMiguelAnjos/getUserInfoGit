import axios from 'axios'

async function getUsers(username: string) {
    try {
        const result = await axios.get(`https://api.github.com/users/${username}`)
        return result.data
    }
    catch (err) {
        console.log(err);
    }
}

export {
    getUsers
}
