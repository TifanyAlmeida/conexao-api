import React from 'react';
import { createRoot } from 'react-dom/client';

import './styles/index.scss';

import App from './App';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Usuario from "../src/pages/Usuario";
import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom';

const container = document.getElementById("root")
const root = createRoot(container);

const routes = createBrowserRouter([
  {
    path: '/usuario',
    element: <Usuario/>
  }
])

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route exatcly path='/' element={<App />}>
            <Route index element = {<Home/>} />
            <Route path='cadastro' element={<Cadastro />}/>
            <Route path='login' element={<Login />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
);