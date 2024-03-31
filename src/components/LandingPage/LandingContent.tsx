import React from "react";
import "./LandingContent.scss";
import locations from "../../locations";
import Text from "@mui/material/Typography";

import TabsContainerPlayer from "../TabsContainer";


function LandingContent() {
    return (

        <div className="landing-content">
            <Text variant="h2">Our Available Cams</Text>
            <TabsContainerPlayer locations={locations} />
        </div>
    );
}

export default LandingContent;
