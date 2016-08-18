import React, { Component } from 'react';
import logo from '../logo.svg'

import '../App.css';


class hosDetail extends from Component {
	render(){
		return (
			<div className="hosBoard">
				<img src={logo} className="AppLogo" alt="logo" />
				<div className="hosName">协和医院</div>
				<div className="hosProject">
					<div className="#"><Icon>基因检测</Icon></div>
					<div className="#"><Icon>冷冻胚胎</Icon></div>
					<div className="#"><Icon>促排</Icon></div>	
					<div className="#"><Icon>移植</Icon></div>
					<div className="#"><Icon>胚胎报告</Icon></div>
					<div className="#"><Icon>其他</Icon></div>						
				</div>
				<div className="hosAddress">东城区**街道**号</div>
				<div className="hosPhone">010-123456</div>
				<div className="hosWebsite">www.baidu.com</div>
			</div>

			<div className="yelpBoardHos">
			  	<div class="hosYelpBoard">
					<span class="question">问句？</span>
					<div class="yelpCountHos">7分</div>
					<div class="yelpCountHosDetail">
						<span class="yelpCountOne">90% 的患者强烈好评</span>
						<span class="yelpCountOne">7% 的患者好评</span>
						<span class="yelpCountOne">2% 的患者评价一般</span>
					</div>
			 	 </div>
			  	<div class="hosYelpBoard">
					<span class="question">成功率</span>
				</div>
			</div>

			<div className="docList">
				<div className="hosDocScore">9</div>
				<span>医生平均分</span>
				<hosDocList />
			</div>

			<div className="patDianping">
				<div className="comList">
					<comItem>
						<div className="comCount">10分</div>
						<div className="patAge">26</div>
						<div className="patTime">2016</div>
						<div className="patBio">我是评价内容</div>
					</comItem>
				</div>
			</div>			
		)
	}
}
