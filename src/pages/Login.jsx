import React, { useState, useEffect, useRef } from "react";
import "@styles/Login.scss";
import logo from "@logos/logo_yard_sale.svg";
import BigTitle from "@components/BigTitle";

const Login = () => {
  
  const [showContent, setShowContent] = useState(false);
  const [login, setLogin] = useState(false);
  const [whiteBox,setWhiteBox] = useState('');
  const [greenBox,setGreenBox] = useState('');

  const [animationGreen, setAnimationGreen] = useState("");
  const [animationWhite, setAnimationWhite] = useState("");

  useEffect(() => {
    setShowContent(false);
    setTimeout(() => {
      setShowContent(true);
    }, 2000);
  }, []);

  useEffect(()=>{
    setWhiteBox(
      login ?
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
            setLogin(false);
            setAnimationGreen( "new-account-green-final 1s ease-out forwards");
            setAnimationWhite("new-account-white-final 1s linear forwards")
          }}
          className="secondary-button"
        >
          Iniciar sesión
        </button>
      </div>
      :
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
            setAnimationGreen( "new-account-green-init 1s ease-out forwards");
            setAnimationWhite("new-account-white-init 1s linear forwards")
          }}
          className="secondary-button"
        >
          Crear cuenta
        </button>
      </div>
    );
    setGreenBox(
      login ? 
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
          type="submit"
          value="Log in"
          className="primary-button login-button"
        >
          Ingresar
        </button>
      </form>
      {/* <button onClick={()=>window.location.href="/signup"} className="secondary-button signup-button">Registrate</button> */}
    </div>
      :
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
          type="submit"
          value="Log in"
          className="primary-button login-button"
        >
          Ingresar
        </button>
      </form>
      {/* <button onClick={()=>window.location.href="/signup"} className="secondary-button signup-button">Registrate</button> */}
    </div>
    );
  },[login])

  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);
    window.location.href = "/";
  };



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

export default Login;
