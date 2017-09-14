///////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import classnames from 'classnames';
import styles from './styles.css';

///////////////////////////////////////////////////////////////////////////////////////////////////
function InputLabel(props) {
    const { text } = props;
    return <div className={classnames(styles.inputContainer)}>
        <label className={styles.label}>
            {
                text && <span className={styles.labelText}>
                    {text}
                </span>
            }
            <input
                className={classnames(styles.input, { [styles.success]: false })}
                type='text'
                placeholder='Text' />
        </label>
        <div className={styles.message}>
            <i className={classnames('fa fa-check-circle', styles.messageIcon)} />
            Positive message
        </div>
    </div>
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default InputLabel;
///////////////////////////////////////////////////////////////////////////////////////////////////