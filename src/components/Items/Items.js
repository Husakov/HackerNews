import React, { Component } from 'react';
import './ItemCard.css';



class Items extends Component {
    render() {
        return (
            <div className='items'>
                <div className='itemCard'>
                    <div className='fields'>
                        <ul>
                            <li><div>points</div></li>
                            <li className="cardItem border"><div>comments</div></li>
                            <li className="cardItem border"><div>points</div></li>
                            <li className="cardItem border"><div>points</div></li>
                            <li className="cardItem border"><div><a>read more</a></div></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Items;
