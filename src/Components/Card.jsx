import React from "react";
import { Link } from "react-router-dom";
import {  useEffect } from "react";
import { useContextGlobal } from '../Components/utils/global.context'
import image from "../../public/images/doctor.jpg"; 


const Card = (dentist) => {

  const {state, dispatch} = useContextGlobal()
  const {name , username, id} = dentist
  const findFav = state.favs.find(fav => fav.id == id)

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    
    console.log(findFav);
    if(findFav){
      alert('Ya esta en favoritos')
    }else{
      dispatch({type: 'ADD_FAV', payload: dentist})
    }

  }

  return (
    <div className='card'>
      {/* <img src={image} /> */}
        <Link to={'/Dentist/'+ id} > 
          <h3>{id}</h3>
          <h3>{name}</h3>
          <h3>{username}</h3>
        </Link>
        
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        {/* <button onClick={() =>  dispatch({type: 'ADD_FAV', payload: dentist})} className="favButton">Add fav</button> */}
        <button onClick={addFav} className="favButton">Add fav</button>

    </div>
  );
};

export default Card;
