import { useState, useEffect } from 'react';

/**
 * Componente Contador
 * Implementa los Hooks useState y useEffect para demostrar
 * el manejo de estado y efectos secundarios en React.
 */
function Contador() {
  // Hook useState: variable de estado inicializada en 0
  const [contador, setContador] = useState(0);

  // Hook useEffect: se ejecuta cada vez que cambia el contador
  useEffect(() => {
    // Registro en consola del valor actual
    console.log(`El contador cambió a: ${contador}`);

    // Mensaje adicional de rastreo
    if (contador > 0) {
      console.log(`🔄 El estado del componente se ha actualizado ${contador} vez/veces.`);
    }
  }, [contador]); // Dependencia: solo se ejecuta cuando cambia 'contador'

  // Manejador del botón
  const incrementar = () => {
    setContador((prev) => prev + 1);
  };

  return (
    <div className="contador-container">
      <h1>Reto 2: Implementación de React Hooks</h1>
      <p className="valor-contador">Valor actual: <strong>{contador}</strong></p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default Contador;