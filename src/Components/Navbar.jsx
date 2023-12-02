import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'
import { useEffect } from 'react';
import imgdh from "/images/DH.png";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  //const {state, dispatch} = useContextGlobal()
  //const [state, dispatch] = useReducer(reducer, initalState)


/*   useEffect(() => {
    const toggleTheme = () => {
      const action = { type: 'CHANGE_THEME' }
      dispatch(action)
    }
  }) */



  return (
    <nav className='nav'>
      {/* <img src={imgdh} alt='DH-logo' /> */}
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to='/'><h3>Home</h3></Link>
      <Link to='/Contact'><h3>Contact</h3></Link>
      <Link to='/Favs'><h3>Favs</h3></Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      {/* <button onClick={toggleTheme}>Change theme</button> */}
    </nav>
  )
}

export default Navbar

