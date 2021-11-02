import axios from 'axios'

async function getUsers(username: string) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.get(`https://api.github.com/users/${username}`)
            resolve(result.data)
        }
        catch (err) {
            console.log(err);
            reject(err);
          }    
    })
}

export {
    getUsers
}
