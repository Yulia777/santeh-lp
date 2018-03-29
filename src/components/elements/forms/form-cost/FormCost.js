import React from 'react';
import MaskedInput from 'react-maskedinput';

const FormCost = (props) => {
    return(
        <div className="form-cost__wrap">
            <form className="form-cost" onSubmit={props.send}>
                <input className="form-cost__field" type="text" placeholder="Имя" name="name"/>
                <MaskedInput  mask="+7(111) 111 11 11" type="text" size={''} name="phone" required="true" className="form-cost__field"/>
                <input className="btn" type="submit" value="Оставить заявку"/>
            </form>
        </div>
    )
};

export default FormCost;