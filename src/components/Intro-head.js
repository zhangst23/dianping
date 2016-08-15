import React, { component } from 'react';

import '../App.css';

class Intro-head extends Component {
	render(){
		return (
          <div className="Intro-head">
            <div className="Intro-result"> <b>10</b> 个结果</div>
            <div className="Intro-doctor-hospital">
              <button className="Intro-doctor">医生</button>
              <button className="Intro-hospital">医院</button>
            </div>
          </div>
		)
	}
}

export default Intro-head;