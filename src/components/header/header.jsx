import React, { Component } from 'react';
import WholesaleSupply from './wholesale-supply/wholesale-supply';
import Popup from "../popup/Popup";
import {sendOrderCallback, orderCallbakcSuccess} from '../../actions/actions';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';


class Header extends Component{
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
        this.props.orderCallbakcSuccess(false);
    }

    sendFormHandler(event) {
        event.preventDefault();
        const formData = {
            type: 'order-callback',
            name: event.target.name.value,
            phone: event.target.phone.value
        };
        event.target.name.value = '';
        event.target.phone.value = '';
        this.props.sendOrderCallback(formData);
    }

    render() {
        return(
            <header className="header">
                <div className="header__background">
                    <div className="container header__wrap">
                        <div className="header__logo">
                            <img className="header__logo--img" src="./images/logo-min.png" alt="Логотип Сантехстандарт" title="Логотип Сантехстандарт"/>
                        </div>
                        <div className="header__contacts">
                            <span className="header__tel">
                                8 (812) 777 05 80
                            </span>
                            <input className="call-btn" type="button" onClick={this.openPopupHandler.bind(this)} value="Заказать звонок"/>
                        </div>
                    </div>
                </div>
                <Popup
                    title={'Заказ звонка'}
                    state={this.state.popup}
                    close={this.closePopupHandler.bind(this)}
                    notification={this.props.isNotification}
                    formClick={this.sendFormHandler.bind(this)} />
                <WholesaleSupply/>
            </header>
        )
    }
}

export function mapStateToProps(store) {
    return {
        isNotification: store.mainReducer.isCallBackNotification
    }
}

export const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({sendOrderCallback, orderCallbakcSuccess}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);