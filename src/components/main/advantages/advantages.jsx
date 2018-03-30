import React, { Component } from 'react';

class Advantages extends Component{
    render() {
        return(
            <section className="advantages">
                <div className="container advantages__wrap">
                    <h2 className="advantages__title">Почему Сантехстандарт</h2>
                    <p className="advantages__desc">
                        Наш 14-летний опыт и репутация - это самое главное,
                        но есть ещё несколько очень важных моментов:
                    </p>
                    <div className="items">
                        <div className="item__wrap">
                            <div className="item">
                                <div className="item__image">
                                    <img src="./images/icons/hands-min.png" alt="Выделенный менеджер" title="Выделенный менеджер"/>
                                </div>
                                <div className="item__desc">
                                    <h3 className="title">
                                        «Гибкий» партнер, который сможет
                                        подстроиться под ваши задачи
                                    </h3>
                                    <p className="desc">
                                        Выделенный менеджер для каждого региона,
                                        всесторонняя помощь в реализации
                                        закупаемой продукции
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item__image">
                                    <img src="./images/icons/like-min.png" alt="Гарантия качества" title="Гарантия качества"/>
                                </div>
                                <div className="item__desc">
                                    <h3 className="title">
                                        Гарантия качества
                                    </h3>
                                    <p className="desc">
                                        Вы получаете качественную продукцию о всеми
                                        необходимыми лицензиями, сертификатами и
                                        гарантией качества на 7 лет
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item__image">
                                    <img src="./images/icons/car-min.png" alt="Бесплатная доставка" title="Бесплатная доставка"/>
                                </div>
                                <div className="item__desc">
                                    <h3 className="title">
                                        Бесплатная доставка
                                    </h3>
                                    <p className="desc">
                                        Бесплатная доставка для наших клиентов
                                        по всей территории России
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="item__wrap">
                            <div className="item">
                                <div className="item__image">
                                    <img src="./images/icons/todo-min.png" alt="Обилие позиций" title="Обилие позиций"/>
                                </div>
                                <div className="item__desc">
                                    <h3 className="title">
                                        Большинство позиций
                                        в наличии
                                    </h3>
                                    <p className="desc">
                                        Каждый день в наличии на складе все самые
                                        ходовые, востребованные, проверенные
                                        спросом товары
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item__image">
                                    <img src="./images/icons/gift-min.png" alt="Персональные бонусы" title="Персональные бонусы"/>
                                </div>
                                <div className="item__desc">
                                    <h3 className="title">
                                        Персональные бонусы
                                    </h3>
                                    <p className="desc">
                                        При заказе большой партии товаров вы можете
                                        рассчитывать на индивидуальные предложения,
                                        скидки и подарки
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item__image">
                                    <img src="./images/icons/bag-min.png" alt="Быстрая отгрузка" title="Быстрая отгрузка"/>
                                </div>
                                <div className="item__desc">
                                    <h3 className="title">
                                        Отгрузка за 1-3 дня
                                    </h3>
                                    <p className="desc">
                                        Как только вы вносите деньги, мы тут же
                                        отправляем заказ
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default Advantages;
