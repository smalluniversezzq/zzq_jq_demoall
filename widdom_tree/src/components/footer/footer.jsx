import React, { Component } from 'react';
import './footer.css';
import $ from 'jquery';

import showclass from './image/showclass.jpg';
import hideclass from './image/hideclass.jpg';

import showdiscovery from './image/showdiscovery.jpg';
import hidediscovery from './image/hidediscovery.jpg';

import showgrowup from './image/showgrowup.jpg';
import hidesgrowup from './image/hidegrowup.jpg';

import shownews from './image/shownews.jpg';
import hidenews from './image/hidenews.jpg';

import showpersonal from './image/showpersonal.jpg';
import hidepersonal from './image/hidepersonal.jpg';

class Footer extends Component {
    constructor(props, context) {
        super(props, context)
        // this.state = {
        //     status: ''
        // }
    }
    componentDidMount() {
        const { name } = this.props
            if (name === "/home") {
            $('.tab_home_i').attr("src", showclass);
            $('.tab_home_a').css("color", "#28d18e")
        } else if (name === "/growup") {
            $('.tab_growup_i').attr("src", showdiscovery);
            $('.tab_growup_a').css("color", "#28d18e")
        } else if (name === "/popularity") {
            $('.tab_popularity_i').attr("src", showgrowup);
            $('.tab_popularity_a').css("color", "#28d18e")
        } else if (name === "/news") {
            $('.tab_news_i').attr("src", shownews);
            $('.tab_news_a').css("color", "#28d18e")
        } else if (name === "/personal") {
            $('.tab_personal_i').attr("src", showpersonal);
            $('.tab_personal_a').css("color", "#28d18e")
        }
    }
    render() {
        return (
            <div className="footer">
                <ul className="dis_flex">
                    <li className="foot_childer" onClick={this.props.handleEmail} >
                        <img name="/home" className="imaleas tab_home_i" src={hideclass} alt="" />
                        <a name="/home" className="imatext tab_home_a">班级</a>
                    </li>
                    <li className="foot_childer" onClick={this.props.handleEmail} >
                        <img name="/growup" className="imaleas tab_growup_i" src={hidediscovery} alt="" />
                        <a name="/growup" className="imatext tab_growup_a">成长</a>
                    </li>
                    <li className="foot_childer" onClick={this.props.handleEmail}  >
                        <img name="/popularity" className="imaleas tab_popularity_i" src={hidesgrowup} alt="" />
                        <a name="/popularity" className="imatext tab_popularity_a">发现</a>
                    </li>
                    <li className="foot_childer" onClick={this.props.handleEmail} >
                        <img name="/news" className="imaleas tab_news_i" src={hidenews} alt="" />
                        <a name="/news" className="imatext tab_news_a">消息</a>
                    </li>
                    <li className="foot_childer" onClick={this.props.handleEmail} >
                        <img name="/personal" className="imaleas tab_personal_i" src={hidepersonal} alt="" />
                        <a name="/personal" className="imatext tab_personal_a">&nbsp;&nbsp;我</a>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Footer;