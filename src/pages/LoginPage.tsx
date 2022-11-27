import { useState } from "react";
import * as authService from "../services/auth.sevices";

function LoginPage({ onLogin }: any) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event: any) {
        event.preventDefault();

        authService.login(email, password)
            .then(({user, token}) => {
                onLogin(user, token);
            })
            .catch(err => {
                alert('Login incorrecto');
            });
    }

    function handleChangeEmail(event: any) {
        setEmail(event.target.value);
    }

    function handleChangePassword(event: any) {
        setPassword(event.target.value);
    }

    return(
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" onChange={handleChangeEmail} value={email} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" onChange={handleChangePassword} value={password} />
                <br />
                <button type="submit">Ingresar</button>
            </form>
        </div>
    )
}

export default LoginPage;