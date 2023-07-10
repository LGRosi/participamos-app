async function login(email: string, password: string) {
    try {
        const response = await fetch('http://localhost:4000/api/users/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })

        if (response.ok) {
            return await response.json();
        } else if (response.status === 400) {
            const error = await response.json();
            throw error;
        } else {
            throw new Error(`Error en la llamada. Status: ${response.status}. Status text: ${response.statusText}`);
        }
    } finally {}
}

async function logout(token: string) {
    try {
        const response = await fetch('http://localhost:4000/api/users/logout', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ token })
        })
    
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error("Error en la llamada");
        }

    } catch (error) {
        throw new Error("Error al cerrar sesión: " + error);
    }
}

export {
    login,
    logout
}