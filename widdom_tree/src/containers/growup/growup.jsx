import React, { Component } from 'react';
import './growup.css';
import $ from 'jquery';
import Footer from '../../components/footer/footer.jsx';
import Header from '../../components/header/header.jsx';
import growupleft from './image/growup_left.png';
import growupright from './image/growup_right.png';
import camera from './image/camera.png';
import ltimg from './image/growup_ltimg.png';

class Growup extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      status: '/growup'
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
      <div className="growup_container" style={{ height: document.documentElement.clientHeight }}>
        {/* <Header name="成长" /> */}
        <div className="growup_cover pos_r">
          <div className="pos_a growup_cover_box" >
            <div className="growup_title">
              <span>白小飞</span>
              <span className="ktvip">开通会员</span>
            </div>
            <ul className="dis_flex growup_shuju">
              <li>7岁0月0天</li>
              <li>身高</li>
              <li>体重</li>
            </ul>
          </div>
        </div>
        <div className="growuo_commou  ">
          <div className="growuo_commou_box ">
            <ul className="dis_flex growup_nav">
              <li>
                <p>0</p>
                <p>日记</p>
              </li>
              <li>
                <p>0</p>
                <p>相册</p>
              </li>
              <li>
                <p>0</p>
                <p>亲子任务</p>
              </li>
              <li>
                <p>1</p>
                <p>家人</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="growup_photo">
          <div className="growup_photo_box dis_flex">
            <div className="growup_photo_child dis_flex">
              <div className="growup_left">
                <img src={growupleft} alt="" />
              </div>
              <div className="growup_right">
                <img src={growupright} alt="" />
              </div>
            </div>
            <div className="growup_camera pos_r">
              <input className="int_file pos_a" type="file" name="" id="" />
              <img src={camera} alt="" className="pos_a" />
              <p>上传图片</p>
            </div>
          </div>
        </div>
        <div className="growup_task">
          <div className="growup_task_box">
            <div className="growup_em dis_flex ">
              <i className="growup_log"></i>
              <p className="growup_em_title">亲子任务</p>
            </div>
            <div className="growup_cont dis_flex">
              <div className="growup_ltimg">
                <img src={ltimg} alt="" />
              </div>
              <div className="growup_news ">
                <div className="growup_news_title">
                  喝水的好习惯
                  </div>
                <div className="growup_news_content">
                  亲爱的爸爸妈妈,为了。。。
                  </div>
              </div>
              <div className="growup_btn pos_r">
                <div className="btn pos_a">领取</div>
              </div>
            </div>
          </div>
          <div className="growup_task_foot">
            查看更多
          </div>
        </div>
        <Footer name={this.state.status} handleEmail={this.handleEmail.bind(this)} />
      </div>
    );
  }
}
export default Growup;
