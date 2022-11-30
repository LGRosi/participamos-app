import React, { useState } from "react";
import * as authService from "../services/auth.sevices";
import logoParticipamos from "../assets/svg/icon-logo-participamos.svg";
import { FcGoogle } from "react-icons/fc";


function LoginPage({ onLogin }: any) {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errors, setErrors] = useState<string[]>([]);

    function handleSubmit(event: any) {
        event.preventDefault();

        authService.login(email, password)
            .then(({user, token}) => {
                onLogin(user, token);
            })
            .catch(err => {
                if (err.errors) {
                    setErrors(err.errors);
                } else {
                    setErrors([err.message]);
                }
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
                    width={50} 
                    alt="Logo de la app Participamos" 
                />
                <h1 className="h1">Participamos</h1>
            </div>
            <div className="form-container">
                <h2 className="h2">Ingresá a tu cuenta</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <React.Fragment>
                        {
                            errors.map((errors, index) => 
                                <div className="errors-container" key={index}>
                                    <small className="errors">{ errors }</small>
                                </div>
                            )
                        }
                    </React.Fragment>
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
                <div className="google-container">
                    <p className="login-with">Iniciar sesión con</p>
                    <div className="image-google-container">
                        <FcGoogle size={30} />
                    </div>
                </div>
                <div className="register-container">
                    <p className="text-register">
                        ¿Todavía no te registraste?
                        <span className="span-register">Registrarse</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;