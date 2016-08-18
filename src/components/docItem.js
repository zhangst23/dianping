import React, { Component } from 'react';
import logo from '../logo.svg';

import '../App.css';

class docItem extends Component {
	render(){
		return (
          <div className="docItem">
            <a href="#" className="docDetail">
              <img src={logo} className="AppLogo" alt="logo" />
              <p className="docName">王医生</p>
              <p className="hosName">协和医院</p>
              <span className="yelpCount">9.9分</span> &nbsp;
              <span className="yelpText">90% 推荐这位医生</span>
            </a>
          </div>
		)
	}
}

export default docItem;
