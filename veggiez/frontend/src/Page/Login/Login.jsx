import React from 'react';
import logoLogin from '../../assets/logoLogin.png';
import gambarLogin from '../../assets/gambarLogin.png';

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center  bg-green-400">
      <div className="container-content md:w-200 bg-white rounded-2xl">
        <div className="logo flex items-center">
          <img src={logoLogin} alt="poto" className="w-40 rounded-lg p-2" />
          <h1 className="font-bold text-2xl m-2 text-green-500 font-lemon">VEGGIEZ</h1>
        </div>
        <div className="content"></div>
        <div className="form-container">
          <h1>Login Ke Akun VeggieZ</h1>
          <form action="">
            <div className="email m-2">
              <input type="text" placeholder="Email" />
            </div>
            <div className='password mx-15'>
              <input type="password" placeholder='Password' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
