import axios from 'axios'

export const getUsers = () => {
    return new Promise(function (resolve, reject) {
        axios.get('/api/users')
            .then(res => resolve(res))
            .catch(e => reject(e))
    })
}