import React, { Component } from 'react';
import './news.css';
import $ from 'jquery';
import Footer from '../../components/footer/footer.jsx';
import Header from '../../components/header/header.jsx';

class News extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      status: '/news'
    }
  }
  componentDidMount() {
    $("body").css({
      height: document.documentElement.clientHeight
    })
  }
  handleEmail(event) {
    event.target.name?this.props.router.push(event.target.name) :''
  }
  render() {
    return (
      <div className="" style={{ height: document.documentElement.clientHeight }}>
        <Header name="消息"/>
        <div className="">
        </div>
        <Footer name={this.state.status} handleEmail={this.handleEmail.bind(this)}/>
      </div>
    );
  }
}
export default News;
