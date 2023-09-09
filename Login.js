import React, { useState } from 'react';
import './Login.css'; // Importa el archivo CSS para el estilo

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de inicio de sesión
  };

  return (
    <div className="contenedor-login">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar Sesión</button>
        <a href="http://localhost:3000/"  >¿olvidaste tu contraseña?</a>.
      </form>
    </div>
  );
};

export default Login;
