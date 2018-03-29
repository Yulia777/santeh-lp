import React, { Component } from 'react';
import {sendOrderCallback, orderCallbakcSuccess} from '../../actions/actions';
import Popup from "../popup/Popup";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class Footer extends Component{
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
            <footer className="footer">
                <div className="container footer__wrap">
                    <div className="footer__copyright">
                        <i className="fa fa-copyright" aria-hidden="true"></i> 2018 год.
                        <a className="footer__copyright--link" href="https://sales-generator.ru"> ООО "Генератор продаж"</a>
                    </div>
                    <div className="footer__contacts">
                        <span className="footer__tel">
                            8 (800) 775 43 06
                        </span>
                        <input className="call-btn" type="button" onClick={this.openPopupHandler.bind(this)} value="Заказать звонок"/>
                    </div>
                </div>
                <Popup
                    title={'Заказ звонка'}
                    state={this.state.popup}
                    close={this.closePopupHandler.bind(this)}
                    notification={this.props.isNotification}
                    formClick={this.sendFormHandler.bind(this)} />
            </footer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);