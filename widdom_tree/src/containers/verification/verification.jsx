import React, { Component } from 'react';
import './verification.css';
// import Head from '../../components/head/header.jsx';
import $ from 'jquery';

class Verification extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        }
    }
    componentDidMount() {
        $("body").css({
            height: document.documentElement.clientHeight
        })
    }
    render() {
        return (
            <div className="verification bg_body" style={{ height: document.documentElement.clientHeight }}>
                <div className="container dis_flex">
                    <i className="retreat"></i>
                    <span className="">
                        返回
                    </span>
                    <span className="">
                        关闭
                    </span>
                    <span className="title_three">
                        在线咨询-智慧树幼教云平台
                    </span>
                </div>
                <div className="vertitle">
                    <span>
                        讯前表单
                   </span>
                </div>
                <div className="vericonteiner" >
                    <div className="verxqbd">
                        <p>讯前表单</p>
                        <p>身份(请问您是院长、教师或家长)</p>
                    </div>
                    <div className="ver_input">
                        <input type="text"  placeholder="请输入"/>
                    </div>
                    <div className="verxqbd_number">
                        <p>请问您登录账号(手机号)是多少</p>
                    </div>
                    <div className="ver_input">
                        <input type="text"  placeholder="请输入"/>
                    </div>
                    <div className="ver_btn">
                        提交
                    </div>
                </div>
            </div>
        );
    }
}

export default Verification;
