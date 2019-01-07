import React, { Component } from 'react';
import './TopMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SubMenu from './SubMenu'

class TopMenu extends Component {
  render() {
    return (
      <div className='header'>
        <ul>
          <li className='title'>Hacker News</li>
            <li className='rightItems'><FontAwesomeIcon icon="user" /></li>
            <li className='rightItems' href="#"><FontAwesomeIcon icon="search" /></li>
        </ul>
      </div>
    );
  }
}

export default TopMenu;
