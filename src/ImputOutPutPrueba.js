import { useState } from 'react';
import db from './config/firebase';
import React from 'react';

function ImputOutPutPrueba() {
    const [inputValue, setInputValue] = useState('');
    const[inFireBase, setInFireBase]=useState('');
  
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

    const fetchFireBase = async ()=>{
      try{
        const snapshot = await db.collection('prueba').get();
        let fetchedData = '';
        snapshot.forEach((doc) => {
          fetchedData += doc.data().message + '\n';
        });
        setInFireBase(fetchedData);
        console.log(inFireBase);
      }catch(error){console.error('Error al recuperar documentos:', error);}
    } 

   const soltar = ()=> {setInFireBase('')}
  
    return (
      <React.Fragment>
        <form onSubmit={handleFormSubmit}>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button type="submit">Agregar</button>
        </form> 
          <button type="submit" onClick={fetchFireBase} >recuperar</button>
          <button type="submit" onClick={soltar} >soltar</button>
          <p>{inFireBase}</p>
        
      </React.Fragment>
    );
  }
  
  export { ImputOutPutPrueba };