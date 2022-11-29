async function login(email: string, password: string) {
    return fetch('http://localhost:4000/api/users/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })

    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error en la llamada');
        }
    })
}

// async function logout(token: string) {
//     return fetch('http://localhost:4000/api/users/logout', {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify({ token })
//     })

//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error('Error en la llamada');
//         }
//     })
    
// }

export {
    login,
    // logout
}