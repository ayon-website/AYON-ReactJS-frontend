import React, { useState } from 'react';
import './MainLayout.css';
import MenuBar from 'components/MenuBar/MenuBar';
import SideTab from 'components/SideTab/SideTab';
import StarDeco from 'components/StarDeco/StarDeco';
import DatabaseNav from 'views/DatabaseNav/DatabaseNav';
import { ButtonContext } from 'components/SideTab/ButtonContext';

const MainLayout = () => {
    const [state, setState] = useState({
        channelsNear: false,
        top5Providers: false,
        top5ProviderCoverage: false,
        top5LaunchingRockets: false,
        top5GrowingSatellites: false,
        top5ChannelsInLanguage: false,
    });

    return (
        <div className="main-layout">
            <ButtonContext.Provider value={[state, setState]}>
                <StarDeco />
                <MenuBar />
                <SideTab />
                <DatabaseNav />
            </ButtonContext.Provider>
        </div>
    );
};

export default MainLayout;
