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
            <Route path="InputPage/:groupid" element={<App page = {"InputPage"} />} />
            <Route path="GroupPage" element={<App page = {"GroupPage"} />} />
            <Route path="/" element={<App page = {"FrontPage"}/>}/>
        </Routes>
    </BrowserRouter>
);
reportWebVitals();