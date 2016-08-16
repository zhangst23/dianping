import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class AppHeader extends Component {
    render(){
      return (
	        <div className="AppHeader">
	          <img src={logo} className="AppLogo" alt="logo" />
	          <div className="search">
	            <input type="text" className="Search-doctor" placeholder="医生"/>
	            <input type="text" className="Search-hospital" placeholder="医院"/>
	            <button className="Search-button">搜索</button>
	          </div>
	        </div>
		)
	}
}

export default AppHeader;

