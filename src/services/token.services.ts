function setToken(token: any) {
    localStorage.setItem('token', token);
}

function getToken() {
    return localStorage.getItem('token');
}

function removeToken() {
    localStorage.removeItem('token');
}

export {
    setToken,
    getToken,
    removeToken
};