import React from 'react';
import {ReactComponent as AYON} from 'assets/AYON_LOGO_DRK.svg';
import './LoadingScreen.css';

const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <AYON className='loading-screen-logo'/>
        </div>
    );
};

export default LoadingScreen;
