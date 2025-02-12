import React from "react";
import { Route, Routes as RoutesReact } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login"
//import Products from "./pages/Products";

import NotFound from "./pages/Notfound";
import MockapiFetch from "./pages/MockapiFetch";
//import ProductDetails from "./componets/ProductDetails";
import MockapiDetails from "./pages/MockapiDetails";
import Account from "./pages/Account";
import ProtectedRoute from "./componets/ProtectedRoute";

const Routes = () => {
  return (
    <RoutesReact>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      {/*} <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails/>}/> */}
      <Route path="*" element={<NotFound />} />
      <Route path="/mockapi" element={<MockapiFetch />} />
      <Route path="/mockapi/:id" element={<MockapiDetails />} />

      <Route element={<ProtectedRoute />}>   {/* rutas protegidas, encierro las rutas que quiero como  protegidas */}
        <Route path="/account" element={<Account />}>
          {/* representan componentes hijos , van sin la barra, sino comenzarian como el home  */}
          <Route path="cart" element={<div>Carrito</div>} />{" "}
          {/*en lugar de div uso componentes */}
          <Route path="profile" element={<div>Perfil</div>} />
        </Route>
      </Route>
      {/*lleva etiqueta de apertura y cierre diferentes a las otras rutas, me da la posibilidad de poner un children (mostrar un contenido hijo). en este caso va a renderizar losdos hijos: carrito y perfil*/}
    </RoutesReact>
  );
};

export default Routes;
