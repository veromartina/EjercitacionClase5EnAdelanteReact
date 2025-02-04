Crear una aplicación que simule una tienda utilizando React Router.
Define las siguientes rutas principales usando Routes y Route:
/: Página de inicio con un mensaje de bienvenida.
/products: Muestra una lista de productos con sus nombres como enlaces.
/products/:id: Muestra el detalle de un producto seleccionado utilizando useParams.
*: Página de error 404 que indique "Página no encontrada".
Usa Link o NavLink para navegar entre las rutas.
Al hacer clic en un producto, redirige al detalle (/products/:id).
En el detalle, muestra información como:
id
nombre
descripción
precio ymas detalles que quieran agregar
Puedes agregar imagenes si deseas
Asegúrate de manejar rutas inexistentes mostrando la página 404.
Puntos clave para implementar
Rutas principales:

Configura las rutas usando el componente Routes y define cada ruta con Route.
Navegación entre rutas:

Usa los componentes Link o NavLink para que los usuarios puedan navegar fácilmente.
Detalle de productos:

Utiliza useParams para capturar el id de los productos desde la URL y mostrar sus detalles correspondientes.
Página de error 404:

Implementa una ruta comodín (*) para capturar rutas inexistentes y renderizar una página de error personalizada.
Requisitos adicionales
Usa un array de productos predefinido para mostrar la lista y los detalles.
Dale estilo a la aplicación para mejorar la experiencia visual.
Valida que el producto exista antes de mostrar sus detalles; en caso contrario, muestra un mensaje de "Producto no encontrado".