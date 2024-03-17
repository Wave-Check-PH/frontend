import React, { useRef, useEffect } from 'react';
import "./TabsContainer.scss";
import Hls from 'hls.js';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SurfTown from '../interfaces/SurfTown';
import VideoPlayerContainer from './VideoPlayerContainer';


interface TabsContainerPlayerProps {
    locations: SurfTown[];
}

const TabsContainerPlayer: React.FC<TabsContainerPlayerProps> = ({ locations }) => {
    const [surftownIndex, setSurftownIndex] = React.useState(0);
    const [value, setValue] = React.useState("0");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const currentSurfTown = locations[surftownIndex];
    return <div className='tab-window'>
        <p>{currentSurfTown.name}</p>
        <TabContext value={value}>
            <AppBar className="app-bar" position="static" sx={{ bgcolor: 'darkblue' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="inherit"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="full width tabs example"
                >
                    {currentSurfTown.cams.map((cam, index) => {
                        return <Tab label={cam.name} value={index.toString()} />
                    })}
                </Tabs>
            </AppBar>
            <VideoPlayerContainer
                cam={currentSurfTown.cams[parseInt(value)]} />
        </TabContext>
    </div>
};

export default TabsContainerPlayer;
