import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
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
            <Route path="Inputpage/:groupid" element={<App page = {"ProductPage"} />} />
            <Route path="/" element={<App page = {"Frontpage"}/>}/>
        </Routes>
    </BrowserRouter>
);
reportWebVitals();