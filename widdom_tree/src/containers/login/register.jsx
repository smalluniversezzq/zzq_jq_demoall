import React, { Component } from 'react';
import './register.css';
import Head from '../../components/head/header.jsx';

class Register extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        }
    }
    componentDidMount() {
    }
    handle(){
        this.props.router.push('/verification');
    }
    render() {
        return (
            <div className="Register">
                <Head />
                <div className="register_cantainer">
                    <div className="reg_up">
                        <p className="reg_tit">请输入手机号码</p>
                        <div className="dis_flex reg_dis position_re">
                            <i className="reg_app_log position_ab"></i>
                            <input className="reg_int" type="text" placeholder="手机号"/>
                        </div>
                        <p className="reg_careful">注册代表您同意 <a href="#">智慧树用户服务条款</a></p>
                    </div>
                    <div className="middle">
                        <div onClick={this.handle.bind(this,'/verification')} className="reg_btn">立即验证</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
