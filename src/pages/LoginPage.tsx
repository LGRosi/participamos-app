function LoginPage({}) {
    return(
        <>
            <h2>Login</h2>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <button type="submit">Ingresar</button>
            </form>
        </>
    )
}

export default LoginPage;