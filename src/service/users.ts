import axios from 'axios'

class Users {
    public getUsers(username: string) {
        const result = axios.get(`https://api.github.com/users/${username}`).then((res) => {
            return res
        })

        return result
    }
}

export default Users