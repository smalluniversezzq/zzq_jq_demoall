import React, { Component } from 'react';
import './login.css';
import held from './image/held.jpg';
import wxlogo from './image/wxlogo.jpg';

class Login extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        }
    }
    componentDidMount() {

    }
    handle(){
        this.props.router.push('/register');
    }
    render() {
        return (
            <div className="Login">
                <div>
                    <img className="imgheld" src={held} alt="" />
                </div>
                <div className="loginconcainer">
                    <div className="login_content">
                        <div className="login_phone_number">
                            <i className="login_phone_number_logo"></i>
                            <input className="login_phone_number_logo_int" type="text" />
                        </div>
                        <div className="login_phone_number position_re">
                            <i className="login_phone_mima_logo"></i>
                            <input className="login_phone_number_logo_int " type="password" />
                            <i className="logo_int_pwd position_ab"></i>
                        </div>
                        <div className="login_text">
                            <p>忘记密码</p>
                        </div>
                        <div className="denglu">
                            <div onClick={this.handle.bind(this,'/register')} className="login_sign">
                                登录
                            </div>
                        </div>
                        <div className="logcontact">
                            <span>联系客服</span>
                            <span>手机注册</span>
                        </div>
                    </div>
                </div>
                <div className="login_foot">
                    <div className="wexin_container">
                        <p>微信登录</p>
                        <img className="wenxin_logo" src={wxlogo} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;
