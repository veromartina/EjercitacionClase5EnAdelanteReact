import {  Grid } from '@chakra-ui/react'
import React from 'react'
import Card from '../componets/Card'
//import { products } from '../utils/products'
import { useLocation } from 'react-router-dom'


const Products = () => {
  const location= useLocation()
  console.log(location)
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
   {products.map((product)=><Card key={product.id} product={product}/>)}

  </Grid>
  )
}

export default Products