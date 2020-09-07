import React from 'react'
import PropTypes from 'prop-types';
import './style.scss'

const Button = (props) => <button className={`button button--${props.type} button--${props.size}`}>{props.logo} {props.text}</button>

Button.propTypes = {
    text: PropTypes.string.isRequired,
    logo: PropTypes.element
};

Button.defaultProps = {
    text: 'Button'
};

export default Button;
