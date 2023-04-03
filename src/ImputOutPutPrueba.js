import { useState } from 'react';
import db from './config/firebase';
import React from 'react';

function ImputOutPutPrueba() {
    const [inputValue, setInputValue] = useState('');
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log('Agregando mensaje:', inputValue);
      try {
        const docRef = await db.collection('prueba').add({
          message: inputValue,
          timestamp: new Date(),
        });
        console.log('Nuevo documento creado con ID:', docRef.id);
        setInputValue('');
      } catch (error) {
        console.error('Error al agregar documento:', error);
      }
    };
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
      console.log('Input actualizado:', event.target.value);
    };
  
    return (
      <React.Fragment>
        <form onSubmit={handleFormSubmit}>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button type="submit">Agregar</button>
        </form>
      </React.Fragment>
    );
  }
  
  export { ImputOutPutPrueba };