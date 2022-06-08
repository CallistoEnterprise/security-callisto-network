import React from "react";

import menu1 from '../../assets/menu1.png';
import menu2 from '../../assets/menu2.png';
import menu3 from '../../assets/menu3.png';

/*** Starting the About page ***/
const About = () => {

    return (
        <div className="aboutPage">
            <div className="topSection">
                <div className="appContainer">
                    <div className="menuSection">
                        <div className="menuLeft">
                            <a href="/"><img src={menu1} alt="Menu item" /></a>
                            <a href="/"><img src={menu2} alt="Menu item" target="_blank" rel="noopener noreferrer" /></a>
                            <a href="/"><img src={menu3} alt="Menu item" target="_blank" rel="noopener noreferrer" /></a>
                        </div>
                        <div className="menuRight">
                            Welcome to our portal
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="appContainer">
                <div className="footerSection">
                    <div className="footerLeft">
                        COPYRIGHT © 2022 Callisto Network, All Rights Reserved
                    </div>
                    <div className="footerRight">
                        <a href="https://callisto.network/" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
                        <a href="https://callisto.network/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>

        );
};

export default About;