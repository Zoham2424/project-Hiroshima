import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Players from './Pages/Players';
import App from './App';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import AboutUs from './Pages/AboutUs.tsx';
import Championships from './Pages/Championships';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider> 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="players" element={<Players />} />
        <Route path="aboutUs" element={<AboutUs/>} />
        <Route path="championships" element={<Championships />} />
      </Route>
      <Route path="*" element={<div>You have been splatted</div>} />
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
