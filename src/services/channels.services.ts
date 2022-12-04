async function channels() {
    return fetch('http://localhost:4000/api/channels', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        },
    })

    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error en la llamada');
        }
    })
    
}

export {
    channels
}