import React, { useState } from 'react';
import './Login.css'; // Importa el archivo CSS para el estilo

const EnviarCodigoDeRecuperacion = () => {
  
  const [email, setEmail] = useState('');
 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de registro aquí
  };

  return (
    <div className="contenedor-login">
      <h2>Recuperar Cuenta</h2>
      <form onSubmit={handleSubmit}>
       
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
       
        <button type="submit">Enviar Codigo</button>
      </form>
    </div>
  );
};

export default EnviarCodigoDeRecuperacion;
