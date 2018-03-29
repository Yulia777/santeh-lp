import React from 'react';
import Header from './header/header.jsx';
import Footer from './footer/footer';
/*import WhatCan from './main/what-can/what-can';*/



class MyApp extends React.Component{
    render() {
        return(
            <div>
                <Header/>
                <main>
                    {/*<WhatCan/>*/}
                </main>
                <Footer/>
            </div>
        )
    }
}

export  default  MyApp;