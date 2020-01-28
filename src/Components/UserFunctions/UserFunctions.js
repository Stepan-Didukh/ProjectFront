import axios from 'axios'

export const register = newUser => {
    return axios
        .post('user', {
            name: newUser.name,
            email: newUser.email,
            password: newUser.password
        })
        .then(response => {
            console.log('Registered')
        })
};

export const login = user => {
    return axios
        .post('auth', {
            email: user.email,
            password: user.password
        })
        .then(response => {
            localStorage.setItem('token', response.data);
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
};

export const edit = user => {
    return axios
        .post('user/editUser', {
            id: user.id,
            email: user.email,
            password: user.password
        })
        .then(response => {
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
};
