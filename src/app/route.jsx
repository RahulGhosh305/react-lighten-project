// import React, { Component } from 'react';
import { Router, Link } from "@reach/router"

// Custom Componet
import HomePage from '../pages/home/index.jsx';
import AboutPage from '../pages/about/index.jsx';
import ProductPage from '../pages/product/index.jsx';
import BlogPage from '../pages/blog/index.jsx';
import ContactUspage from '../pages/contact/index.jsx';



function AppRoute() {
    return (
        <Router>
            <HomePage path='/' />
            <AboutPage path='about/' />
            <ProductPage path='product/' />
            <BlogPage path='blog/' />
            <ContactUspage path='contact/' />
        </Router>
    )
} 
export default AppRoute;
