import React, { useState,useEffect, useRef } from "react";
import "@styles/Login.scss";
import logo from "@logos/logo_yard_sale.svg";
import BigTitle from "@components/BigTitle";

const Login = () => {

  const [showContent, setShowContent] = useState(false);

    useEffect(()=>{
        setShowContent(false);
        setTimeout(()=>{
            setShowContent(true)
        },2000)
    },[])

  const form = useRef(null);

  const handleSubmit = (event) => {
	event.preventDefault()
    const formData = new FormData(form.current);
    const data = {
      username: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);
    window.location.href="/";
  };
  return (
    <>
    {showContent?
      <div className="Login">
        <div className="Login-container">
          <img src={logo} alt="logo" className="logo" />
          <form action="/" className="form" ref={form}>
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
            <a href="/password-recovery">Olvide mi contraseña</a>
          </form>
          <button onClick={()=>window.location.href="/signup"} className="secondary-button signup-button">Registrate</button>
        </div>
      </div>
    :
      <BigTitle title='Inicio de sesión'/>}
    </>
  );
};

export default Login;
