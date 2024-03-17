import "./LandingContent.scss";
import SurfTown from "../../interfaces/SurfTown";

import TabsContainerPlayer from "../TabsContainer";
import SurfMaidLogo from "../../img/surfmaidlogo.png";

const locations: SurfTown[] = [{
    name: "La Union",
    cams: [
        {
            name: "Point",
            src: "http://wavecheck.ph:8080/memfs/810e6686-8bf7-4220-a489-281992ab5421.m3u8",
            hostLogo: SurfMaidLogo,
            hostWebsite: "https://surfmaid.wixsite.com/surfmaid"
        },
        {
            name: "Carille 🚧",
            src: "http://wavecheck.ph:8080/memfs/810e6686-8bf7-4220-a489-281992ab5421.m3u8",
            hostLogo: SurfMaidLogo,
            hostWebsite: "https://surfmaid.wixsite.com/surfmaid",
            comingSoon: true
        },
        {
            name: "Urbiztondo Beach 🚧",
            src: "http://wavecheck.ph:8080/memfs/810e6686-8bf7-4220-a489-281992ab5421.m3u8",
            hostLogo: SurfMaidLogo,
            hostWebsite: "https://surfmaid.wixsite.com/surfmaid",
            comingSoon: true
        }
    ],
}];

function LandingContent() {
    return (

        <div className="landing-content">
            <TabsContainerPlayer locations={locations} />
        </div>
    );
}

export default LandingContent;
