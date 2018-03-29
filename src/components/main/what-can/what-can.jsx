import React, { Component } from 'react';

class WhatCan extends Component{
    render() {
        return(
            <section className="what-can">
                <div className="container what-can__wrap">
                    <h2 className="what-can__title">Что может <span>продающий</span> лендинг:</h2>
                    <div className="circles">
                        <div className="circle">
                            <div className="circle__num">
                                <p className="num">1</p>
                            </div>
                            <div className="circle__wrap">
                                <p className="circle__desc">
                                    Уговорить Вашего клиента
                                    оставить заявку или
                                    купить именно сейчас
                                </p>
                            </div>
                        </div>
                        <span></span>
                        <div className="circle">
                            <div className="circle__num circle__num--second">
                                <p className="num">2</p>
                            </div>
                            <div className="circle__wrap circle__wrap--second">
                                <p className="circle__desc circle__desc--second">
                                    Помочь Вам навсегда
                                    забыть о холодных звонках
                                    и отсутствии заявок
                                </p>
                            </div>
                        </div>
                        <span></span>
                        <div className="circle">
                            <div className="circle__num">
                                <p className="num">3</p>
                            </div>
                            <div className="circle__wrap">
                                <p className="circle__desc">
                                    Понять вашего клиента и
                                    предложить именно то,
                                    что ему нужно
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default WhatCan;
