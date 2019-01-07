import React, { Component } from 'react';
import './Content.css';
import Items from "../Items/Items";


class Content extends Component {
    render() {
        return (
            <div className='content'>
                <div className='titl'>Latest News of Today</div>
                <Items />
            </div>
        );
    }
}

export default Content;
