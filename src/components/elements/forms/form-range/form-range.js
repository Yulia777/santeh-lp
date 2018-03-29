import React from 'react';
import MaskedInput from 'react-maskedinput';

const FormRange = (props) => {
    return(
        <div className="form-range__wrap">
            <form className="form-range" onSubmit={props.send}>
                <input className="form-range__field" type="text" placeholder="Имя" name="name"/>
                <MaskedInput  mask="+7(111) 111 11 11" type="text" size={''} name="phone" required="true" className="form-range__field"/>
                <input className="btn" type="submit" value="Оставить заявку"/>
            </form>
        </div>
    )
};

export default FormRange;