import React from 'react';
import bg1 from './../../assets/bg1.jpeg';
import bg2 from './../../assets/bg2.jpeg';
import './styles.scss';

const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap">
            <div
            className="item"
                style={{
                    backgroundImage: `url(${bg1})`
                }}
            >
                <a>
                    Shop Womens
                </a>
            </div>
            <div
                className="item"
                style={{
                    backgroundImage: `url(${bg2})`
                }}
            >
                <a>Shop Mens</a>
            </div>
            </div>

        </div>
    );
};
export default Directory;