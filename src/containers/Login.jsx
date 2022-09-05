import React, { useState, useEffect, useRef, useContext } from "react";
import "@styles/Login.scss";
import logo from "@logos/logo_yard_sale.svg";
import BigTitle from "@components/BigTitle";
import AppContext from "../context/AppContext";
import Home from '@pages/Home';
import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
    const navigate = useNavigate()
    const {setEmail,setPass, setUserFlag} = useContext(AppContext)

    const [showContent, setShowContent] = useState(false);
    const [login, setLogin] = useState(false);
    const [whiteBox, setWhiteBox] = useState("");
    const [greenBox, setGreenBox] = useState("");

    const [animationGreen, setAnimationGreen] = useState("");
    const [animationWhite, setAnimationWhite] = useState("");

    useEffect(() => {
        setShowContent(false);
        setTimeout(() => {
            setShowContent(true);
        }, 2000);
    }, []);

    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get("email"),
            password: formData.get("password"),
        };
        setEmail(data.username);
        setPass(data.password);
        setUserFlag(true);
        navigate('/')
    };
    const handleSubmitNew = () => {
        navigate('/NotFound')
    };

const LoginGreen =
        <div
        className="Login-title-desktop"
        style={{ animation: animationGreen }}
        >
        <h1>Nueva cuenta</h1>
        <h4>Crea una nueva cuenta para seguir con tus compras</h4>
        <div className="option-container">
            <hr className="hr-login" />
            <p>O</p>
            <hr className="hr-login" />
        </div>
        <button
            onClick={() => {
            setLogin(false);
            setAnimationGreen("new-account-green-final 1s ease-out forwards");
            setAnimationWhite("new-account-white-final 1s linear forwards");
            }}
            className="secondary-button"
        >
            Iniciar sesión
        </button>
        </div>

const LoginWhite =
        <div
        className="Login-container-desktop"
        style={{ animation: animationWhite }}
        >
        <img src={logo} alt="logo" className="logo" />
        <form action="/" className="form" ref={form}>
            <h1>Crear cuenta</h1>
            <label htmlFor="email" className="label">
            Nombre completo
            </label>
            <input
            type="text"
            name="email"
            placeholder="nombre"
            className="input input-email"
            />
            <label htmlFor="email" className="label">
            Correo electronico
            </label>
            <input
            type="text"
            name="email"
            placeholder="email@example.com"
            className="input input-email"
            />
            <label htmlFor="password" className="label">
            Contraseña
            </label>
            <input
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
            />
            <button
            onClick={handleSubmit}
            type="submit"
            value="Log in"
            className="primary-button login-button"
            >
            Crear cuenta
            </button>
        </form>
        </div>

const NewAccountGreen =
        <div
        className="Login-title-desktop"
        style={{ animation: animationGreen }}
        >
            <h1>Bienvenido</h1>
            <h4>Ingresa con tu cuenta para seguir con tus compras</h4>
            <div className="option-container">
                <hr className="hr-login" />
                <p>O</p>
                <hr className="hr-login" />
            </div>
            <button
                onClick={() => {
                setLogin(true);
                setAnimationGreen("new-account-green-init 1s ease-out forwards");
                setAnimationWhite("new-account-white-init 1s linear forwards");
                }}
                className="secondary-button"
            >
                Crear cuenta
            </button>
        </div>

const NewAccountWhite =
        <div
        className="Login-container-desktop"
        style={{ animation: animationWhite }}
        >
        <img src={logo} alt="logo" className="logo" />
        <form action="/" className="form" ref={form}>
            <h1>Iniciar sesión</h1>
            <label htmlFor="email" className="label">
            Correo electronico
            </label>
            <input
            type="text"
            name="email"
            placeholder="email@example.com"
            className="input input-email"
            />
            <label htmlFor="password" className="label">
            Contraseña
            </label>
            <input
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
            />
                <button
                onClick={handleSubmit}
                to="/"
                type="submit"
                value="Log in"
                className="primary-button login-button"
                >
                Ingresar
                </button>
                <hr className="hr-login-olvide"/>
                <a onClick={handleSubmitNew} className="olvide">Olvide mi contraseña</a>
        </form>
        </div>


useEffect(() => {
    setWhiteBox(
    login ?
        LoginGreen
    :
        NewAccountGreen

    );
    setGreenBox(
    login ?
        LoginWhite
    :
        NewAccountWhite
    );
}, [login]);

return (
    <>
    {showContent ? (
        <>
        <div className="Login">
            <div className="Login-desktop">
            {whiteBox}
            {greenBox}
            </div>
        </div>
        </>
    ) : (
        <BigTitle title="Inicio de sesión" />
    )}
    </>
);
};

export {LoginContainer};
