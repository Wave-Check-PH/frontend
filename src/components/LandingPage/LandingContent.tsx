import "./LandingContent.scss";
import locations from "../../locations";

import TabsContainerPlayer from "../TabsContainer";


function LandingContent() {
    return (

        <div className="landing-content">
            <TabsContainerPlayer locations={locations} />
        </div>
    );
}

export default LandingContent;
