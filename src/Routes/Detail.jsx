import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  
    const { id } = useParams();
    const [eventData, setEventData] = useState({});


  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

    useEffect(() => {
      const fecthIdData = async () => {
        
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setEventData(data);
      }
      fecthIdData();
      }, []);

  return (
    <>
    <div className='table'>
    <h1>Detail Dentist id </h1>
      <div>
        <h4>Name</h4>
        <p>{eventData.name}</p>
      </div> 
      <div>
        <h4>Email</h4>
        <p>{eventData.email}</p>
      </div>
      <div>
        <h4>Phone</h4>
        <p>{eventData.phone}</p>
      </div> 
      <div>
        <h4>Website</h4>
        <p>{eventData.website}</p>
      </div> 
    </div>
     {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail