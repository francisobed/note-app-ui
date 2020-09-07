import React, { Component } from 'react'
import '../style.scss'
import Input from 'components/Input'
import Button from 'components/Button'
import googleSvg from 'assets/google.svg'
import registerSvg from 'assets/register.svg'
import notepad from 'assets/notepad.svg'
import { Link } from 'react-router-dom';

export default class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const logo = <img src={googleSvg} width="22" height="14" alt=" Google svg" /> 
        return (
        <div className="authWrapper">
            <div className="auth">
                <div className="auth__form">
                    <h3 className="auth__form__brand"><span><img src={notepad} width="30" height="24" alt="Google svg" /> </span> O-notes</h3>
                    <h1 className="auth__form__greeting">Register</h1>
                    <Button logo={logo} text="Sign Up With Google" size='long'/>
                    <p className='auth__form__or'>or</p>
                    <form>
                     <Input type="email" label="Email address"/>
                     <Input type="password" label="Password"/>
                     <Input type="password" label="Confirm password"/>
                    </form>
                    <br/>
                    <Button text="Sign Up" type='primary' size="long"/>
                    <hr/>
                    <small>Do you have an account? <span> <Link to="/auth/login">Sign In</Link></span> </small>
                </div>
                <div className="auth__illustration">
                 <img src={registerSvg} alt="user auth" width="280" height="300"/> 
                </div>
            </div>
        </div>  
        )
    }
}
