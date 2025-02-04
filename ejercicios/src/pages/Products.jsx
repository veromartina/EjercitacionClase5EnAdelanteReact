import {  Grid } from '@chakra-ui/react'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card from '../components/Card'
import { products } from '../utils/products'
import { useLocation } from 'react-router-dom'


const Products = () => {
  const location= useLocation()
  console.log(location)

// para que se adapte a todas las pantallas :
return (
  <Grid
    templateColumns={{
      base: 'repeat(1, 1fr)',  // 1 columna en pantallas pequeñas
      sm: 'repeat(2, 1fr)',    // 2 columnas en pantallas pequeñas (a partir de 576px)
      md: 'repeat(3, 1fr)',    // 3 columnas en pantallas medianas (a partir de 768px)
      lg: 'repeat(4, 1fr)',    // 4 columnas en pantallas grandes (a partir de 992px)
    }}
    gap={6}
  >
    {products.map((product) => (
      <Card key={product.id} product={product} />
    ))}
  </Grid>
);
};

export default Products



  /*  Sin responsive
  return (
  
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
   {products.map((product)=><Card key={product.id} product={product}/>)}
  </Grid>  
  )
}
{/*repeat(3, 1fr): Esta es una función usada en CSS Grid Layout. Significa que estás creando 3 columnas (o filas, dependiendo del contexto) y cada una tiene un tamaño de 1fr.

repeat(3, 1fr): Esta parte le dice al navegador que repita 3 veces el valor 1fr. fr es una unidad fraccionaria que se usa en CSS Grid. Un 1fr significa una fracción del espacio disponible. Por lo tanto, si tienes 3 columnas de 1fr cada una, estas tres columnas ocuparán el espacio de forma equitativa. con un gap(separacion) de 6 *

export default Products
*/