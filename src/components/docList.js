import React, { Component } from 'react';
import docItem from './docItem.js';

import '../App.css';

class RepeatLi extends Component{
	render(){
		return (
			<ol>
				{
					this.props.children.map((child) => {return <li>{child}</li>})
				}
			</ol>
		);
	}
}


class docList extends Component {
	render(){
		return (
				<RepeatLi className="docList">
					<docItem /> 
				</RepeatLi>

		)
	}
}

export default docList;






