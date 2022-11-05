import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Shared/Footer/Footer';
import Header from '../Component/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;