import React from 'react';
import FormCost from "../elements/forms/form-cost/FormCost";

const Popup = (props) => {

    return(
        <section className={'popup-overlay'} style={props.state ? {display: 'block'} : null}>
            <div className="popup-form">
                <div className="popup-form__close" onClick={props.close}>×</div>
                <p>{props.title}</p>
                {props.notification ? <h5 className={'popup-form__notification'}>Менеджер свяжется с Вами в ближайшее время</h5> : null}
                <FormCost send={props.formClick}/>
            </div>
        </section>
    )
};

export default Popup;