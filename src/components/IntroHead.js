import React, { Component } from 'react';

import '../App.css';

class IntroHead extends Component {
	render(){
		return (
          <div className="IntroHead">
            <div className="Intro-result"> <b>10</b> 个结果</div>
            <div className="Intro-doctor-hospital">
              <button className="Intro-doctor">医生</button>
              <button className="Intro-hospital">医院</button>
            </div>
          </div>
		)
	}
}

export default IntroHead;