import axios from 'axios'
import config from './config';
class DAL_Login {
    static checkLogin(login, password) {
        return axios.post(config.API_URL+'login', {login, password})
    }
    static logout(id) {
        return axios.post(config.API_URL+'logout', id)
    }
}
export default DAL_Login