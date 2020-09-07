import React, { Component } from 'react'
import '../style.scss'
import Input from 'components/Input'
import Button from 'components/Button/'
import googleSvg from 'assets/google.svg'
import loginSvg from 'assets/login2.svg'
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
                    <h1 className="auth__form__greeting">Welcome Back</h1>
                    <Button logo={logo} text="Login with Google" size='long'/>
                    <p className='auth__form__or'>or</p>
                    <form>
                     <Input type="email" label="email address"/>
                     <Input type="password" label="password"/><br/>
                    </form>
                    <div className='auth__questions'>
                        <span className='auth__questions__remember'>
                            <Input type="checkbox" label=''/>
                            <span>Keep me logged in</span>
                        </span>
                        
                        <span> <Link to="/auth/forgotpassword">Forgot password?</Link> </span>
                    </div>
                    <Button text="Log in" type='primary' size="long"/>
                    <hr/>
                    <small>Don't have an account? <span> <Link to="/auth/register">Sign Up</Link> </span> </small>

                </div>                
                <div className="auth__illustration">
                     <img src={loginSvg} alt="user auth" width="280" height="300"/>
                </div>
            </div>
        </div> 
        )
    }
}
