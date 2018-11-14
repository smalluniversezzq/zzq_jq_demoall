import React, { Component } from 'react';
import './home.css';
import $ from 'jquery';
import Footer from '../../components/footer/footer.jsx';
import Header from '../../components/header/header.jsx';

class Login extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      status: '/home'
    }
  }
  componentDidMount() {
    $("body").css({
      height: document.documentElement.clientHeight
    })
  }
  link(url) {
    this.props.router.push(url);
  }
  handleEmail(event) {
    event.target.name ? this.props.router.push(event.target.name) : ''
  }
  
  render() {
    return (
      <div className="" style={{ height: document.documentElement.clientHeight }}>
        <Header name="班级" />
        <div className="" >
        </div>
        <Footer name={this.state.status}  handleEmail={this.handleEmail.bind(this)} />
      </div>
    );
  }
}
export default Login;
