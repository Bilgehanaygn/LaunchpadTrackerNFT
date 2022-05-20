import axios from 'axios';

const homeUrl = "https://sleepy-ravine-45247.herokuapp.com/appeals";


export const fetchAppeals = () => {
    return axios.get(homeUrl, {headers: {Authorization: 'Bearer ' + localStorage.getItem("jwt")}});
}

export const getSingleAppeal = (id) => {
    return axios.get(homeUrl + `/${id}`, {headers: {Authorization: 'Bearer ' + localStorage.getItem("jwt")}});
}

export const createAppeal = (appealItem) => {
    return axios({method:'post', url: homeUrl, data: appealItem, headers: {Authorization: 'Bearer ' + localStorage.getItem("jwt")}});
}

export const updateAppeal = (id, appealItem) => {
    return axios.put(homeUrl + `/${id}`, appealItem, {headers: { Authorization: 'Bearer ' + localStorage.getItem("jwt")}});
}

export const deleteAppeal = (id) => {
    return axios.delete(homeUrl + `/${id}`, {headers: { Authorization: 'Bearer ' + localStorage.getItem("jwt")}});
}
