import React, { Component } from 'react';
import './personal.css';
import $ from 'jquery';
import Footer from '../../components/footer/footer.jsx';
import Header from '../../components/header/header.jsx';
// 头像
import txlogo from './image/touxianglogo.jpg';

class Personal extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      status: '/personal'
    }
  }
  componentDidMount() {
    $("body").css({
      height: document.documentElement.clientHeight
    })
  }
  handleEmail(event) {
    event.target.name ? this.props.router.push(event.target.name) : ''
  }
  render() {
    return (
      <div className="personl pos_r">
        <div className="per_container">
          <div className="per_cont_info dis_flex dis_r">
          {/* 头像 */}
            <div className="cont_port">
                <img src={txlogo} alt=""/>
            </div>
            <div className="user_info"> 
                <p className="user_name"> 白小飞</p>
                <p className="user_aotu">暂无签名~</p>
            </div>
            <div className="">
                 <i className="pos_a per_container_logo"></i>
            </div>
          </div>
        </div>
        <div className="per_ruyuan">
          <div className="per_ruyuan_box dis_flex dis_r">
            <i className="per_left_logo_1 logo" ></i>
            <p>宝宝入园</p>
            <i className="pos_a per_right_logo"></i>
          </div>
        </div>
        {/* vip */}
        <div className="pre_vip">
          <div className="per_ruyuan_box dis_flex dis_r per_list_bottom">
            <i className="per_left_logo_2 logo"></i>
            <p>会员中心</p>
            <i className="pos_a per_right_logo"></i>
          </div>
          <div className="per_ruyuan_box dis_flex dis_r per_list_bottom">
            <i className="per_left_logo_3 logo"></i>
            <p>我的小红花</p>
            <i className="pos_a per_right_logo"></i>
          </div>
          <div className="per_ruyuan_box dis_flex dis_r per_list_bottom">
            <i className="per_left_logo_4 logo"></i>
            <p>我的排行</p>
            <i className="pos_a per_right_logo"></i>
          </div>
        </div>
        {/* 我的圈子 */}
        <div className="pre_quanzi">
          <div className="per_ruyuan_box dis_flex dis_r per_list_bottom">
            <i className="per_left_logo_5 logo"></i>
            <p>我的圈子</p>
            <i className="pos_a per_right_logo"></i>
          </div>
          <div className="per_ruyuan_box dis_flex dis_r per_list_bottom">
            <i className="per_left_logo_6 logo"></i>
            <p>我的关注</p>
            <i className="pos_a per_right_logo"></i>
          </div>
          <div className="per_ruyuan_box dis_flex dis_r per_list_bottom">
            <i className="per_left_logo_7 logo"></i>
            <p>我的动态</p>
            <i className="pos_a per_right_logo"></i>
          </div>
          <div className="per_ruyuan_box dis_flex dis_r per_list_bottom">
            <i className="per_left_logo_8 logo"></i>
            <p>我的收藏</p>
            <i className="pos_a per_right_logo"></i>
          </div>
          <div className="per_ruyuan_box dis_flex dis_r per_list_bottom">
            <i className="per_left_logo_9 logo"></i>
            <p>我的评论</p>
            <i className="pos_a per_right_logo"></i>
          </div>
        </div>
          {/* 智能硬件 */}
          <div className="pre_yingjian">
          <div className="per_ruyuan_box dis_flex dis_r per_list_bottom">
            <i className="per_left_logo_10 logo"></i>
            <p>智能硬件</p>
            <i className="pos_a per_right_logo"></i>
          </div>
          <div className="per_ruyuan_box dis_flex dis_r per_list_bottom">
            <i className="per_left_logo_11 logo"></i>
            <p>我的保险</p>
            <i className="pos_a per_right_logo"></i>
          </div>
        </div>
        {/* 我的账户 */}
        <div className="pre_yingjian">
          <div className="per_ruyuan_box dis_flex dis_r per_list_bottom">
            <i className="per_left_logo_12 logo"></i>
            <p>我的账户</p>
            <i className="pos_a per_right_logo"></i>
          </div>
          <div className="per_ruyuan_box dis_flex dis_r per_list_bottom">
            <i className="per_left_logo_13 logo"></i>
            <p>我的订单</p>
            <i className="pos_a per_right_logo"></i>
          </div>
        </div>
        {/* 设置 */}
        <div className="pre_vip">
          <div className="per_ruyuan_box dis_flex dis_r per_list_bottom">
            <i className="per_left_logo_14 logo"></i>
            <p>客服热线</p>
            <i className="pos_a per_right_logo"></i>
          </div>
          <div className="per_ruyuan_box dis_flex dis_r per_list_bottom">
            <i className="per_left_logo_15 logo" ></i>
            <p>使用帮助</p>
            <i className="pos_a per_right_logo"></i>
          </div>
          <div className="per_ruyuan_box dis_flex dis_r per_list_bottom">
            <i className="per_left_logo_16 logo"></i>
            <p>设置</p>
            <i className="pos_a per_right_logo"></i>
          </div>
        </div>
        <div className="zhuaiwei"></div>
        <Footer name={this.state.status} handleEmail={this.handleEmail.bind(this)} />
      </div>
    );
  }
}
export default Personal;
