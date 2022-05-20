import axios from 'axios';

const homeUrl = "https://sleepy-ravine-45247.herokuapp.com/users";

export const login = (key) => {
    return axios.get(homeUrl + `/${key}`, {'Content-Type': 'application/x-www-form-urlencoded'});
}
