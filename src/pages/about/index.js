import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Papa from "papaparse";
import _ from "lodash";

import menu1 from "../../assets/menu1-actif.png";
import menu2 from "../../assets/menu2.png";
import menu3 from "../../assets/menu3.png";
import aboutTopLogo from "../../assets/aboutTopLogo.png";
import sQBIcon_1 from "../../assets/Smartcontract.svg";
import sQBIcon_2 from "../../assets/FundSafe.svg";
import featuresIcons_dot from "../../assets/featuresIcons_dot.png";
import featuresIcons_1 from "../../assets/featuresIcons_1.png";
import featuresIcons_2 from "../../assets/featuresIcons_2.png";
import featuresIcons_3 from "../../assets/featuresIcons_3.png";
import infoIcon from "../../assets/infoIcon.png";
import servicesIcon from "../../assets/Auditservice.svg";
import serviceIcon_1 from "../../assets/serviceIcon_1.png";
import serviceIcon_2 from "../../assets/serviceIcon_2.png";
import serviceIcon_3 from "../../assets/serviceIcon_3.png";
import serviceIcon_4 from "../../assets/serviceIcon_4.png";
import serviceIcon_5 from "../../assets/serviceIcon_5.png";
import projectIcon_1 from "../../assets/projects_icons/projectIcon_1.png";
import projectIcon_2 from "../../assets/projects_icons/projectIcon_2.png";
import projectIcon_3 from "../../assets/projects_icons/projectIcon_3.png";
import projectIcon_4 from "../../assets/projects_icons/projectIcon_4.png";
import projectIcon_5 from "../../assets/projects_icons/projectIcon_5.png";
import projectIcon_6 from "../../assets/projects_icons/projectIcon_6.svg";
import projectIcon_7 from "../../assets/projects_icons/projectIcon_7.png";
import projectIcon_8 from "../../assets/projects_icons/projectIcon_8.svg";
import projectIcon_9 from "../../assets/projects_icons/projectIcon_9.png";
import projectIcon_10 from "../../assets/projects_icons/projectIcon_10.png";
import projectIcon_11 from "../../assets/projects_icons/projectIcon_11.png";
import projectIcon_12 from "../../assets/projects_icons/projectIcon_12.png";
import projectIcon_13 from "../../assets/projects_icons/projectIcon_13.png";
import projectIcon_14 from "../../assets/projects_icons/projectIcon_14.png";
import projectIcon_15 from "../../assets/projects_icons/projectIcon_15.png";
import projectIcon_16 from "../../assets/projects_icons/projectIcon_16.png";
import psTop_1 from "../../assets/psTop_1.png";
import psTop_2 from "../../assets/psTop_2.png";
import psTop_3 from "../../assets/psTop_3.png";
import followTwitter from "../../assets/follow_twitter.png";
import followTelegram from "../../assets/follow_telegram.png";

