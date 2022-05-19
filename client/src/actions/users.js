import axios from 'axios';

const homeUrl = "http://localhost:5000/users";

export const login = (key) => {
    return axios.get(homeUrl + `/${key}`);
}
