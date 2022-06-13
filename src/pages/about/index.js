import React from "react";
import { Link } from "react-router-dom";

import menu1 from '../../assets/menu1.png';
import menu2 from '../../assets/menu2.png';
import menu3 from '../../assets/menu3.png';
import aboutTopLogo from '../../assets/aboutTopLogo.png';
import sQBIcon_1 from '../../assets/sQBIcon_1.png';
import sQBIcon_2 from '../../assets/sQBIcon_2.png';
import featuresIcons_dot from '../../assets/featuresIcons_dot.png';
import featuresIcons_1 from '../../assets/featuresIcons_1.png';
import featuresIcons_2 from '../../assets/featuresIcons_2.png';
import featuresIcons_3 from '../../assets/featuresIcons_3.png';
import infoIcon from '../../assets/infoIcon.png';
import servicesIcon from '../../assets/servicesIcon.png';
import serviceIcon_1 from '../../assets/serviceIcon_1.png';
import serviceIcon_2 from '../../assets/serviceIcon_2.png';
import serviceIcon_3 from '../../assets/serviceIcon_3.png';
import serviceIcon_4 from '../../assets/serviceIcon_4.png';
import serviceIcon_5 from '../../assets/serviceIcon_5.png';
import projectIcon_1 from '../../assets/projectIcon_1.png';
import projectIcon_2 from '../../assets/projectIcon_2.png';
import projectIcon_3 from '../../assets/projectIcon_3.png';
import psTop_1 from '../../assets/psTop_1.png';
import psTop_2 from '../../assets/psTop_2.png';
import psTop_3 from '../../assets/psTop_3.png';


