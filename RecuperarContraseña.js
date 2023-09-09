import React, { useState } from 'react';
import './Login.css'; // Importa el archivo CSS para el estilo

const RecuperarContra = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de registro aquí
  };

  return (
    <div className="contenedor-login">
      <h2>Contraseña Nueva </h2>
      <form onSubmit={handleSubmit}>
       
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Nueva Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirmar Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
};

export default RecuperarContra;
