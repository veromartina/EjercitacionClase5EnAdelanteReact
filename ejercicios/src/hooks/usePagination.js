
import { useState, useEffect } from "react";

export const usePagination = (initialPage = 1) => {
  const [currentPage, setCurretPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1); // Estado para el número total de páginas

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurretPage((prev) => prev + 1);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 1) {
      setCurretPage((prev) => prev - 1);
    }
  };

  // función para actualizar el total de páginas
  const setTotal = (pages) => {
    setTotalPages(pages);
  };

  return {
    currentPage,
    nextPage,
    prevPage,
    totalPages,
    setTotal,
    setCurretPage  
  };
};

/*
import { useState } from "react";

export const usePagination = (initialPage=1) => {
    const [currentPage, setCurretPage] = useState(initialPage);

    const [totalPages, setTotalPages] = useState(1); // Estado para el número total de páginas

    const nextPage = () => setCurretPage((prev)=>prev + 1)
    const prevPage = ()=> setCurretPage ((prev)=> prev - 1)
      
    const total = () => setTotalPages((totalPages)  = totalPages + 1)

  
    return{
        currentPage,
        nextPage,
        prevPage,
        totalPages
    
    }
    
}

*/