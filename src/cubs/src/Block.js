import React, {Component} from 'react';
import './App.css';

class Block extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  
		};
		this.changeTo = this.changeTo.bind(this);
		this.getClassName = this.getClassName.bind(this);
	}
  
  changeTo() {
    this.props.handleChange(this.props.number);
  };
  
  getClassName() {
    return 'box ' + this.props.color;
  }
  
  render() {
    return (
      <div onClick={this.changeTo} className={this.getClassName()} ></div>
    );
  }
}

export default Block;
