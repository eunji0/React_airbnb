import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HostLogo2 } from '../images/HostLogo2.svg';
import { ReactComponent as Play } from '../images/Play.svg';


export default function HostMain() {
    return(
        <main>
            <div>
            <div className="hostmain">
                <div className="hostmain-logo">
                <Link to="/" className="hostheader-logo">
                <span>
                    <HostLogo2 />
                </span>
                </Link>
                </div>
                <div className="hostmain-left">
                    <div className="hml">
                        <h1 className="hml-h">
                            <div>
                                호스팅을 <br/>시작해보세요
                            </div>
                        </h1>
                        <div className="hml-inner">
                            <Link to="/" className="hostheader-right2">
                            <span className="hostheader-right2txt">
                              호스팅 시작하기
                            </span>
                             </Link>
                        </div>
                    </div>
                </div>
                <div className="hostmain-right">
                    <div className="hmr-inner">
                        <video className="hmr-video"></video>
                        <div className="hmr-in1"></div>
                        <div className="hmr-in2">
                            <div className="hmr-in21">
                            <div className="_1h6n1zu" role="presentation" aria-hidden="true" style={{display: "inline-block", verticalAlign: "bottom", height: "40px", width: "auto", minHeight: "1px;"}}>
                                <img className="_9ofhsl" aria-hidden="true" alt="필라델피아의 호스트" elementtiming="LCP-target" src="https://a0.muscache.com/im/pictures/cac9415a-acfb-4c92-a6d0-770e948741b1.jpg?im_w=480" data-original-uri="https://a0.muscache.com/im/pictures/cac9415a-acfb-4c92-a6d0-770e948741b1.jpg?im_w=480" style={{objectFit: "contain", objectPosition: "left center", verticalAlign: "bottom;"}}/>
                                    <div className="_15p4g025" style={{backgroundImage: "url(&quot;https://a0.muscache.com/im/pictures/cac9415a-acfb-4c92-a6d0-770e948741b1.jpg?im_w=480&quot;)", backgroundSize: "contain;"}}>
                                </div>
                            </div>
                            </div>
                            <div className="hmr-in22">필라델피아의 호스트</div>
                        </div>
                        <div className="hmr-in3"></div>
                        <div className="hmr-in4">
                        <button aria-label="재생" type="button" class="_1osbyo4">
                            <span class=" dir dir-ltr">
                                <Play />
                            </span>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </main>
    );
}