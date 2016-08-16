import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="search">
            <input type="text" className="Search-doctor" placeholder="医生"/>
            <input type="text" className="Search-hospital" placeholder="医院"/>
            <button className="Search-button">搜索</button>
          </div>
        </div>

        <div className="App-intro">
          <div className="Intro-head">
            <div className="Intro-result"> <b>10</b> 个结果</div>
            <div className="Intro-doctor-hospital">
              <button className="Intro-doctor">医生</button>
              <button className="Intro-hospital">医院</button>
            </div>
          </div>

          <div className="doctorList">
            <a className="doctorItem" href="#">
              <img src={logo} className="App-logo" alt="logo" />
              <p className="docName">王医生</p>
              <p className="hosName">协和医院</p>
              <span className="yelpCount">9.9分</span> &nbsp;
              <span className="yelpText">90% 推荐这位医生</span>
            </a>
            <a className="doctorItem" href="#">
              <img src={logo} className="App-logo" alt="logo" />
              <p className="docName">王医生</p>
              <p className="hosName">协和医院</p>
              <span className="yelpCount">9.9分</span> &nbsp;
              <span className="yelpText">90% 推荐这位医生</span>
            </a>
            <a className="doctorItem" href="#">
              <img src={logo} className="App-logo" alt="logo" />
              <p className="docName">王医生</p>
              <p className="hosName">协和医院</p>
              <span className="yelpCount">9.9分</span> &nbsp;
              <span className="yelpText">90% 推荐这位医生</span>
            </a>
            <a className="doctorItem" href="#">
              <img src={logo} className="App-logo" alt="logo" />
              <p className="docName">王医生</p>
              <p className="hosName">协和医院</p>
              <span className="yelpCount">9.9分</span> &nbsp;
              <span className="yelpText">90% 推荐这位医生</span>
            </a>
            <a className="doctorItem" href="#">
              <img src={logo} className="App-logo" alt="logo" />
              <p className="docName">王医生</p>
              <p className="hosName">协和医院</p>
              <span className="yelpCount">9.9分</span> &nbsp;
              <span className="yelpText">90% 推荐这位医生</span>
            </a>   
            <a className="doctorItem" href="#">
              <img src={logo} className="App-logo" alt="logo" />
              <p className="docName">王医生</p>
              <p className="hosName">协和医院</p>
              <span className="yelpCount">9.9分</span> &nbsp;
              <span className="yelpText">90% 推荐这位医生</span>
            </a>
            <a className="doctorItem" href="#">
              <img src={logo} className="App-logo" alt="logo" />
              <p className="docName">王医生</p>
              <p className="hosName">协和医院</p>
              <span className="yelpCount">9.9分</span> &nbsp;
              <span className="yelpText">90% 推荐这位医生</span>
            </a>
            <a className="doctorItem" href="#">
              <img src={logo} className="App-logo" alt="logo" />
              <p className="docName">王医生</p>
              <p className="hosName">协和医院</p>
              <span className="yelpCount">9.9分</span> &nbsp;
              <span className="yelpText">90% 推荐这位医生</span>
            </a>
            <a className="doctorItem" href="#">
              <img src={logo} className="App-logo" alt="logo" />
              <p className="docName">王医生</p>
              <p className="hosName">协和医院</p>
              <span className="yelpCount">9.9分</span> &nbsp;
              <span className="yelpText">90% 推荐这位医生</span>
            </a>
            <a className="doctorItem" href="#">
              <img src={logo} className="App-logo" alt="logo" />
              <p className="docName">王医生</p>
              <p className="hosName">协和医院</p>
              <span className="yelpCount">9.9分</span> &nbsp;
              <span className="yelpText">90% 推荐这位医生</span>
            </a>    
          </div>


        </div>
      </div>
    );
  }
}

export default App;




























