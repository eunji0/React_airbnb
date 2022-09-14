import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HostLogo2 } from '../images/HostLogo2.svg';
import { ReactComponent as Play } from '../images/Play.svg';


export default function HostMain() {
    return(
        <main>
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
            <div>
                <div>
                    <div className="hm-main">
                        <div>
                            <div className="hmmain">
                            <h2 id="host-estimate-header" class="_nudpw0">호스팅으로 올릴 수 있는<br /> 수입을 확인하세요</h2>
                            <div style={{width:"100%"}}>
                                <div>
                                    <div className="hmmain-a">
                                        <div className="hmmain-aa" style={{display:"flex"}}>
                                        <div className="hmmain-ain">
                                            <div className="hmmain-ain1">
                                                <div className="hmmain-ain2">
                                                    <div className="_jmxiel">동일 지역 내 호스트의 평균 수입은 다음과 같습니다.*</div>
                                                    <div className="_13260ndj">
                                                        <span className="_sdzt8pt">₩2,257,219
                                                        </span>
                                                        <span className="_guws13p">/월</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{display:"flex", flexDirection:"row"}}>
                                            <div className="hmmain-ain1">
                                                <div className="hmmain-ain2">
                                                    <div className="_jmxiel">호스팅 수입</div>
                                                    <div className="_13260ndj">
                                                        <span className="_sdzt8pt" style={{color:"#222222"}}>₩94,051
                                                        </span>
                                                        <span className="_guws13p" style={{color:"#222222"}}>/박</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hmmain-ain1">
                                                <div className="hmmain-ain2">
                                                    <div className="_jmxiel">예약 일수:</div>
                                                    <div className="_13260ndj">
                                                        <span className="_sdzt8pt" style={{color:"#222222"}}>24 
                                                        </span>
                                                        <span className="_guws13p" style={{color:"#222222"}}>박/월</span>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="hmmain-b">
                                        <h3 className="_m37l9b">숙소를 소개해주세요</h3>
                                    </div>
                                    <div className="hmmain-c"></div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </main>
    );
}