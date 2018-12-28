import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

import Footer from './components/otherComponents/Footer';
import LogBar from './components/titleComponents/LogBar';
import Title from './components/titleComponents/Title';

import ig from './assets/ig-icon2.png';
import fb from './assets/fb-icon.png';
import menuButton from './assets/menu.svg';
import Blog from './components/containers/Blog';


class App extends Component {

  state = {
    showDropDownMenu: false,
    windowInnerWidth: null,
    userLoggedIn: false
  };

  componentWillMount(){
    this.updateWindowInnerWidthProp();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowInnerWidthProp)
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.updateWindowInnerWidthProp)
  }

  updateWindowInnerWidthProp = () => {
    this.setState({
      windowInnerWidth: window.innerWidth
    })
  }

  dropDownButtonHandler = () => {
    this.setState((prevState)=>{
      return {
        showDropDownMenu: !prevState.showDropDownMenu
      }
    })
  };

  render() {
    return ( <>
    <div className = "App">
      <LogBar
      userLoggedIn = {this.state.userLoggedIn}
      />
      <Title />
      <Router>
        <>
          <div>
            <button className="DropDownMenuButton" onClick={this.dropDownButtonHandler}><img src={menuButton} alt="Menu Button"/></button>
          </div>
          <div className='NavigationBar'>
            {(this.state.showDropDownMenu || this.state.windowInnerWidth > 550) ? (<>
            <ul>
              <li><NavLink to="/">BLOG</NavLink></li>
              <li><NavLink to="/addPost">NEW</NavLink></li>
              <li><NavLink to="/about">ABOUT</NavLink></li>
              <li><NavLink to="/contact">CONTACT</NavLink></li>
            </ul>
            <ul>
              <li><a href='http:www.facebook.com'><img src={fb} className="icon" alt="FB Button"/></a></li>
              <li><a href="http:www.instagram.com"><img src={ig} className="icon" alt="IG Button"/></a></li>
            </ul>
            </>) : (null)
            }
          </div>
        <Blog />
        </>
      </Router>
      <hr />
      <Footer/>
    </div>
      </>
    );
  }
}

App.propTypes = {
  userLoggedIn: PropTypes.bool
}

export default App;