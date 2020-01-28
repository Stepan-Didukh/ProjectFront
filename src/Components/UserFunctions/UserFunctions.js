import axios from 'axios'

export const register = newUser => {
    return axios
        .post('user ', {
            name: newUser.name,
            surname:newUser.surname,
            email: newUser.email,
            password: newUser.password
        })
        .then(response => {
            console.log('Registered')
        })
};

// export const login = user => {
//     return axios
//         .post('auth', {
//             email: user.email,
//             password: user.password
//         })
//         .then(response => {
//             localStorage.setItem('token', response.data);
//             return response.data
//         })
//         .catch(err => {
//             console.log(err)
//         })
// };

