import React from 'react';
import Header from './header/header.jsx';
import CompanyFigures from './main/company-figures/company-figures';
import Catalog from './main/catalog/catalog';
import Range from '../components/main/range/range';
import Advantages from '../components/main/advantages/advantages';
import Clients from '../components/main/clients/clients';



class MyApp extends React.Component{
    render() {
        return(
            <div>
                <Header/>
                <main>
                    <CompanyFigures/>
                    <Catalog/>
                    <Range/>
                    <Advantages/>
                    <Clients/>
                </main>
            </div>
        )
    }
}

export  default  MyApp;