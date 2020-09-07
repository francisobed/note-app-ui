import React from 'react'
import PropTypes from 'prop-types';
import './style.scss'

export default function Input(props) {
    return (
        <>
            <label className="label">{props.label}
                <input className="input" style={props.type !== 'checkbox' ? {width: '100%'} : null } type={props.type}/>
            </label><br />
        </>
    )
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};
