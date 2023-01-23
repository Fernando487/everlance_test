import axios from 'axios';

const URL = process.env.REACT_APP_API

const searchUsers = async({search = 'gabriel', page = '1', per_page="10"} = {}) => {

    if (search === '') {
        search = 'gabriel'
    }

    //if new request comes, cancel the previous one
    if (typeof searchUsers.cancelToken != typeof undefined) {
        searchUsers.cancelToken.cancel("Operation canceled due to new request.")
    }

    //save the cancel token for the current request
    searchUsers.cancelToken = axios.CancelToken.source()
    
    return await axios.get(`${URL}/search/users?q=${search}&page=${page}&per_page=${per_page}`, {
        cancelToken: searchUsers.cancelToken.token
    }).then(res => res.data)
    
}

const getByUsername = async(username) => {
    return await axios.get(`${URL}/users/${username}`).then(res => res.data)
}


export { searchUsers, getByUsername}
