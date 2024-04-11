import React from 'react';
import AYON_LOGO_DRK from 'assets/AYON_LOGO_DRK.svg';
import AYON_TYPE_DRK from 'assets/AYON_TYPE_WHTE.svg';
import './LoadingScreen.css';

const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <img src={AYON_LOGO_DRK} className='loading-screen-logo'/>
        </div>
    );
};

export default LoadingScreen;
