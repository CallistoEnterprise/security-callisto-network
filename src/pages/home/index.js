import React, { useState } from "react";
import { Link } from "react-router-dom";
import TableData from "./tableData";

import stat1 from '../../assets/stat1.png';
import stat2 from '../../assets/stat2.png';
import stat3 from '../../assets/stat3.png';
import cloIcon from '../../assets/cloIcon.png';
import menu1 from '../../assets/menu1.png';
import menu2 from '../../assets/menu2.png';
import menu3 from '../../assets/menu3.png';

/*** Starting the Home page ***/
const Home = () => {

    return (
        <div className="homePage">
            <div className="topSection">
            <div className="appContainer">
            <div className="menuSection">
                <div className="menuLeft">
                    <Link to="/">
                        <img src={menu1} alt="Menu item" />
                    </Link>
                    <Link to="/about">
                        <img src={menu2} alt="Menu item" target="_blank" rel="noopener noreferrer" />
                    </Link>
                    <a href="https://github.com/EthereumCommonwealth/Auditing" target="_blank" rel="noopener noreferrer" >
                        <img src={menu3} alt="Menu item" target="_blank" rel="noopener noreferrer" />
                    </a>
                </div>
                <div className="menuRight">
                    Welcome to our portal
                </div>
            </div>
            <div className="topTitleSection">
                <div className="hrLeft">
                <hr />
                </div>
                <div className="hrTitle">
                    Callisto Security Department
                </div>
                <div className="hrRight">
                <hr />
                </div>
            </div>
            <div className="herosection">
                <div className="heroCloIcon">
                <img src={cloIcon} alt="Callisto Security" />
                </div>
                <div className="herotitle">
                Trust the Blockchain &amp; Audit Your Smart Contracts
                </div>
                <div className="heroButtons">
                <a href="https://www.google.com/" className='greenBtnLarge'>Request an audit</a>
                <a href="https://www.google.com/" className='redBtnLarge'>Report an incident</a>
                </div>
            </div>
            <div className="statsSection">
                <div className="statBlock">
                <div className="statTitle">
                    <div className="statIcon">
                    <img src={stat1} alt="" />
                    </div>
                    <div className="statTitletxt">
                    Security Department Metrics
                    </div>
                </div>
                <div className="statsList">
                    <div className="listOne">
                    <div className="listLeft">
                        <ul>
                        <li>Audit Performed</li>
                        <li>Vulnerabilities Found</li>
                        <li>Smart Contract hacked after audit</li>
                        </ul>
                    </div>
                    <div className="listRight">
                        <ul>
                        <li>400</li>
                        <li>1484</li>
                        <li>0</li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>

                <div className="statBlock">
                <div className="statTitle">
                    <div className="statIcon">
                    <img src={stat2} alt="" />
                    </div>
                    <div className="statTitletxt">
                    Most Popular Audit Report
                    </div>
                </div>
                <div className="statsList">
                    <div className="listTwo">
                    <div className="listLeft">
                        <ul>
                        <li>Callisto Entreprise</li>
                        <li>CryptoBot</li>
                        <li>Callisto Network</li>
                        </ul>
                    </div>
                    <div className="listCenter">
                        <ul>
                        <li>94</li>
                        <li>98</li>
                        <li>54</li>
                        </ul>
                    </div>
                    <div className="listRight">
                        <ul>
                        <li>400</li>
                        <li>1484</li>
                        <li>0</li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>

                <div className="statBlock">
                <div className="statTitle">
                    <div className="statIcon">
                    <img src={stat3} alt="" />
                    </div>
                    <div className="statTitletxt">
                    Recently Completed
                    </div>
                </div>
                <div className="statsList">
                    <div className="listThree">
                    <div className="listLeft">
                        <ul>
                        <li>Callisto Entreprise</li>
                        <li>CryptoBot</li>
                        <li>Callisto Network</li>
                        </ul>
                    </div>
                    <div className="listRight">
                        <ul>
                        <li>11/04/2022</li>
                        <li>11/04/2022</li>
                        <li>11/04/2022</li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <TableData />
                
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

export default Home;