import { useState } from "react"
import './Login.css'
import { useNavigate, Navigate } from "react-router-dom"

const Login = () => {

    const navigation = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const submit = (e) => {
        e.preventDefault()

        fetch('https://reqres.in/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        })
        .then(data => {
            localStorage.setItem("tokenTODO", data.token)
            navigation('/')
            console.log('Success')
        })
        .catch(error => {
            console.error('Error:', error)
        })
    }

    if (localStorage.getItem("tokenTODO")) return <Navigate to="/" />

    return (
        <div className="bodylogin">
            <div className="login-container">
            <h1>Iniciar sesión</h1>
            <form onSubmit={submit} >
                <div className="field">
                    <label htmlFor="email">Correo electrónico</label>
                    <input required onChange={(e) =>{
                        setUser({
                            ...user,
                            email: e.target.value
                        })
                    }} type="email" name="email" />
                </div>
                <div className="field">
                    <label htmlFor="password">Contraseña</label>
                    <input required onChange={(e) =>{
                        setUser({
                            ...user,
                            password: e.target.value
                        })
                    }} type="password" name="password" />
                </div>
                <div className="submit">
                    <input type="submit" value="Ingresar" />
                </div>
            </form>
        </div>
        </div>
    )
}

export default Login