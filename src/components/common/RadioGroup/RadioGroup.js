///////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import createReactClass from 'create-react-class';
import classnames from 'classnames';
import styles from './styles.css';

///////////////////////////////////////////////////////////////////////////////////////////////////
const RadioItem = createReactClass({
    render() {
        const { name, text } = this.props;
        return <label className={styles.labelItem}>
            <input
                className={styles.radio}
                type='radio'
                name={name}/>
            <span className={styles.text}>
                {text}
            </span>
        </label>
    }
});

///////////////////////////////////////////////////////////////////////////////////////////////////
const RadioGroup = createReactClass({
    render() {
        return <div className={styles.container}>
            <RadioItem name='group' text='Label1'/>
            <RadioItem name='group' text='Label'/>
            <RadioItem name='group' text='Label'/>
            <RadioItem name='group' text='Label'/>
        </div>
    }
});

///////////////////////////////////////////////////////////////////////////////////////////////////
export default RadioGroup;

///////////////////////////////////////////////////////////////////////////////////////////////////