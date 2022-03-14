import axios from 'axios';

export const checkToken = (token) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/api/auth/checkToken`, { headers: { authorization: token } })
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log(err);
        })
}