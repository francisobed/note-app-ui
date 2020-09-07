import React, { Component } from 'react'
import '../style.scss';

import Input from 'components/Input'
import Button from 'components/Button/'
import googleSvg from 'assets/google.svg'
import Forgot_Password from 'assets/forgot_password.svg'
import notepad from 'assets/notepad.svg'
import { Link } from 'react-router-dom';

export default class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
      
    
    render() {
        return (
        <div className="authWrapper">
            <div className="auth">
                <div className="auth__form">
                    <h3 className="auth__form__brand"><span><img src={notepad} width="30" height="24" alt="Google svg" /> </span> O-notes</h3>
                    <h1 className="auth__form__greeting">Forgot Password?</h1>
                    <small>Enter the email address you used when you joined and we’ll send you instructions to reset your password.</small><br />
            
                    <form><br />
                     <Input type="email" label="Email Address"/><br/>
                    </form>

                    <Button text="Send Reset Instruction" type='primary' size="long"/>
                    <hr/>
                    <small>Not Registered? <span> <Link to="/auth/register">Sign Up Now</Link> </span> </small>
                </div>
                                
                <div className="auth__illustration">
                     <img src={Forgot_Password} alt="user auth" width="280" height="300"/>
                </div>
            </div>
        </div> 
        )
    }
}
