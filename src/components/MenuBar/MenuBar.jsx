import React from 'react';
import './MenuBar.css';
import AYON_TYPE_WTE from '../../assets/AYON_TYPE_WHTE.svg';

const MenuBar = () => {
    return (
        <span className='menu-bar-parent'>
            <div className="menu-bar">
                <img src={AYON_TYPE_WTE} alt='AYON_TYPE_WTE' />
            </div>
            <span className='menu-bar-spandrel'></span>
        </span>
    );
};

export default MenuBar;