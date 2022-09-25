import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HostLogo2 } from '../images/HostLogo2.svg';
import { ReactComponent as Play } from '../images/Play.svg';
import ModalSign from "./ModalSign";
import { useState, useEffect, useRef } from "react";
import { ReactComponent as Hostsearch } from '../images/Hostsearch.svg';
import { ReactComponent as Next } from '../images/Next.svg';
import { ReactComponent as Plus } from '../images/Plus.svg';
import { ReactComponent as Minus } from '../images/Minus.svg';


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
                                        <div className="hm-map">
                                            <div aria-hidden="false" style={{position:"relative", width:"100%", height:"100%"}}>
                                                <div className="hmmapd1">
                                                    <div className="hmmapd2">
                                                        <div className="hmmapdd">
                                                            <div className="hmmapds">
                                                                <div className="hmmapa">
                                                                    <div className="hmmapb">
                                                                    <span className="hmmapc">
                                                                    주소 또는 지역
                                                                    </span>
                                                                    <button classname="_b2fxuo" data-index="0" type="button">
                                                                        <span classname="a8jt5op dir dir-ltr">주소 또는 지역</span>
                                                                        <div classname="_1g5ss3l">Yangcheon-gu</div>
                                                                    </button>
                                                                    <span className="_10u04nz"></span>

                                                                    <button className="_b2fxuo" data-index="1" type="button">
                                                                        <span className="a8jt5op dir dir-ltr">숙소 유형</span>
                                                                        <div className="_1g5ss3l">공간 전체</div>
                                                                    </button>
                                                                    <span className="_10u04nz"></span>
                                                                    <button className="_b2fxuo" data-index="2" type="button">
                                                                        <span className="a8jt5op dir dir-ltr">게스트</span>
                                                                        <div className="_1g5ss3l">게스트 4명</div>
                                                                        <div className="_o5ir51" data-icon="true">
                                                                        <Hostsearch />
                                                                        </div>
                                                                    </button>
                                                                   </div>
                                                                </div>
                                                            </div>
                                                            <div className="hmmapdt">
                                                                <form className="hmmapform">
                                                                    <div className="hmmapfa">
                                                                        <div className="hmmapfb">
                                                                            <div className="hmmapfc">
                                                                            <label className="_5wnqr6h" for="location-query-input">
                                                                                <div className="_gor68n">
                                                                                    <div className="_wtz1co">주소 또는 지역</div>
                                                                                    <input className="_3vy1xi" id="location-query-input" aria-describedby="location-query-input-description" role="combobox" placeholder="숙소 위치는 어디인가요?" name="query" spellcheck="false" autocomplete="off" autocorrect="off" aria-haspopup="listbox" aria-expanded="false" aria-controls="autocomplete-results" aria-autocomplete="list" value="Yangcheon-gu"/>
                                                                                </div>
                                                                            </label>
                                                                            <span id="location-query-input-description" className="_1u9fru1">추천 검색 결과를 확인하려면 계속 진행하세요.</span>
                                                                            </div>
                                                                            <div className="_43mycv"></div>
                                                                            <div className="_j8gg2a">
                                                                                <div className="_uv7xow" role="button" tabindex="0" aria-expanded="false">
                                                                                    <div className="_seuyf">
                                                                                        <div className="_wtz1co">숙소 유형</div>
                                                                                        <div className="_vuaqekp">공간 전체</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="_43mycv"></div>
                                                                            <div className="_5t6sn0g">
                                                                                <div className="_xdgf3kq" role="button" tabindex="0" aria-expanded="false">
                                                                                    <div className="_seuyf">
                                                                                        <div className="_wtz1co">게스트</div>
                                                                                        <div className="_vuaqekp">게스트 4명</div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="_w64aej">
                                                                                    <button className="_19960d4z" type="button">
                                                                                        <div className="_1hb5o3s">
                                                                                            <div className="_14lk9e14">
                                                                                                <Hostsearch/>
                                                                                            </div>
                                                                                            <div className="_c5qlo1f">검색</div>
                                                                                        </div>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div className="_pawvzww">
                                                    <div className=" dir dir-ltr" aria-hidden="false" style={{whiteSpace: "nowrap", position: "absolute", marginLeft: "24px", marginTop: "24px", top: "0px", left: "0px", zIndex: "1", transition: "transform 850ms cubic-bezier(0.25, 1, 0.5, 1) 0s"}}>
                                                        <div className="c15e4bhw ctbkggg dir dir-ltr" style={{height: "40px", flexDirection: "row"}}>
                                                            <button aria-label="숙소 표시 목록이 있는 측면 패널 열기" type="button" className="b117oblx dir dir-ltr">
                                                                <div className="_567fxf">
                                                                    <Next />
                                                                </div>
                                                                <div aria-hidden="false" className="_qbhwkq">
                                                                    <span className="_8wjgtw">목록 보기</span>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="_pawvzww">
                                                        <div className=" dir dir-ltr" aria-hidden="false" style={{whiteSpace: "nowrap", position: "absolute", marginRight: "24px", marginTop: "24px", top: "0px", right: "0px", zIndex: "1", transition: "transform 850ms cubic-bezier(0.25, 1, 0.5, 1) 0s"}}>
                                                            <div className="c15e4bhw ctbkggg dir dir-ltr" style={{height: "40px", flexDirection: "row"}}>
                                                                <button aria-label="확대" data-testid="map/ZoomInButton" type="button" className="cj0q2ib sne7mb7 rp6dtyx t92tojf c1y4i074 dir dir-ltr">
                                                                <Plus />
                                                                </button>
                                                                <div className="c1fisx1o dir dir-ltr">
                                                                </div>
                                                                <button aria-label="축소" data-testid="map/ZoomOutButton" type="button" className="cj0q2ib sne7mb7 rp6dtyx b1d5ierg c1y4i074 dir dir-ltr">
                                                                <Minus />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="_17ctt5">
                                                    <div className=" dir dir-ltr" aria-hidden="false" style={{whiteSpace: "nowrap", position: "absolute", marginRight: "24px", marginTop: "24px", top: "0px", left: "0px", zIndex: "1", transition: "transform 850ms cubic-bezier(0.25, 1, 0.5, 1) 0s"}}>
                                                            <div className="c15e4bhw ctbkggg dir dir-ltr" style={{height: "40px", flexDirection: "row"}}>
                                                                <button aria-label="확대" data-testid="map/ZoomInButton" type="button" className="cj0q2ib sne7mb7 rp6dtyx t92tojf c1y4i074 dir dir-ltr">
                                                                <Plus />
                                                                </button>
                                                                <div className="c1fisx1o dir dir-ltr">
                                                                </div>
                                                                <button aria-label="축소" data-testid="map/ZoomOutButton" type="button" className="cj0q2ib sne7mb7 rp6dtyx b1d5ierg c1y4i074 dir dir-ltr">
                                                                <Minus />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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