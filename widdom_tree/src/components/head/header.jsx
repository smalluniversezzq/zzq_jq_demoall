import React, { Component } from 'react';
import './head.css';
class Head extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        }
    }
    //   componentDidMount(){
    //   }
    render() {
        return (
            <div className="head">
                <div className="container">
                        <i className="retreat" > </i>   
                </div>
            </div>
        );
    }
}

export default Head;
