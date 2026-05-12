import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router';

import DefaultLayout from './layouts/DefaultLayout';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route index element={<Homepage/>}/>
            <Route path='about-us' element={<AboutUs/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
