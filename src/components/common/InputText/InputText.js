///////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import classnames from 'classnames';
import styles from './styles.css';

///////////////////////////////////////////////////////////////////////////////////////////////////
function InputText(props) {
    const { icon = true} = props;
    return <div className={classnames(styles.inputContainer, {[styles.iconInput]: icon})}>
        {icon && <i className={classnames('fa fa-envelope-open-o',
            styles.icon)} />}
        <input
            className={classnames(styles.input, {[styles.success]: false})}
            type='text'
            placeholder='Text' />
        <i  className={classnames('fa fa-times', styles.red, styles.iconResult)} />
    </div>
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default InputText;
///////////////////////////////////////////////////////////////////////////////////////////////////