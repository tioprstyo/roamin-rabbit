import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { LoginPage, RegisterPage, VerifikasiPage, HomePage, EsimPage, ListingPage } from 'pages';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verifikasi" element={<VerifikasiPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/manage" element={<EsimPage />} />
        <Route path="/listing" element={<ListingPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
