import React, { component } from 'react', 

import '../App.css';

class App-header extends Component {
    render:function(){
      return (
	        <div className="App-header">
	          <img src={logo} className="App-logo" alt="logo" />
	          <div className="search">
	            <input type="text" className="Search-doctor" placeholder="医生"/>
	            <input type="text" className="Search-hospital" placeholder="医院"/>
	            <button className="Search-button">搜索</button>
	          </div>
	        </div>
		)
	}
}）

export default App-header;

