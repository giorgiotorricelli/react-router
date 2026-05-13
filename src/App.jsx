import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router';

import DefaultLayout from './layouts/DefaultLayout';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import CardDetailsLayout from './layouts/CardDetailsLayout';

import useFetchProducts from './hooks/useFetchProducts';

function App() {
  const productList = useFetchProducts();
  const numberOfProducts = productList.length + 1;
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route index element={<Homepage/>}/>
            <Route path='about-us' element={<AboutUs/>}/>
            <Route path='products' element={<Products productList={productList}/>}/>
            <Route path='/card/:id' element={<CardDetailsLayout numberOfProducts={numberOfProducts}/>}/>
            
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
