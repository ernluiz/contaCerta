import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/home');
  };

  return (
    <div className='login-container'>
      <div className="glass-box">
        <h2>Login</h2>
        <div className="input-group">
          <input type="text" placeholder="Usuário" />
        </div>
        <div className="input-group">
          <input type="password" placeholder="Senha" />
        </div>
        <button onClick={handleLoginClick} className="login-btn">
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Login;