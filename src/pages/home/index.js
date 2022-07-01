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
import safe from '../../assets/safe.png';
import medium from '../../assets/medium.png';
import generalIcon from '../../assets/generalIcon.png';
import followTwitter from '../../assets/follow_twitter.png';
import followTelegram from '../../assets/follow_telegram.png';

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
    
    const audit_performed = _.size(revTable)
    const recently_completed = _.take(revTable, 3)

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
                            <span>Follow US:</span>
                            <a href="https://t.me/CallistoAudits" target="_blank" rel="noopener noreferrer">
                                <img src={followTelegram} alt="Telegram" />
                            </a>
                            <a href="https://twitter.com/Callisto_Audits" target="_blank" rel="noopener noreferrer">
                                <img src={followTwitter} alt="Twitter" />
                            </a>
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
                        <a href="https://github.com/EthereumCommonwealth/Auditing/issues/new" className='greenBtnLarge' target="_blank" rel="noopener noreferrer">Request an audit</a>
                        <a href="https://github.com/EthereumCommonwealth/Auditing/issues/new" className='redBtnLarge' target="_blank" rel="noopener noreferrer">Report an incident</a>
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
                                <li>{audit_performed}</li>
                                <li>1484+</li>
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
                                    <li className="listLeftLiPop">
                                        <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/2757.png" alt="Callisto Network" width="25px" className="tableProjIcon" />
                                        <span>Callisto Network</span>
                                    </li>
                                    <li className="listLeftLiPop">
                                        <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/11427.png" alt="Dragonary" width="25px" className="tableProjIcon" />
                                        <span>Dragonary</span>
                                    </li>
                                    <li className="listLeftLiPop">
                                        <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/19879.png" alt="SOY ERC223 token" width="25px"  className="tableProjIcon" />
                                        <span>SOY ERC223 token</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="listCenter">
                                <ul>
                                    <li className="listLeftLiPop">
                                        <img src={safe} alt="Safe" width="16px"/>
                                        <span>94</span>
                                    </li>
                                    <li className="listLeftLiPop">
                                        <img src={medium} alt="Medium" width="16px"/>
                                        <span>72</span>
                                    </li>
                                    <li className="listLeftLiPop">
                                        <img src={safe} alt="Safe" width="16px"/>
                                        <span>97</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="listRight">
                                <ul>
                                <li>$6,759,402</li>
                                <li>$526,099</li>
                                <li>$1,340,740</li>
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
                                        {recently_completed.map((data) => (
                                            <li className="listLeftLiPop" key={data.id}>
                                                <img src={data.project_icon} alt={data.project_name} width="25px" className="tableProjIcon" />
                                                <span>{data.project_name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="listRight">
                                    <ul>
                                        {recently_completed.map((data) => (
                                            <li key={data.id}>
                                                {data.audit_release}
                                            </li>
                                        ))}
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
                            <th>RISK LEVEL</th>
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
                                    {
                                        (data.project_icon === "") ?
                                            <img src={generalIcon} alt="Project Icon" className="tableProjIcon" width="45px" />
                                        :
                                            <img src={data.project_icon} alt="Project Icon" className="tableProjIcon" width="45px" />
                                    }
                                    {data.project_name}
                                  </td>
                                  <td>
                                    {data.market_cap}
                                  </td>
                                  <td>
                                    {data.audit_release}
                                  </td>
                                  <td>
                                    { (data.risk_level === "Critical") ?
                                        <span className="tableRiskCri">
                                            CRITICAL
                                        </span>
                                        :
                                            (data.risk_level === "High") ?
                                                <span className="tableRiskHigh">
                                                    HIGH
                                                </span>
                                                :
                                                    (data.risk_level === "Medium") ?
                                                        <span className="tableRiskMed">
                                                            MED
                                                        </span>
                                                        :
                                                            (data.risk_level === "Low") ?
                                                                <span className="tableRiskLow">
                                                                    LOW
                                                                </span>
                                                                :
                                                                <span className="tableRiskSafe">
                                                                    SAFE
                                                                </span>
                                    }
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