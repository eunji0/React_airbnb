import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HostLogo2 } from '../images/HostLogo2.svg';
import { ReactComponent as Play } from '../images/Play.svg';
import ModalSign from "./ModalSign";
import { useState, useEffect, useRef } from "react";


export default function HostMain() {
    const outSection = useRef(null);
    const [loginOpen, setLoginOpen] = useState(false); //로그인모달사인

    const closeModal =()=> {
        setLoginOpen(false);
    }

    //로그인 창
    useEffect(() => {
        function handleClickOutside(e) {
            if (outSection.current && !outSection.current.contains(e.target)) {
                setLoginOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [outSection]);


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
                            <div className="hostheader-right2" ref={outSection} onClick={()=> setLoginOpen(true)} type="button">
                            <span className="hostheader-right2txt">
                              호스팅 시작하기
                              <ModalSign open={loginOpen} >
                             </ModalSign>
                            </span>
                             </div>
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
                                        <div className="hm-map"></div>
                                    </div>
                                    <div className="hmmain-c">
                                    <div class="_hbygyl">
                                        *
                                        <button type="button" class="_1s7ygi6z">에어비앤비가 예상 수입을 산정하는 방법</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="hmmain2">
                    <h2 className="hmmain2-inner">
                        언제 어디서든 <br/>호스팅하실 수 있습니다
                    </h2>
                    <div className="hmmain2-in">
                        <div className="hmmain2-btn"></div>
                        <div className="hmmain2-img">
                            <div className="hmmain2-flex"></div>
                            <div className="hmmain2-flex" aria-hidden="false">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </main>
    );
}