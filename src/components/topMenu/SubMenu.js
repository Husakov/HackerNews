import React, { Component } from 'react';
import './TopMenu.css';
import './SubMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class SubMenu extends Component {
    render() {
        return (
            <div className='subheader'>
                <ul className='menu'>
                    <li className='menuItem'><a>News</a></li>
                    <li className='menuItem'><a>Show</a></li>
                    <li className='menuItem'><a>Show</a></li>
                    <li className='menuItem'><a>Show</a></li>
                    <li className='menuItem'><a>Show</a></li>
                    <li className='menuItem rightItems'><a>Today</a></li>
                    <li className='menuItem rightItems'><a>Yesterday</a></li>
                </ul>
            </div>
        );
    }
}

export default SubMenu;
