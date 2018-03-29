import React, { Component } from 'react';

class Catalog extends Component{
    render() {
        return(
            <section className="catalog">
                <div className="container catalog__wrap">
                    <h2 className="catalog__title">Компания в цифрах</h2>
                    <p className="catalog__desc">
                        Наша продукция производится в России и Китае под собственными брендами AQUALINK и AQUALINE.
                        Мы являемся официальными дистрибьюторами шаровых кранов марки Bugatti, произведенными в Италии
                    </p>
                    <div className="goods">
                        <div className="goods__item">
                            <div className="good">
                                <img src="./images/cranes-min.png" className="good__img" alt="Шаровые краны" title="Шаровые краны"/>
                                <p className="good__desc">
                                    Шаровые краны и трубопроводная арматура
                                </p>
                            </div>
                            <div className="good">
                                <img src="./images/pipes-min.png" className="good__img" alt="Полипропиленновые трубы" title="Полипропиленновые трубы"/>
                                <p className="good__desc">
                                    Полипропиленовые трубы и фитинги
                                </p>
                            </div>
                            <div className="good">
                                <img src="./images/floor-min.png" className="good__img" alt="Оборудование для пола" title="Оборудование для пола"/>
                                <p className="good__desc">
                                    Оборудование для теплого пола
                                </p>
                            </div>
                            <div className="good">
                                <img src="./images/liner-min.png" className="good__img" alt="Гибкая подводка" title="Гибкая подводка"/>
                                <p className="good__desc">
                                    Гибкая подводка
                                </p>
                            </div>
                        </div>
                        <div className="goods__item">
                            <div className="good">
                                <img src="./images/radiators-min.png" className="good__img" alt="Радиаторы" title="Радиаторы"/>
                                <p className="good__desc">
                                    Радиаторы
                                </p>
                            </div>
                            <div className="good">
                                <img src="./images/fitting-min.png" className="good__img" alt="Фитинги резьбовые" title="Фитинги резьбовые"/>
                                <p className="good__desc">
                                    Фитинги резьбовые
                                </p>
                            </div>
                            <div className="good">
                                <img src="./images/mixers-min.png" className="good__img" alt="Смесители" title="Смесители"/>
                                <p className="good__desc">
                                    Смесители
                                </p>
                            </div>
                            <div className="good">
                                <img src="./images/crimp-min.png" className="good__img" alt="Фитинги обжимные" title="Фитинги обжимные"/>
                                <p className="good__desc">
                                    Фитинги обжимные
                                </p>
                            </div>
                        </div>
                        <div className="goods__btn">
                            <button className="btn">
                                Получить прайс-лист со скидкой
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Catalog;
