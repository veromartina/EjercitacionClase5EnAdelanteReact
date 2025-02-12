import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop


{/*
  Uso de useLocation:

El hook useLocation es parte de react-router-dom y te permite obtener información sobre la ubicación actual de la aplicación, como la ruta (path) y los parámetros de la URL.
En este caso, estás extrayendo el pathname, que es la parte de la URL que representa la ruta. Por ejemplo, si la URL es http://miapp.com/product/5, el pathname será /product/5.
La variable pathname:

Cuando se usa const { pathname } = useLocation(), el componente obtiene el valor de pathname de la ubicación actual. pathname contiene la ruta de la página en la que se encuentra el usuario.
useEffect:

useEffect es un hook que te permite ejecutar efectos secundarios en tu componente. En este caso, el efecto se dispara cada vez que pathname cambia, lo que indica que el usuario ha navegado a una nueva página (es decir, ha cambiado la URL).
El efecto que se ejecuta en este caso es window.scrollTo(0, 0), que mueve la ventana del navegador hacia la parte superior de la página (coordenada (0, 0)). Esto asegura que cuando el usuario navega a una nueva ruta, la vista se desplace automáticamente hacia arriba, mejorando la experiencia de navegación.
¿Por qué poner pathname en las dependencias?:

El segundo argumento de useEffect es un array de dependencias. Aquí, se coloca [pathname] para que el efecto se ejecute solo cuando pathname cambie.
Esto significa que cada vez que el usuario navegue a una ruta diferente, el valor de pathname cambiará, y como resultado, useEffect se disparará, lo que hará que la página se desplace hacia la parte superior.
return null:

El componente ScrollToTop no renderiza nada visualmente, por lo que simplemente retorna null. Su único propósito es ejecutar la lógica de desplazamiento hacia arriba al cambiar de ruta. */}