import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {Container} from "react-bootstrap";

const Layout = (props) => {
    return (
        <div className="App">
            <Header />

            <Container fluid className='py-5'>
                { props.children }
            </Container>

            <Footer/>
        </div>
    );
};

export default Layout;