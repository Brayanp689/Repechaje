import React, { useEffect, useState } from "react";
import axios from 'axios';

function App() {
    const [paises, setPaises] = useState([]);
    const [error, setError] = useState('');
  
    useEffect(() => {
      const Paises = async () => {
        try {
          const response = await axios.get('https://restcountries.com/v3.1/all');
          setPaises(response.data);
        } catch (err) {
          setError('Ocurrio un error por lo cual no se pudieron traer los paises');
        }
      };
      Paises();
    }, []);
return(
    <div>
    {error}
    {paises.map((pais) => (
        <p>{(pais.name.common)}</p>
      ))}
    </div>
)
}
export default App
