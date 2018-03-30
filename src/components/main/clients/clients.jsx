import React, { Component } from 'react';

class Clients extends Component{
    render() {
        return(
            <section className="clients">
                <div className="container clients__wrap">
                    <h2 className="clients__title">Более 1870 клиентов по всей России</h2>
                    <div className="clients__desc">
                        <div className="clients__list">
                            <ul>
                                <li>Крупнооптовые покупатели</li>
                                <li>Мелкооптовые покупатели</li>
                                <li>Комплектующие и монтажные организации</li>
                                <li>Магазины DIY формата</li>
                                <li>Сетевые магазины сантехники</li>
                            </ul>
                        </div>
                        <div className="clients__map">
                            <img src="./images/map-min.png" alt="Клиенты на карте Сантехстандарт" title="Клиенты на карте Сантехстандарт"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Clients;
