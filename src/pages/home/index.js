import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Papa from "papaparse";
import Table from 'react-bootstrap/Table';
import _ from "lodash";

import stat1 from '../../assets/stat1.png';
import stat2 from '../../assets/stat2.png';
import stat3 from '../../assets/stat3.png';
import cloIcon from '../../assets/cloIcon.png';
import menu1 from '../../assets/menu1.png';
import menu2 from '../../assets/menu2.png';
import menu3 from '../../assets/menu3.png';

/*** Starting the Home page ***/
const Home = () => {

    const [data, setData] = useState({});
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQLD7wTy3m9LVtZBQfB4Z2i6fhsNpSd-cfXpiYolfTw7YT3M-nNgOS0cisaqc93uMEA82KD_irBsQ7h/pub?output=csv", {
        download: true,
        header: true,
        complete: (results) => {
            setData(results.data);
            setDataLoaded(true);
        },
        });
    }, [dataLoaded]);
    
    const table = Array.from(data);
    const revTable = _.reverse(table);
    console.log(revTable)

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
                    <div className="dataSection">
                    <Table responsive>
                        <thead>
                            <tr>
                            <th className="tablePadLeft">#</th>
                            <th>PROJECT NAME</th>
                            <th>MARKET CAP</th>
                            <th>AUDIT RELEASE</th>
                            <th>RIKS LEVEL</th>
                            <th>REPORT</th>
                            </tr>
                        </thead>
                        <tbody>
  
                              {revTable.map((data) => (
                                <tr className="tableRow" key={data.id}>
                                  <td className="tablePadLeft">
                                    {data.id}
                                  </td>
                                  <td className="tableProName">
                                    <img src={data.project_icon} alt="Project Icon" className="tableProjIcon" width="45px" /> {data.project_name}
                                  </td>
                                  <td>
                                    {data.market_cap}
                                  </td>
                                  <td>
                                    {data.audit_release}
                                  </td>
                                  <td>
                                    <span className="tableRiskLow">{data.risk_level}</span>
                                  </td>
                                  <td>
                                    <a href={data.report_link} className="tableBtn" target="_blank" rel="noopener noreferrer">AUDIT REPORT</a>
                                  </td>
                                </tr>
                              ))}
                            
                        </tbody>
                    </Table>
                </div>
                </div>
            </div>
        
        
            <div className="footer">
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
      </div>

        );
};

export default Home;