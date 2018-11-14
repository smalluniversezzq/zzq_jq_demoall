import React, { Component } from 'react';
import './header.css';
class Header extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        }
    }
      componentDidMount(){

      }
    render() {
        const { name } = this.props;
        return (
            <div className="header">
                <div className="headcontainer">
                       {name}
                </div>
            </div>
        );
    }
}

export default Header;
