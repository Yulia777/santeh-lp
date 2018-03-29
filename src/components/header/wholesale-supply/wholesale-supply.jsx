import React, { Component } from 'react';
import Popup from "../../popup/Popup";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {sendOrderFreeAudit, orderFreeAuditSuccess} from "../../../actions/actions";

class WholesaleSupply extends Component{
    constructor(props) {
        super(props);
        this.state = {
            popup: false
        };
    }

    openPopupHandler() {
        this.setState({popup: true});
    }

    closePopupHandler() {
        this.setState({popup: false});
        this.props.orderFreeAuditSuccess(false);
    }

    sendFormHandler(event) {
        event.preventDefault();
        const formData = {
            type: 'order-landing',
            name: event.target.name.value,
            phone: event.target.phone.value
        };
        event.target.name.value = '';
        event.target.phone.value = '';
        this.props.sendOrderFreeAudit(formData);
    }

    render() {
        return(
            <section className="wholesale-supply">
                <div className="container wholesale-supply__wrap">
                    <h1 className="wholesale-supply__title">Оптовая поставка инженерной сантехники</h1>
                    <p className="wholesale-supply__desc">
                        Гибкие условия оплаты. Низкие цены. Маркетинговая поддержка. Бесплатная доставка
                    </p>
                    <div className="btns">
                        <div className="btns__item">
                            <button className="btn" onClick={this.openPopupHandler.bind(this)}>Задать вопрос менеджеру</button>
                        </div>
                        <div className="btns__item">
                            <button className="btn-dwl" download="">Скачать прайс-лист</button>
                            <p className="btns__pdf">
                               <span>PDF </span>
                               <span>(pdf, 2.6 мб)</span>
                            </p>
                        </div>
                    </div>
                    <div className="wholesale-supply__arrows">
                        <img src="../images/arrows-min.png"/>
                    </div>
                </div>
                <Popup
                    title={'Заказ звонка'}
                    state={this.state.popup}
                    close={this.closePopupHandler.bind(this)}
                    notification={this.props.isNotification}
                    formClick={this.sendFormHandler.bind(this)}
                />
            </section>
        )
    }
}

export function mapStateToProps(store) {
    return {
        isNotification: store.mainReducer.isAuditNotification
    }
}

export const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({sendOrderFreeAudit, orderFreeAuditSuccess}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(WholesaleSupply);