import React from 'react';
import "./TabsContainer.scss";

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import AppBar from '@mui/material/AppBar';
import SurfTown from '../../interfaces/SurfTown';
import VideoPlayerContainer from '../VideoPlayerContainer';
import CustomCarousel from "./Carousel";
import FadeIn from '../atoms/FadeIn';
import { Card } from '@mui/material';

interface TabsContainerPlayerProps {
    locations: SurfTown[];
}

const TabsContainerPlayer: React.FC<TabsContainerPlayerProps> = ({ locations }) => {
    const [surftownIndex, setSurftownIndex] = React.useState(0);
    const [camIndex, setCamIndex] = React.useState("0");
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setSurftownIndex(parseInt(newValue));
    };

    const currentSurfTown = locations[surftownIndex];

    return <div className='tab-window'>

        <Card className='tab-section'>
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
        <CustomCarousel
            setDrawerOpen={setDrawerOpen}
            locations={locations} surftownIndex={surftownIndex} setCamIndex={setCamIndex} />
        </Card>
        <div className='surf-cam-player-id-container' id="surf-cam-player-anchor"/>
        <FadeIn
        open={drawerOpen} 
        children={<VideoPlayerContainer cam={currentSurfTown.cams[parseInt(camIndex)]} />} />

    </div>
};

export default TabsContainerPlayer;
