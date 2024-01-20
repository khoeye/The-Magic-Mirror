import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../../pages/Layout";
import Home from '../../pages/Home';
import AdvancedSearch from '../../pages/AdvancedSearch';
import CardSearch from '../../pages/CardSearch';


const Hero = (props) => {
    return (
        <div>
            <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="cardSearch" element={<CardSearch />} />
          <Route path="advancedSearch" element={<AdvancedSearch />} />
        </Route>
      </Routes>
    </BrowserRouter>    
        </div>
    )
};

export default Hero