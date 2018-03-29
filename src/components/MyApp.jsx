import React from 'react';
import Header from './header/header.jsx';
import Footer from './footer/footer';
import CompanyFigures from './main/company-figures/company-figures';
import Catalog from './main/catalog/catalog';
import Range from '../components/main/range/range';



class MyApp extends React.Component{
    render() {
        return(
            <div>
                <Header/>
                <main>
                    <CompanyFigures/>
                    <Catalog/>
                    <Range/>
                </main>
                <Footer/>
            </div>
        )
    }
}

export  default  MyApp;