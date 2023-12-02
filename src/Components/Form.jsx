import React from "react";
import { useState } from 'react'


const Form = () => {
//Aqui deberan implementar el form completo con sus validaciones

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setName(name === "name" ? value : name);
    setEmail(name === "email" ? value : email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.length > 5 ){
      setShow(true)
      setError(false)
      console.log('submit:', {
        name, 
        email
      });
  } else {
      setError(true)
      setShow(false)
  }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Full name"
        required
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        onChange={handleChange}
      />
      <button type="submit">Send</button>
      {show && <h2>Gracias {name}, te contactaremos cuanto antes vía mail </h2>  } 
      {error && <h5 style={{color: 'red'}}>Por favor verifique su información nuevamente</h5>}
    </form>
  );

}; 


export default Form;

