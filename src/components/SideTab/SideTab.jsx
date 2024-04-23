import React, { useContext } from 'react';
import { ButtonContext } from './ButtonContext';
import { ReactComponent as STAR } from '../../assets/AYON_STAR_1.svg'; 
import './SideTab.css';

const SideTab = () => {
    const [state, setState] = useContext(ButtonContext); 



    const handleChannelsNear = () => {
        setState(prevState => ({ ...prevState,
            channelsNear: true,
            top5Providers: false, 
            top5ProviderCoverage: false, 
            top5LaunchingRockets: false, 
            top5GrowingSatellites: false, 
            top5ChannelsInLanguage: false }));
    };

    const handleTop5Providers = () => {
        setState(prevState => ({ ...prevState, channelsNear: false, top5Providers: true, top5ProviderCoverage: false, top5LaunchingRockets: false, top5GrowingSatellites: false, top5ChannelsInLanguage: false }));
    };

    const handleTop5ProviderCoverage = () => {
        setState(prevState => ({ ...prevState, channelsNear: false, top5Providers: false, top5ProviderCoverage: true, top5LaunchingRockets: false, top5GrowingSatellites: false, top5ChannelsInLanguage: false }));
    };

    const handleTop5LaunchingRockets = () => {
        setState(prevState => ({ ...prevState, channelsNear: false, top5Providers: false, top5ProviderCoverage: false, top5LaunchingRockets: true, top5GrowingSatellites: false, top5ChannelsInLanguage: false }));
    };

    const handleTop5GrowingSatellites = () => {
        setState(prevState => ({ ...prevState, channelsNear: false, top5Providers: false, top5ProviderCoverage: false, top5LaunchingRockets: false, top5GrowingSatellites: true, top5ChannelsInLanguage: false }));
    };

    const handleTop5ChannelsInLanguage = () => {
        setState(prevState => ({ ...prevState, channelsNear: false, top5Providers: false, top5ProviderCoverage: false, top5LaunchingRockets: false, top5GrowingSatellites: false, top5ChannelsInLanguage: true }));
    };

    // buttons will be wrapped in a scrollable div
    return ( 
        <div className="side-tab-parent">
            <span className="text-span">
                <text id="pl">Q</text>
                <text>UICK </text> 
                <text>DATA</text>
            </span>
            <span className="button-span">
                <button onClick={handleChannelsNear}><STAR className="star"/>Channels near</button>
                <button onClick={handleTop5Providers}><STAR className="star"/>Top 5 channel providers</button>
                <button onClick={handleTop5ProviderCoverage}><STAR className="star"/>Top 5 provider coverage</button>
                <button onClick={handleTop5LaunchingRockets}><STAR className="star"/>Top 5 launching rockets</button>
                <button onClick={handleTop5GrowingSatellites}><STAR className="star"/>Top 5 growing satellites</button>
                <button onClick={handleTop5ChannelsInLanguage}><STAR className="star"/>Top 5 channels in a language</button>
            </span>
        </div>
    );
};

export default SideTab; 