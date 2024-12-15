import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Common/Navbar';
import Footer from '../Pages/Common/Footer';
const MainLayout = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className='max-w-full mx-auto'>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;