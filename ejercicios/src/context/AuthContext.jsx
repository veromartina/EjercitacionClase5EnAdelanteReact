/* eslint-disable react/prop-types */

// context del usuario para poder acceder desde cualquier punto de la aplicacion. Corresponde a la consigna: crear un context para manejar la autenticacion en un app.
import { createContext, useContext, useState } from "react";

//creo un usuario(como si fuera una base de datos)para poder darle acceso . simulasionde usuario
const user_ = {
  username: "cintia",
  password: "test",
};
const AuthContext = createContext(); //primero lo tengo que crear

//segundo creo el provider 
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // creo un estado para usar la informacion del usuario.tenemos un estado para manejar el usario cuando esta autenticado
  const [ error, setError]= useState(null);// un estado para manejar el error en caso de que el inicio de sesion sea erroneo.

  //validacion para iniciar(login ) y cerrar(logout)sesion. 
  const login = ({username, password}) => {
    if(username === user_.username && password === user_.password){
        setUser({username, password}) //le doy valor a user
        setError(null) //despues del incio de sesion vuelvo a null el error.
    }else {
        setError('El usuario o contraseña no coincide con nuestros regitros')
    }
  };

  const logout = () => {
    setUser(null)// si cierro sesion no tengo mas usuario por esovuelve a null
  };

  return (
    <AuthContext.Provider value={{ user, error, login, logout }}>{children}</AuthContext.Provider>
  ); /* el value es el objeto que retorno lo que tiene adentro , lo que necesito "usar en otro lado", por eso devuelvo el estado(useState), los errores, el inicio y el cierre de sesion(login, logout)*/
};

 {/*creo un hook personalizado "useAuth". exporto el hook */}
export const useAuth= () => useContext(AuthContext) 