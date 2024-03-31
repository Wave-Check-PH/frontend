import React from 'react';
import "./TabsContainer.scss";

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import AppBar from '@mui/material/AppBar';
import SurfTown from '../interfaces/SurfTown';
import VideoPlayerContainer from './VideoPlayerContainer';
import { Typography } from '@mui/material';
import CustomCarousel from "./LandingPage/Carousel";

interface TabsContainerPlayerProps {
    locations: SurfTown[];
}

const TabsContainerPlayer: React.FC<TabsContainerPlayerProps> = ({ locations }) => {
    const [surftownIndex, setSurftownIndex] = React.useState(0);
    const [camIndex, setCamIndex] = React.useState("0");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setSurftownIndex(parseInt(newValue));
    };

    const currentSurfTown = locations[surftownIndex];
    return <div className='tab-window'>

        <AppBar className="app-bar" position="static" color='primary'>
            <Tabs
                value={surftownIndex.toString()}
                onChange={handleChange}
                textColor="inherit"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="full width tabs example"
            >
                {locations.map((cam, index) => {
                    return <Tab label={cam.name} value={index.toString()} />
                })}
            </Tabs>
        </AppBar>
        <CustomCarousel locations={locations} surftownIndex={surftownIndex} setCamIndex={setCamIndex} />
        {/* <CustomCarousel locations={locations} surftownIndex={surftownIndex} setCamIndex={setCamIndex} /> */}

        <VideoPlayerContainer
            cam={currentSurfTown.cams[parseInt(camIndex)]} />

    </div>
};

export default TabsContainerPlayer;
