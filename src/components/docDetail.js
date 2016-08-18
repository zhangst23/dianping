import React, { Compontent } from 'react';
import logo from '../logo.svg';

import '../App.css';

class docDetail extends Component{
	render(){
		return (
			<div className="docBoard">
				<img src={logo} className="AppLogo" alt="logo" />
				<div className="docName">王医生</div>
				<div className="hosName">协和医院</div>
				<div className="docSns">
					<div className="docPhone">电话咨询</div>
					<div className="docMessage">图文咨询</div>					
				</div>
				<div className="docSchool">南开中学</div>
				<div className="hosPhone">010-123456</div>
				<div className="hosWebsite">www.baidu.com</div>
			</div>

			<div className="yelpBoard">
			  	<div class="docYelpBoard">
					<span class="question">问句？</span>
					<div class="yelpCount">10分</div>
					<div class="yelpCountDetail">
						<span class="yelpCountOne">90% 的患者强烈好评</span>
						<span class="yelpCountOne">7% 的患者好评</span>
						<span class="yelpCountOne">2% 的患者评价一般</span>
					</div>
			 	 </div>
			  	<div class="docYelpBoard">
					<span class="question">医院平均评分</span>
					<div class="yelpCount">9分</div>
					<div class="yelpCountDetail">
						<span class="yelpCountOne">85% 的患者强烈好评</span>
						<span class="yelpCountOne">7% 的患者好评</span>
						<span class="yelpCountOne">2% 的患者评价一般</span>
					</div>
				</div>
				<div className="hosCountWeb">查看医院详情</div>
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


export default docDetail;


























