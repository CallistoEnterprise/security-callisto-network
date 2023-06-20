import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Papa from "papaparse";
import Table from "react-bootstrap/Table";
import _ from "lodash";

import stat1 from "../../assets/stat1.png";
import stat2 from "../../assets/stat2.png";
import stat3 from "../../assets/stat3.png";
import cloIcon from "../../assets/cloIcon.png";
import menu1 from "../../assets/menu1.png";
import menu2 from "../../assets/menu2_actif.png";
import menu3 from "../../assets/menu3.png";
import safe from "../../assets/safe.png";
import medium from "../../assets/medium.png";
import generalIcon from "../../assets/generalIcon.png";
import followTwitter from "../../assets/follow_twitter.png";
import followTelegram from "../../assets/follow_telegram.png";
import banner_desk from "../../assets/banner/1500-90.png";
import banner_tablet from "../../assets/banner/728-90.png";
import banner_mobile from "../../assets/banner/320-90.png";

/*** Starting the Home page ***/
const Home = () => {
  const [data, setData] = useState({});
  const [dataRev, setDataRev] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const [dataFiltered, setDataFiltered] = useState([]);

  // Data from the API
  const [dataFromAPI, setDataFromAPI] = useState([]);
  const [dataLoadedAPI, setDataLoadedAPI] = useState(false);

  // Total Fund state
  const [totalFund, setTotalFund] = useState(0);

  // States for USDT, SOY ands SHIB values
  const [usdt, setUsdt] = useState(0);
  const [soy, setSoy] = useState(0);
  const [shib, setShib] = useState(0);


  const getMarketcap = (report_link) => {
    // TODO: replace reportUrl with just symbol in boath inputs and coinName
    const coinObject = dataFromAPI.find(obj => obj.reportUrl.includes(report_link));
    if (!coinObject || 
        !coinObject.cryptocurrency || 
        !coinObject.cryptocurrency.price || 
        !coinObject.cryptocurrency.price.market_cap_by_total_supply) {
        return;
    }
    // number.toLocaleString('en-US'); format with commas
    const coinData = (coinObject.cryptocurrency.price.market_cap_by_total_supply).toLocaleString('en-US');

    return "$" + coinData;
};

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQLD7wTy3m9LVtZBQfB4Z2i6fhsNpSd-cfXpiYolfTw7YT3M-nNgOS0cisaqc93uMEA82KD_irBsQ7h/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          setData(results.data);
          setDataLoaded(true);
        },
      }
    );

    const table = Array.from(data);
    const revTable = _.reverse(table);
    setDataRev(revTable);
    setDataFiltered(revTable);
  }, [dataLoaded]);

  const handleFilter = (event) => {
    // Reading the value from the filter input
    let value = event.target.value.toLowerCase();

    let newData = dataRev.filter((o) =>
      o.project_name.toLowerCase().includes(value)
    );

    if (value === "") {
      setDataFiltered(dataRev);
    } else {
      setDataFiltered(newData);
    }
  };

  const audit_performed = _.size(dataRev);
  const recently_completed = _.take(dataRev, 3);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api-data.absolutewallet.com/api/soy-finance/v1/audits/lists"
        );
        const data = await response.json().then((data) => {
          // Data states
          setDataFromAPI(data);
          setDataLoadedAPI(true);
          // data should be your array of objects
          let totalValue = 0;
          for (let obj of data) {
            // sum the values you're interested in, here I'm assuming the property is called 'value'
            if (obj.cryptocurrency !== null) {
              totalValue += obj.cryptocurrency.price.market_cap_by_total_supply;
            }
            if (obj.symbol === "USDT") {
              setUsdt(Math.trunc(obj.cryptocurrency.price.market_cap_by_total_supply).toLocaleString('en-US'));
            }
            if (obj.symbol === "SOY") {
              setSoy(Math.trunc(obj.cryptocurrency.price.market_cap_by_total_supply).toLocaleString('en-US'));
            }
            if (obj.symbol === "SHIB") {
              setShib(Math.trunc(obj.cryptocurrency.price.market_cap_by_total_supply).toLocaleString('en-US'));
            }
          }
          // set the state
          const millions = (totalValue / 1000000).toFixed(2);
          const formattedMillions = millions.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          setTotalFund(formattedMillions);
        })
      } catch (error) {
          console.log(error);
      }
    }
    fetchData();
  }, []);
  
  return (
    <div className="homePage">
      <div className="topSection">
        <div className="appContainer">
          <div className="menuSection">
            <div className="menuLeft">
              <Link to="/">
                <img src={menu1} alt="Menu item" />
              </Link>
              <Link to="/audited-projects">
                <img
                  src={menu2}
                  alt="Menu item"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </Link>
              <a
                href="https://docs.callisto.network/callisto-security-dept./documentation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={menu3}
                  alt="Menu item"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </a>
            </div>
            <div className="menuRight">
              <a
                href="https://t.me/CallistoNet"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={followTelegram} alt="Telegram" />
              </a>
              <a
                href="https://twitter.com/CallistoAudits"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={followTwitter} alt="Twitter" />
              </a>
            </div>
          </div>
          <div className="topTitleSection">
            <div className="hrLeft">
              <hr />
            </div>
            <div className="hrTitle">Callisto Security Department</div>
            <div className="hrRight">
              <hr />
            </div>
          </div>
          <div className="herosection">
            <div className="heroCloIcon">
              <img src={cloIcon} alt="Callisto Security" />
            </div>
            <div className="herotitleList">
              Trust the Blockchain &amp; Audit Your Smart Contracts
            </div>
            <div className="heroButtons">
              <a
                href="https://github.com/CallistoSecurity/Smart-contract-auditing/issues/new"
                className="greenBtnLarge"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request an audit
              </a>
              <a
                href="https://github.com/EthereumCommonwealth/Proposals/issues/2/"
                className="blackBtnLarge"
                target="_blank"
                rel="noopener noreferrer"
              >
                Become an Auditor
              </a>
              <a
                href="https://t.me/CallistoAudits"
                className="redBtnLarge"
                target="_blank"
                rel="noopener noreferrer"
              >
                Report an incident
              </a>
            </div>
          </div>
          <div className="statsSection">
            <div className="statBlock">
              <div className="statTitle">
                <div className="statIcon">
                  <img src={stat1} alt="" />
                </div>
                <div className="statTitletxt">Security Department Metrics</div>
              </div>
              <div className="statsList">
                <div className="listOne">
                  <div className="listLeft">
                    <ul>
                      <li>Audit Performed</li>
                      <li>Smart Contract Hacked After Audit</li>
                      <li>Total Funds Protected</li>
                    </ul>
                  </div>
                  <div className="listRight">
                    <ul>
                      <li>{audit_performed}</li>
                      <li>0</li>
                      <li>${totalFund} M</li>
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
                <div className="statTitletxt">Most Popular Audit Reports</div>
              </div>
              <div className="statsList">
                <div className="listTwo">
                  <div className="listLeft">
                    <ul>
                      <li className="listLeftLiPop">
                        <img
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                          alt="Tether USD"
                          width="25px"
                          className="tableProjIcon"
                        />
                        <span>Tether USD (USDT)</span>
                      </li>
                      <li className="listLeftLiPop">
                        <img
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/19879.png"
                          alt="Soy Finance"
                          width="25px"
                          className="tableProjIcon"
                        />
                        <span>Soy Finance (SOY)</span>
                      </li>
                      <li className="listLeftLiPop">
                        <img
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png"
                          alt="SHIBA INU"
                          width="25px"
                          className="tableProjIcon"
                        />
                        <span>SHIBA INU (SHIB)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="listCenter">
                    <ul>
                      <li className="listLeftLiPop">
                        <img src={safe} alt="Safe" width="16px" />
                        <span>Safe</span>
                      </li>
                      <li className="listLeftLiPop">
                        <img src={safe} alt="Safe" width="16px" />
                        <span>Safe</span>
                      </li>
                      <li className="listLeftLiPop">
                        <img src={safe} alt="Safe" width="16px" />
                        <span>Safe</span>
                      </li>
                    </ul>
                  </div>
                  <div className="listRight">
                    <ul>
                      <li>${usdt}</li>
                      <li>${soy}</li>
                      <li>${shib}</li>
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
                <div className="statTitletxt">Recently Completed</div>
              </div>
              <div className="statsList">
                <div className="listThree">
                  <div className="listLeft">
                    <ul>
                      {recently_completed.map((data) => (
                        <li className="listLeftLiPop" key={data.id}>
                          <img
                            src={data.project_icon}
                            alt={data.project_name}
                            width="25px"
                            className="tableProjIcon"
                          />
                          <span>{data.project_name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="listRight">
                    <ul>
                      {recently_completed.map((data) => (
                        <li key={data.id}>{data.audit_release}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dataSection">
            <div className="tableHead">
              <h2>Audit Reports</h2>
              <input
                type="text"
                onChange={(event) => handleFilter(event)}
                className="tableSeachInput"
                placeholder="Filter by keyword"
              />
            </div>
            <Table responsive>
              <thead>
                <tr>
                  <th className="tablePadLeft">#</th>
                  <th>PROJECT NAME</th>
                  <th>MARKET CAP</th>
                  <th>AUDIT RELEASE</th>
                  <th>RISK LEVEL</th>
                  <th>SECURITY REPORT</th>
                </tr>
              </thead>
              <tbody>
                {dataFiltered.map((data) => (
                  <tr className="tableRow" key={data.id}>
                    <td className="tablePadLeft">{data.id}</td>
                    <td className="tableProName">
                      <div className="tableProjFlex">
                        {data.project_icon === "" ? (
                          <img
                            src={generalIcon}
                            alt="Project Icon"
                            className="tableProjIcon"
                            width="45px"
                          />
                        ) : (
                          <img
                            src={data.project_icon}
                            alt="Project Icon"
                            className="tableProjIcon"
                            width="45px"
                          />
                        )}
                        <span className="tableProjName">{data.project_name}</span>
                      </div>
                    </td>
                    
                    <td className="tableProMarket">{
                      // check if dataFromAPI is not loaded
                      dataLoadedAPI ? (
                        getMarketcap(data.report_link)
                      ):(
                        <p>Loading...</p>
                      )
                    }</td>
                    <td>{data.audit_release}</td>
                    <td>
                      {data.risk_level === "Critical" ? (
                        <span className="tableRiskCri">CRITICAL</span>
                      ) : data.risk_level === "High" ? (
                        <span className="tableRiskHigh">HIGH</span>
                      ) : data.risk_level === "Medium" ? (
                        <span className="tableRiskMed">MED</span>
                      ) : data.risk_level === "Low" ? (
                        <span className="tableRiskLow">LOW</span>
                      ) : (
                        <span className="tableRiskSafe">SAFE</span>
                      )}
                    </td>
                    <td>
                      <a
                        href={data.report_link}
                        className="tableBtn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Report
                      </a>
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
              COPYRIGHT © 2023 Callisto Network, All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
