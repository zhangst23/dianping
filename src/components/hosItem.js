import React, { Component } from 'react';
import logo from '../logo.svg';
import hosDocList from './hosDocList';

import '../App.css'

class hosItem extends from Component {
	render(){
		return (
          <div className="hosItem">
            <a href="#" className="hosDetail">
              <p className="hosName">协和医院</p>
              <span className="yelpCountHos">9.9分</span> &nbsp;
              <span className="yelpTextHos">90% 患者强烈好评这家医院</span>
              <hosDocList />
              <div className="hosDocNum">20名医生</div>
            </a>
          </div>			
		)
	}
}

extends default hosItem;






