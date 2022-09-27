import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HostLogo } from '../images/HostLogo.svg';
import { useState, useEffect, useRef } from "react";

export default function HostHeader() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });

    return (
        <div className={scrollPosition < 600 ? "hostheader": "hostheader2"} role="navigation" aria-hidden={scrollPosition < 600 ? "true" : "false"}>
            <div className="hostheader-left">
                <Link to="/" className="hostheader-logo">
                <span style={{position:"relative"}}>
                    <HostLogo />
                </span>
                </Link>
            </div>
            <div className="hostheader-right">
                <div className="hostheader-right1">
                    <Link to="/hs" className="hhright-inner">
                        <span className="_ug8ljm" style={{marginLeft: "-18px;"}}>
                            <span className="_52l764" style={{right: "-18px", zIndex: "3"}}>
                                <div className="_1h6n1zu" style={{display: "inline-block", verticalAlign: "bottom", height: "30px", width: "30px", minHeight: "1px", borderRadius: "50%;"}}>
                                    <img className="_9ofhslz" aria-hidden="true" alt="" decoding="async" elementtiming="LCP-target" fetchpriority="low" loading="lazy" src="https://a0.muscache.com/im/pictures/c131fb36-f46a-464f-ad2f-087ebf88078d.jpg" data-original-uri="https://a0.muscache.com/im/pictures/c131fb36-f46a-464f-ad2f-087ebf88078d.jpg" style={{objectFit: "cover", verticalAlign: "bottom", borderRadius: "50%"}}/>
                                        <div className="_15p4g025" style={{backgroundImage: "url(&quot;https://a0.muscache.com/im/pictures/c131fb36-f46a-464f-ad2f-087ebf88078d.jpg&quot;)", backgroundSize: "cover", borderRadius: "50%"}}>
                                        </div>
                                </div>
                            </span>
                            <span className="_52l764" style={{right: "-9px", zIndex: "2"}}>
                            <div className="_1h6n1zu" style={{display: "inline-block", verticalAlign: "bottom", height: "30px", width: "30px", minHeight: "1px", borderRadius: "50%;"}}>
                                    <img className="_9ofhslz" aria-hidden="true" alt="" decoding="async" elementtiming="LCP-target" fetchpriority="low" loading="lazy" src="https://a0.muscache.com/im/pictures/3ddc6e92-e2fd-4cdc-a460-2f1d7d5365ae.jpg" data-original-uri="https://a0.muscache.com/im/pictures/3ddc6e92-e2fd-4cdc-a460-2f1d7d5365ae.jpg" style={{objectFit: "cover", verticalAlign: "bottom", borderRadius: "50%"}}/>
                                        <div className="_15p4g025" style={{backgroundImage: "url(&quot;https://a0.muscache.com/im/pictures/3ddc6e92-e2fd-4cdc-a460-2f1d7d5365ae.jpg&quot;)", backgroundSize: "cover", borderRadius: "50%"}}>
                                        </div>
                                </div>
                            </span>
                            <span className="_52l764" style={{right: "0px", zIndex: "1"}}>
                            <div className="_1h6n1zu" style={{display: "inline-block", verticalAlign: "bottom", height: "30px", width: "30px", minHeight: "1px", borderRadius: "50%;"}}>
                                    <img className="_9ofhslz" aria-hidden="true" alt="" decoding="async" elementtiming="LCP-target" fetchpriority="low" loading="lazy" src="https://a0.muscache.com/im/pictures/ba6627db-1aa4-4f7f-9f18-5be3d3470037.jpg" data-original-uri="https://a0.muscache.com/im/pictures/ba6627db-1aa4-4f7f-9f18-5be3d3470037.jpg" style={{objectFit: "cover", verticalAlign: "bottom", borderRadius: "50%"}}/>
                                        <div className="_15p4g025" style={{backgroundImage: "url(&quot;https://a0.muscache.com/im/pictures/ba6627db-1aa4-4f7f-9f18-5be3d3470037.jpg&quot;)", backgroundSize: "cover", borderRadius: "50%"}}>
                                        </div>
                                    </div>
                            </span>
                        </span>
                        슈퍼호스트에게 물어보기
                    </Link>
                </div>
                <Link to="/" className="hostheader-right2">
                    <span className="hostheader-right2span">

                    </span>
                    <span className="hostheader-right2txt">
                        호스팅 시작하기
                        </span>
                </Link>
            </div>
        </div>

    );
}