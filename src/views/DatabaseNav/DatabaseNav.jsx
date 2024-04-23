import { ButtonContext } from 'components/SideTab/ButtonContext';
import Table from 'components/Table/Table';
import React, { useContext, useEffect, useState } from 'react';
import './DatabaseNav.css';
import { getFilteredChannels, getNearestToLocation, getTop5Language, getTop5 } from 'services/ayonNodeJS';


const filteredChannelsData = await getFilteredChannels("", "", "", "");
const dataChannelsNear = await getNearestToLocation(50, 0, 5);
const top5Providers = await getTop5("top5Providers");
const top5ProviderCoverage = await getTop5("top5ProviderCoverage");
const top5LaunchingRockets = await getTop5("top5LaunchingRockets");
const top5GrowingSatellites = await getTop5("top5GrowingSatellites");
const top5ChannelsInLanguage = await getTop5Language("Eng");
let data = filteredChannelsData;

const DatabaseNav = () => {

    const [state, setState] = useContext(ButtonContext);

    if (state.channelsNear) {
        data = dataChannelsNear;
    }
    if (state.top5Providers) {
        data = top5Providers;
    }
    if (state.top5ProviderCoverage) {
        data = top5ProviderCoverage;
    }
    if (state.top5LaunchingRockets) {
        data = top5LaunchingRockets;
    }
    if (state.top5GrowingSatellites) {
        data = top5GrowingSatellites;
    }
    if (state.top5ChannelsInLanguage) {
        data = top5ChannelsInLanguage;
    }

    const handleReturnToChannels = () => {
        setState(prevState => ({ ...prevState, channelsNear: false, top5Providers: false, top5ProviderCoverage: false, top5LaunchingRockets: false, top5GrowingSatellites: false, top5ChannelsInLanguage: false }));
        data = filteredChannelsData;
    };

    return (
        <div className='db-table-container'>
                <Table data={data} />
                <button className='db-button' onClick={handleReturnToChannels}>Return to Channels</button>
        </div>
    )
}

export default DatabaseNav;