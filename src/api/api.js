import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '1a209579-72ae-40b6-a688-4690d450aff2'
     }
});

let API = {
    getFriends: (page, count) => {
        return instance.get('/users?page=' + page + '&count=' + count).then(
            response => response.data
        );
    }
}

export default API;