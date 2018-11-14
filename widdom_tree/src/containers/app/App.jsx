import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';


import appimg from './image/app.jpg';
import appbtn from './image/appbtn.jpg';
class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      email: ''
    }
  }

  componentDidMount() {
    $("body").css({
      height: document.documentElement.clientHeight
    })
    //判断是否登录
  }

  hrefs(url) {
    this.props.router.push(url);
  }
  render() {
    return (
      <div className="App">
        <div className="appcontainer" style={{ height: document.documentElement.clientHeight }}>
          <img className="appimg" src={appimg} alt="" />
          <span className="appbtn" onClick={this.hrefs.bind(this, '/home')}>立即体验</span>
        </div>
      </div>
    );
  }
}
export default App;