/*** Starting the About page ***/
const About = () => {

    return (
        <div className="aboutPage">
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
                    <div className="aboutTopLogo">
                        <img src={aboutTopLogo} alt="Callisto Security Department" />
                    </div>
                    <div className="aboutHeroTitle">
                        Security Audits For Smart Contract
                    </div>
                    <div className="aboutHeroSlogon">
                        Trust The Blockchain & Audit Your Smart Contracts
                    </div>
                    <div className="aboutHeroP">
                        <p>
                            There are dangers associated with smart contract technology. With millions of DApps deployed on dozens of blockchains, some people intentionally engage in harmful activities to the community. These malicious activities are only possible when vulnerabilities exist in the smart contract code. Most hacking incidents are the lack of proper auditing of smart contracts.
                        </p>
                        <p>
                            The DeFi platforms are a prime hunting ground for crypto-currency thieves and hackers as the cryptocurrency hacks accelerate. During the first four months of 2022, $1.57 billion worth of cryptocurrencies was stolen, surpassing the previous year's value.
                        </p>
                        <p>
                            Protecting users' and investors' funds is more crucial than ever and Callisto Network Security Department offers its experience in providing the most efficient and affordable auditing service in the industry.
                        </p>
                    </div>
                    <div className="heroBtns">
                        <a href="/" className="heroBtns_1">Request an audit</a>
                        <a href="/" className="heroBtns_2">Become an auditor</a>
                    </div>
                    <div className="aboutQuestionBlock">
                        <div className="aQBLeft">
                            <div className="aQBBar"></div>
                            <div className="sQBIcon">
                                <img src={sQBIcon_1} alt="What is a Smart Contract?" />
                            </div>
                            <div className="sQBQuestion">
                                What is a Smart Contract?
                            </div>
                        </div>
                        <div className="aQBRight">
                            <div className="aQBText">
                                <p>The term "smart contract" is probably one of the most used terms in the cryptocurrency industry, but what exactly is it?</p>
                                <p>The term smart contract refers to a software code or protocol used to provide assistance in negotiating, verifying and executing an agreement. Smart contracts are fully programmable and can be automatically triggered allowing for reliable transactions without any external third party.</p>
                            </div>
                        </div>
                    </div>
                    <div className="aboutQuestionBlock">
                        <div className="aQBLeft">
                            <div className="aQBBar"></div>
                            <div className="sQBIcon">
                                <img src={sQBIcon_2} alt="Are Your Funds Safe?" />
                            </div>
                            <div className="sQBQuestion">
                                Are Your Funds Safe?
                            </div>
                        </div>
                        <div className="aQBRight">
                            <div className="aQBText">
                                <p>Smart contract programming is a relatively new field, lacking security standards, documentation, and best practices. Consequently, the developers may overlook the importance of auditing their smart contracts before launch.</p>
                                <p>In this context, smart contract hacks are on the rise and with the advent of DeFi platforms in the 2020s, the number of hacks has skyrocketed as some bad actors take advantage of developers' negligence.</p>
                                <p>An error in the code order (as DAO hack) or an initialization omission (as Parity Freeze) can lead to a disaster such as being immortalized on the blockchain.</p>
                            </div>
                        </div>
                    </div>
                    <div className="aboutFeaturesBLock">
                        <div className="featuresIcons">
                            <img src={featuresIcons_dot} alt="" />
                            <img src={featuresIcons_1} alt="" />
                            <img src={featuresIcons_dot} alt="" />
                            <img src={featuresIcons_2} alt="" />
                            <img src={featuresIcons_dot} alt="" />
                            <img src={featuresIcons_3} alt="" />
                            <img src={featuresIcons_dot} alt="" />
                        </div>
                        <div className="featuresText">
                            <p>In the first four months of 2022 alone, the value of funds stolen via smart contract hacks already exceeds the total for the year 2021. </p>
                            <p>Despite the widely prevalent belief, a smart contract is not secure by nature. As a piece of code, it is as prone to bugs and flaws as any program.</p>
                            <p>Any contract intended to receive funds should be audited before deployment.</p>
                        </div>
                    </div>
                    <div className="infoSection">
                        <div className="infoIcon">
                            <img src={infoIcon} alt="" />
                        </div>
                        <div className="infoTitle">
                            Callisto Network Security Departement
                        </div>
                        <div className="infoP">
                            <p>The idea for Callisto Security Department emerged after the DAO hack which led to the Ethereum fork. Being an active contributor to Ethereum, Dexaran, founder of the Callisto Security Department, followed the hack closely and saw the deficiencies that led to the most famous hack in cryptocurrency history.</p>
                            <p>Callisto Security Department consists of a team of seasoned professionals with a common goal: to reduce the risks and vulnerabilities of smart contracts to drive the adoption of the programmable blockchain.</p>
                            <p>As part of the audit process, auditors ensure that the smart contract behaves as intended by considering all logical permutations and possible exceptions as well as the rigor of its implementation. The whole process is performed without automated tools, as we believe that formal verification cannot provide sufficient security for critical systems and DApps.</p>
                            <p>An audit is a fundamental requirement for a project to be considered secure and ready to receive user funds.</p>
                        </div>
                    </div>
                    <div className="servicesSection">
                        <div className="servicesIcon">
                            <img src={servicesIcon} alt="" />
                        </div>
                        <div className="servicesTitle">
                            Smart Contracts Audits Service
                        </div>
                        <div className="ServicesAll">
                            <div className="ServiceBlock">
                                <div className="serviceIcon">
                                    <img src={serviceIcon_1} alt="" />
                                </div>
                                <div className="ServiceText">
                                    Multiple independent auditors guarantee a reliable, transparent, and decentralized audit service.
                                </div>
                            </div>
                            <div className="ServiceBlock">
                                <div className="serviceIcon">
                                    <img src={serviceIcon_2} alt="" />
                                </div>
                                <div className="ServiceText">
                                    Identify potential bugs in the smart contract code and label them based on the severity classification.
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
                                    Technical analysis of the interaction between the smart contract and the blockchain.
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
                            They Have Been Audited By Callisto
                        </div>
                        <div className="projectsIcons">
                            <div className="projectIcon">
                                <img src={projectIcon_1} alt="" />
                                <p>ETH</p>
                            </div>
                            <div className="projectIcon">
                                <img src={projectIcon_2} alt="" />
                                <p>TON</p>
                            </div>
                            <div className="projectIcon">
                                <img src={projectIcon_3} alt="" />
                                <p>LUNA</p>
                            </div>
                        </div>
                        <div className="projectsStats">
                            <div className="projectStat">
                                <div className="psTop">
                                    <img src={psTop_1} alt="" /> 352
                                </div>
                                <div className="psBottom">
                                    Smart contracts audits
                                </div>
                            </div>
                            <div className="projectStat">
                                <div className="psTop">
                                    <img src={psTop_2} alt="" /> 1020
                                </div>
                                <div className="psBottom">
                                    Vulnerabilities found
                                </div>
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