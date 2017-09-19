///////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import createReactClass from 'create-react-class';
import classnames from 'classnames';
import styles from './styles.css';

///////////////////////////////////////////////////////////////////////////////////////////////////
const Checkbox = createReactClass({
    getInitialState(){
        return {
            checked: false
        }
    },
    toogleCheck() {
        this.setState({
            checked: !this.state.checked
        });
    },
    render() {
        const { label } = this.props;
        const {checked} = this.state;
        return <div className={styles.container}>
            <label className={classnames(styles.label, {[styles.labelChecked]: checked})}>
                <input
                    onChange={this.toogleCheck}
                    type="checkbox"
                    className={styles.checkbox} />
                <span className={styles.labelText}>
                    {label}
                </span>
            </label>
        </div>
    }
})

///////////////////////////////////////////////////////////////////////////////////////////////////
export default Checkbox;

///////////////////////////////////////////////////////////////////////////////////////////////////