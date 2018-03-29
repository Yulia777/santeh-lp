import React, { Component } from 'react';
import FormRange from '../../main/range/range';

class Range extends Component{
    render() {
        return(
            <section className="range">
                <div className="container range__wrap">
                    <h2 className="range__title">Поможем Вам выбрать продаваемый ассортимент!</h2>
                    <p className="range__desc">
                        Оставьте заявку - мы отправим вам подборку самого
                        продаваемого ассортимента, на данный момент!
                    </p>
                    <div className="form">
                        <FormRange/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Range;
