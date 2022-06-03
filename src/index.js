import React from 'react';
import ReactDOM from "react-dom/client";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="Product/:id" element={<App page = {"ProductPage"} />} />
            <Route path="Basket" element={<App page = {"BasketPage"}/>} />
            <Route path="SearchResult" element={<App page = {"SearchResultPage"}/>} />
            <Route path="Login" element={<App page = {"LoginPage"}/>} />
            <Route path="Payment" element={<App page = {"PaymentPage"}/>} />
            <Route path="/" element={<App page = {"Frontpage"}/>}/>
        </Routes>
    </BrowserRouter>
);
reportWebVitals();