/*** Starting the About page ***/
const About = () => {
  const [data, setData] = useState({});
  const [dataRev, setDataRev] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const [dataFiltered, setDataFiltered] = useState([]);

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

  const audit_performed = _.size(dataRev);

  return (
    <div className="aboutPage">
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
          <div className="aboutTopLogo">
            <img src={aboutTopLogo} alt="Callisto Security Department" />
          </div>
          <div className="aboutHeroTitle">
            Security Audits For Smart Contracts
          </div>
          <div className="herotitleAbout">
            Trust the Blockchain &amp; Audit Your Smart Contracts
          </div>
          <div className="hero2ndTitle">
            The Importance of Smart Contract Audits
          </div>
          <div className="aboutHeroP">
            <p>
              There are dangers associated with smart contract technology. With
              millions of DApps deployed on dozens of blockchains, some people
              intentionally engage in harmful activities to the community. These
              malicious activities are only possible when vulnerabilities exist
              in the smart contract code. Most hacking incidents are due to the
              lack of proper auditing of smart contracts.
            </p>
            <p>
              DeFi platforms are a prime hunting ground for cryptocurrency
              thieves and hackers as the cryptocurrency hacks accelerate. During
              the first four months of 2022, $1.57 billion worth of
              cryptocurrencies were stolen, surpassing the previous year's
              value.
            </p>
            <p>
              Protecting users' and investors' funds is more crucial than ever,
              and Callisto Network Security Department offers its experience in
              providing the most efficient and affordable auditing service in
              the industry.
            </p>
          </div>
          <div className="heroBtns">
            <a
              href="https://github.com/CallistoSecurity/Smart-contract-auditing/issues/new"
              className="heroBtns_1"
            >
              Request an audit
            </a>
            <a
              href="https://github.com/EthereumCommonwealth/Proposals/issues/2/"
              className="heroBtns_2"
            >
              Become an auditor
            </a>
          </div>
          <div className="aboutQuestionBlock">
            <div className="aQBLeft">
              <div className="aQBBar"></div>
              <div className="sQBIcon">
                <img src={sQBIcon_1} alt="What is a Smart Contract?" />
              </div>
              <div className="sQBQuestion">What is a Smart Contract?</div>
            </div>
            <div className="aQBRight">
              <div className="aQBText">
                <p>
                  The term "smart contract" refers to a software code or
                  protocol used to provide assistance in negotiating, verifying,
                  and executing an agreement. Smart contracts are fully
                  programmable and can be automatically triggered, allowing for
                  reliable transactions without any external third party.
                </p>
              </div>
            </div>
          </div>
          <div className="aboutQuestionBlock">
            <div className="aQBLeft">
              <div className="aQBBar"></div>
              <div className="sQBIcon">
                <img src={sQBIcon_2} alt="Are Your Funds Safe?" />
              </div>
              <div className="sQBQuestion">Are Your Funds Safe?</div>
            </div>
            <div className="aQBRight">
              <div className="aQBText">
                <p>
                  Smart contract programming is a relatively new field, lacking
                  security standards, documentation, and best practices.
                  Consequently, developers may overlook the importance of
                  auditing their smart contracts before launch.
                </p>
                <p>
                  In this context, smart contract hacks are on the rise, and
                  with the advent of DeFi platforms in the 2020s, the number of
                  hacks has skyrocketed as some bad actors take advantage of
                  developers' negligence.
                </p>
                <p>
                  An error in the code order (as in the DAO hack) or an
                  initialization omission (as in the Parity Freeze) can lead to
                  a disaster that will be immortalized on the blockchain.
                </p>
              </div>
            </div>
          </div>
          <div className="aboutFeaturesBLock">
            <div className="featuresIcons">
              <img
                src={featuresIcons_dot}
                alt=""
                className="featuresIcons_dot"
              />
              <img src={featuresIcons_1} alt="" />
              <img
                src={featuresIcons_dot}
                alt=""
                className="featuresIcons_dot"
              />
              <img src={featuresIcons_2} alt="" />
              <img
                src={featuresIcons_dot}
                alt=""
                className="featuresIcons_dot"
              />
              <img src={featuresIcons_3} alt="" />
              <img
                src={featuresIcons_dot}
                alt=""
                className="featuresIcons_dot"
              />
            </div>
            <div className="featuresText">
              <div className="ft_block">
                <div className="ftb_image">
                  <img src={featuresIcons_1} alt="" />
                </div>
                <p>
                  In the first four months of 2022 alone, the value of funds
                  stolen via smart contract hacks already exceeds the total for
                  the year 2021.{" "}
                </p>
              </div>
              <div className="ft_block">
                <div className="ftb_image">
                  <img src={featuresIcons_2} alt="" />
                </div>
                <p>
                  Despite the widely prevalent belief, a smart contract is not
                  secure by nature. As a piece of code, it is as prone to bugs and
                  flaws as any program.
                </p>
              </div>
              <div className="ft_block">
                <div className="ftb_image">
                  <img src={featuresIcons_3} alt="" />
                </div>
                <p>
                  Any contract intended to receive funds should be audited before
                  deployment.
                </p>
              </div>
            </div>
          </div>
          <div className="infoSection">
            <div className="youtubeVideo">
              <iframe
                width="100%"
                height="600px"
                src="https://www.youtube.com/embed/yYsV3YlU9hk?autoplay=0&mute=1&loop=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="infoTitle2nd">
              Callisto Network Security Department
            </div>
            <div className="infoP">
              <p>
                The idea for Callisto Security Department emerged after the DAO
                hack, which led to the Ethereum fork. The DAO hack resulted in
                the loss of millions of dollars and resulted in the creation of
                Ethereum Classic. Being an active contributor to Ethereum,
                Dexaran, founder of the Callisto Security Department, followed
                the hack closely and saw the deficiencies that led to the most
                famous hack in cryptocurrency history.
              </p>
              <p>
                Callisto Security Department consists of a team of seasoned
                professionals with a common goal: to reduce the risks and
                vulnerabilities of smart contracts to drive the adoption of
                programmable blockchains.
              </p>
              <p>
                As part of the audit process, auditors ensure that the smart
                contract behaves as intended by considering all logical
                permutations and possible exceptions and the rigor of its
                implementation. Our audit process primarily relies on manual
                review and analysis, as we believe that solely relying on
                automated tools for formal verification cannot provide
                sufficient security for critical systems and DApps.
              </p>
              <p>
                An audit is a fundamental requirement for a project to be
                considered secure and ready to receive user funds.
              </p>
            </div>
          </div>
          <div className="servicesSection">
            <div className="servicesIcon">
              <img src={servicesIcon} alt="" />
            </div>
            <div className="servicesTitle">Smart Contracts Audits Service</div>
            <div className="ServicesAll">
              <div className="ServiceBlock">
                <div className="serviceIcon">
                  <img src={serviceIcon_1} alt="" />
                </div>
                <div className="ServiceText">
                  Multiple independent auditors guarantee a reliable,
                  transparent, and decentralized audit service.
                </div>
              </div>
              <div className="ServiceBlock">
                <div className="serviceIcon">
                  <img src={serviceIcon_2} alt="" />
                </div>
                <div className="ServiceText">
                  Identification of potential bugs in the smart contract code
                  and labeling them based on the severity classification.
                </div>
              </div>
              <div className="ServiceBlock">
                <div className="serviceIcon">
                  <img src={serviceIcon_3} alt="" />
                </div>
                <div className="ServiceText">
                  Analysis of the overall architecture of the smart contracts.
                </div>
              </div>
              <div className="ServiceBlock">
                <div className="serviceIcon">
                  <img src={serviceIcon_4} alt="" />
                </div>
                <div className="ServiceText">
                  Technical analysis of the interaction between the smart
                  contract and the blockchain.
                </div>
              </div>
              <div className="ServiceBlock">
                <div className="serviceIcon">
                  <img src={serviceIcon_5} alt="" />
                </div>
                <div className="ServiceText">
                  Research possible optimizations of the smart contract code.
                </div>
              </div>
            </div>
          </div>
          <div className="projectsSection">
            <div className="projectsTitle">
              They Have Been Audited By Callisto Network
            </div>
            <div className="projectsIcons">
              <a href="https://callisto.network/axpire-token-axpr-security-audit/">
                <div className="projectIcon">
                  <img src={projectIcon_1} alt="" />
                  <p>Axpire (AXPR)</p>
                </div>
              </a>
              <a href="https://callisto.network/basic-attention-token-bat-security-audit/">
                <div className="projectIcon">
                  <img src={projectIcon_2} alt="" />
                  <p>Basic Attention Token (BAT)</p>
                </div>
              </a>
              <a href="https://callisto.network/binance-token-bnb-security-audit/">
                <div className="projectIcon">
                  <img src={projectIcon_3} alt="" />
                  <p>Binance Token (BNB)</p>
                </div>
              </a>
              <a href="https://callisto.network/enjin-token-enj-security-audit/">
                <div className="projectIcon">
                  <img src={projectIcon_4} alt="" />
                  <p>Enjin (ENJ)</p>
                </div>
              </a>
              <a href="https://callisto.network/holo-token-hot-security-audit/">
                <div className="projectIcon">
                  <img src={projectIcon_5} alt="" />
                  <p>Holo (HOT)</p>
                </div>
              </a>
              <a href="https://callisto.network/usdc-token-security-audit-report/">
              <div className="projectIcon">
                <img src={projectIcon_6} alt="" />
                <p>USDC (USDC)</p>
              </div>
              </a>
              <a href="https://callisto.network/jarvis-token-jar-security-audit/">
                <div className="projectIcon">
                  <img src={projectIcon_7} alt="" />
                  <p>JARVIS+ (JAR)</p>
                </div>
              </a>
              <a href="https://callisto.network/shiba-inu-token-security-audit-report/">
              <div className="projectIcon">
                <img src={projectIcon_8} alt="" />
                <p>Shiba Inu (SHIB)</p>
              </div>
              </a>
              <a href="https://callisto.network/maker-token-mkr-security-audit/">
                <div className="projectIcon">
                  <img src={projectIcon_9} alt="" />
                  <p>Maker (MKR)</p>
                </div>
              </a>
              <a href="https://callisto.network/mcafeedex-security-audit/">
                <div className="projectIcon">
                  <img src={projectIcon_10} alt="" />
                  <p>McAFee DEX</p>
                </div>
              </a>
              <a href="https://callisto.network/nexo-token-nexo-security-audit/">
                <div className="projectIcon">
                  <img src={projectIcon_11} alt="" />
                  <p>Nexo (NEXO)</p>
                </div>
              </a>
              <a href="https://callisto.network/omisego-token-omg-security-audit/">
                <div className="projectIcon">
                  <img src={projectIcon_12} alt="" />
                  <p>OMG Network (OMG)</p>
                </div>
              </a>
              <a href="https://callisto.network/pundix-token-npxs-security-audit/">
                <div className="projectIcon">
                  <img src={projectIcon_13} alt="" />
                  <p>Pundi X (NPXS)</p>
                </div>
              </a>
              <a href="https://callisto.network/selfkey-token-key-security-audit/">
                <div className="projectIcon">
                  <img src={projectIcon_14} alt="" />
                  <p>Selfkey (KEY)</p>
                </div>
              </a>
              <a href="https://callisto.network/tether-token-usdt-security/">
                <div className="projectIcon">
                  <img src={projectIcon_15} alt="" />
                  <p>Tether (USDT)</p>
                </div>
              </a>
              <a href="https://callisto.network/zilliqa-token-zil-security-audit/">
                <div className="projectIcon">
                  <img src={projectIcon_16} alt="" />
                  <p>Zilliqa (ZIL)</p>
                </div>
              </a>
            </div>
            <div className="projectsTitle">
              A Proven Audit Expertise
            </div>
            <div className="projectsStats">
              <div className="projectStat">
                <div className="psTop">
                  <img src={psTop_1} alt="" /> {audit_performed}
                </div>
                <div className="psBottom">Smart contracts audits</div>
              </div>
              <div className="projectStat">
                <div className="psTop">
                  <img src={psTop_2} alt="" /> 2484+
                </div>
                <div className="psBottom">Vulnerabilities found</div>
              </div>
              <div className="projectStat">
                <div className="psTop">
                  <img src={psTop_3} alt="" /> 0
                </div>
                <div className="psBottom">
                  Smart contracts hacked after an audit by Callisto Network
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="appContainer">
          <div className="hr">
            <hr />
          </div>
          <div className="footerSection">
            <div className="footerLeft">
              COPYRIGHT © 2022 Callisto Network, All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
