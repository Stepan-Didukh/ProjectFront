import axios from 'axios'

export const register = newUser => {
    return axios
        .post(' http://localhost:5000/user ', {
            name: newUser.name,
            surname:newUser.surname,
            email: newUser.email,
            password: newUser.password
        })
        .then(response => {
            console.log('Registered')
        })
};

export const registerAdmin = newUser => {
    return axios
        .post(' http://localhost:5000/admin ', {
            name: newUser.name,
            surname:newUser.surname,
            email: newUser.email,
            password: newUser.password
        })
        .then(response => {
            console.log('RegisteredAdmin')
        })
};


export const login = user => {
    return axios
        .post('auth', {
            email: user.email,
            password: user.password
        })
        .then(response => {
            localStorage.setItem('token', response.data.access_token);
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
};

