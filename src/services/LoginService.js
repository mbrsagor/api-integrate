import axios from 'axios';
const API_BASE_URL = 'http://localhost:8000';

export default class LoginService {
    // Login
    login(username, password) {
        return axios.post(`${API_BASE_URL}/api/rest-auth/login/`, {
            username,
            password
        }).then(response => {
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        });
    }

    // Logout
    logout() {
        return axios.post(`${API_BASE_URL}/api/rest-auth/logout/`, {}).then(response => {
            if (response.data.accessToken) {
                localStorage.removeItem('user', JSON.stringify(response.data))
            }
            return response.data;
        })
    }
    // Current user
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}
