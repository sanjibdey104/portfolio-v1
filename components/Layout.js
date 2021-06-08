import React from 'react';
import CustomHead from './CustomHead';
import Header from './Header';

const Layout = ({ children }) => {

    return (
        <>
        <CustomHead />
        <div className="container">
            <Header />
            {children}
        </div>
        </>
    )
}

export default Layout
