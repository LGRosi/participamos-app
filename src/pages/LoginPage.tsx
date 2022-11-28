import { useState } from "react";
import * as authService from "../services/auth.sevices";
import logoParticipamos from "../assets/svg/icon-logo-participamos.svg";


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
            <div className="logo-container">
                <img 
                    src={logoParticipamos} 
                    width={40} 
                    alt="Logo de la app Participamos" 
                />
                <h1 className="h1">Participamos</h1>
            </div>
            <div className="form-container">
                <h2 className="h2">Ingresa a tu cuenta</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="email-container">
                        <label className="label" htmlFor="email">Email</label>
                        <input 
                            className="input-email" 
                            type="email" 
                            onChange={handleChangeEmail} 
                            value={email}
                            placeholder="Email"
                        />
                    </div>
                    <div className="password-container">
                        <label className="label" htmlFor="password">Password</label>
                        <input 
                            className="input-password" 
                            type="password" 
                            onChange={handleChangePassword} 
                            value={password} 
                            placeholder="Password"
                        />
                    </div>
                    <button className="button-login" type="submit">Ingresar</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;