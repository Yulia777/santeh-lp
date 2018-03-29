import React, { Component } from 'react';

class CompanyFigures extends Component{
    render() {
        return(
            <section className="company-figures">
                <div className="container company-figures__wrap">
                    <h2 className="company-figures__title">Компания в цифрах</h2>
                    <div className="counts">
                        <div className="counts__item">
                            <p className="number">
                                <span>84</span> %
                            </p>
                            <p className="desc">
                                постоянных<br/> клиентов
                            </p>
                        </div>
                        <div className="counts__item">
                            <p className="number">
                                <span>52</span> миллиона
                            </p>
                            <p className="desc">
                                единиц товара было<br/>
                                продано нами за 2017 год
                            </p>
                        </div>
                        <div className="counts__item">
                            <p className="number">
                                <span>5</span> представительств
                            </p>
                            <p className="desc">
                                в самых крупных<br/>
                                городах России
                            </p>
                        </div>
                        <div className="counts__item">
                            <p className="number">
                                <span>796</span> товарных единиц
                            </p>
                            <p className="desc">
                                основного<br/> ассортимента
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default CompanyFigures;
