///////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import classnames from 'classnames';
import styles from './styles.css';

///////////////////////////////////////////////////////////////////////////////////////////////////
function buttonColor(color) {
    let colorBtn = {};
    console.log(color);
    switch(color) {
        case 'green':
            colorBtn = styles.green;
            break;
        case 'blue':
            colorBtn = styles.blue;
            break;
        case 'violet':
            colorBtn = styles.violet;
            break;
        case 'black':
            colorBtn = styles.black;
            break;
        case 'orange':
            colorBtn = styles.orange;
            break;
        case 'red':
            colorBtn = styles.red;
            break;
        default:
            colorBtn = styles.green;
            break;
    }
    return colorBtn;
}

///////////////////////////////////////////////////////////////////////////////////////////////////
function Button(props) {
    const { children, color, onClick } = props;
    const colotButton = buttonColor(color);
    return <button
        onClick={onClick}
        className={classnames(styles.button, colotButton)}>
        {children}
    </button>;
}

///////////////////////////////////////////////////////////////////////////////////////////////////
export default Button;

///////////////////////////////////////////////////////////////////////////////////////////////////