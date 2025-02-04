import {  Grid } from '@chakra-ui/react'
import React from 'react'
import Card from '../componets/Card'
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
  /* sin adapatar a las pantallas
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
   {products.map((product)=><Card key={product.id} product={product}/>)}

  </Grid>  */
  )
}

export default Products


