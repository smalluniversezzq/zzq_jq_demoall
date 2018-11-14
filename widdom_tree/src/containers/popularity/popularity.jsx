import React, { Component } from 'react';
import './popularity.css';
import $ from 'jquery';
import Footer from '../../components/footer/footer.jsx';
import Header from '../../components/header/header.jsx';

class Popular extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      status: '/popularity'
    }
  }
  //Grow up
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
        <Header name="发现"/>
        <div className="">
          
        </div>
        <Footer name={this.state.status} handleEmail={this.handleEmail.bind(this)}/>
      </div>
    );
  }
}
export default Popular;
