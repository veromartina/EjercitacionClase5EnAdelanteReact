// llamo y uso mi hook "useForm"



import { useForm} from "../hook/useForm"


export const Register = () =>{
    const { values, handleChange } = useForm({
        //su estado inicial va ser un objeto que va tener name(vacio, password(vacio)). evito repitar lo mismo en cada componente de formulario. con un hook con estado inicial puedo usar un objeto con varias propiedades(las que yo necesite)
        name: "",
        password: "",
        adress: ""
       
    });
    return (
<form>
    <label htmlFor = "name">name</label>
        <input 
        type="text"
        value={values.name}
        name="name"
        id="name"
        onChange={handleChange}
        placeholder="Ingrese nombre usuario"/>

<label htmlFor = "adress">direccion</label>
        <input 
        type="text"
        value={values.adress}
        name="adress"
        id="adress"
        onChange={handleChange}
        placeholder="Ingrese direccion"/> 

<label htmlFor = "password">password</label>
        <input 
        type="password"
        value={values.password}
        id="password"
        name="password"
        onChange={handleChange}
        placeholder="Ingrese contraseña"/>
           

</form>

    );
};