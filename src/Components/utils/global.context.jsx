import { createContext, useContext, useState, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

/* export const initialState = {theme: "", data: []} */

export const ContextGlobal = createContext(undefined);

const initialState = 
{list:[],
favs: JSON.parse(localStorage.getItem('favs')) ||  [],
//theme:'dark'
}

export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

    
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
    useEffect(() => {
      const url = 'https://jsonplaceholder.typicode.com/users/'
      fetch(url).then(response => {
        if (!response.ok){
          throw new Error("error en la consulta")
        }
        return response.json()
      })
      .then(data =>{
        dispatch({type: 'GET_DENTISTS', payload: data})
      }).catch(error =>{
        console.error('error al realizar la petición');
      });
      }, []);

      useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(state.favs))
      }, [state.favs])
      



  return (
    <ContextGlobal.Provider value={{
      state, 
      //theme,
      dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)