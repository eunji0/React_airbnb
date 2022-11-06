import React from "react";
/*global kakao*/
import { Link } from "react-router-dom";
import { ReactComponent as HostLogo2 } from '../images/HostLogo2.svg';
import { ReactComponent as Play } from '../images/Play.svg';
import ModalSign from "./ModalSign";
import { useState, useEffect, useRef } from "react";
import { ReactComponent as Hostsearch } from '../images/Hostsearch.svg';
import { ReactComponent as Next } from '../images/Next.svg';
import { ReactComponent as Plus } from '../images/Plus.svg';
import { ReactComponent as Minus } from '../images/Minus.svg';
import { ReactComponent as Previous } from '../images/Previous.svg';
import styled from "styled-components";
import Slider from "react-slick";
import { hostdummy } from "../hostdummy";

export default function HostMain() {
    const outSection = useRef(null);
    const [loginOpen, setLoginOpen] = useState(false); //로그인모달사인

    const closeModal = () => {
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

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=3dd5404de1cc92bf47d78700b1c56113&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
        kakao.maps.load(() => {
            let container = document.getElementById("Mymap");
            let options = {
                center: new kakao.maps.LatLng(37.506502, 127.053617),
                level: 7
            };

            const map = new window.kakao.maps.Map(container, options);

        });
    }


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: (
            <span className="_17x243d">
                <button aria-label="이전" data-testid="prev-host-profile-button" type="button" className="_16wu1yq">
                    <span className="_e296pg">
                        <Previous />
                    </span>
                </button>
            </span>

        ),
        nextArrow: (
            <span className="_17x243d">
                <button aria-label="다음" data-testid="next-host-profile-button" type="button" className="_16wu1yq">
                    <span className="_e296pg">
                        <Next />
                    </span>
                </button>
            </span>
        ),
    };

    return (

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
                                호스팅을 <br />시작해보세요
                            </div>
                        </h1>
                        <div className="hml-inner">
                            <Button className="hostheader-right2" ref={outSection} onClick={() => setLoginOpen(true)} type="button">
                                <span className="hostheader-right2txt">
                                    호스팅 시작하기
                                    <ModalSign open={loginOpen} >
                                    </ModalSign>
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="hostmain-right">
                    <div className="hmr-inner">
                        <video className="_e2l2kr" autoplay="" aria-label="필라델피아의 호스트 첼시님이 미소를 지으며 문을 엽니다. 뭄바이에서 호스팅하는 소라야님이 미소를 지으며 옆에 있는 다른 사람과 함께 현관문을 엽니다. 요하네스버그의 호스트 모하메드님이 미소를 지으며 문을 엽니다. 멕시코시티의 호스트 마리아님이 고개를 끄덕이고 미소를 지으며 식물을 옮깁니다." crossorigin="anonymous" playsinline="" preload="auto" style={{ objectFit: "cover", objectPosition: "center top" }}>
                            <source src="https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4?imformat=h265" type="video/mp4; codecs=hevc" />
                            <source src="https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4" type="video/mp4" />
                        </video>
                        <div className="hmr-in1"></div>
                        <div className="hmr-in2">
                            <div className="hmr-in21">
                                <div className="_1h6n1zu" role="presentation" aria-hidden="true" style={{ display: "inline-block", verticalAlign: "bottom", height: "40px", width: "auto", minHeight: "1px;" }}>
                                    <img className="_9ofhsl" aria-hidden="true" alt="필라델피아의 호스트" elementtiming="LCP-target" src="https://a0.muscache.com/im/pictures/cac9415a-acfb-4c92-a6d0-770e948741b1.jpg?im_w=480" data-original-uri="https://a0.muscache.com/im/pictures/cac9415a-acfb-4c92-a6d0-770e948741b1.jpg?im_w=480" style={{ objectFit: "contain", objectPosition: "left center", verticalAlign: "bottom;" }} />
                                    <div className="_15p4g025" style={{ backgroundImage: "url(&quot;https://a0.muscache.com/im/pictures/cac9415a-acfb-4c92-a6d0-770e948741b1.jpg?im_w=480&quot;)", backgroundSize: "contain;" }}>
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
                                <div style={{ width: "100%" }}>
                                    <div>
                                        <div className="hmmain-a">
                                            <div className="hmmain-aa" style={{ display: "flex" }}>
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
                                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                                        <div className="hmmain-ain1">
                                                            <div className="hmmain-ain2">
                                                                <div className="_jmxiel">호스팅 수입</div>
                                                                <div className="_13260ndj">
                                                                    <span className="_sdzt8pt" style={{ color: "#222222" }}>₩94,051
                                                                    </span>
                                                                    <span className="_guws13p" style={{ color: "#222222" }}>/박</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hmmain-ain1">
                                                            <div className="hmmain-ain2">
                                                                <div className="_jmxiel">예약 일수:</div>
                                                                <div className="_13260ndj">
                                                                    <span className="_sdzt8pt" style={{ color: "#222222" }}>24
                                                                    </span>
                                                                    <span className="_guws13p" style={{ color: "#222222" }}>박/월</span>
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
                                                <div aria-hidden="false" style={{ position: "relative", width: "100%", height: "100%" }}>

                                                    <MapContents id="Mymap" className="hmmapd1" >
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
                                                                                <Button className="_o5ir51" data-icon="true">
                                                                                    <Hostsearch />
                                                                                </Button>
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
                                                                                            <input className="_3vy1xi" id="location-query-input" aria-describedby="location-query-input-description" role="combobox" placeholder="숙소 위치는 어디인가요?" name="query" spellcheck="false" autocomplete="off" autocorrect="off" aria-haspopup="listbox" aria-expanded="false" aria-controls="autocomplete-results" aria-autocomplete="list" value="Yangcheon-gu" />
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
                                                                                                    <Hostsearch />
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
                                                    </MapContents>
                                                    <div className="_pawvzww">
                                                        <div className=" dir dir-ltr" aria-hidden="false" style={{ whiteSpace: "nowrap", position: "absolute", marginLeft: "24px", marginTop: "24px", top: "0px", left: "0px", zIndex: "1", transition: "transform 850ms cubic-bezier(0.25, 1, 0.5, 1) 0s" }}>
                                                            <div className="c15e4bhw ctbkggg dir dir-ltr" style={{ height: "40px", flexDirection: "row" }}>
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
                                                            <div className=" dir dir-ltr" aria-hidden="false" style={{ whiteSpace: "nowrap", position: "absolute", marginRight: "24px", marginTop: "24px", top: "0px", right: "0px", zIndex: "1", transition: "transform 850ms cubic-bezier(0.25, 1, 0.5, 1) 0s" }}>
                                                                <div className="c15e4bhw ctbkggg dir dir-ltr" style={{ width: "40px", flexDirection: "row" }}>
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
                        언제 어디서든 <br />호스팅하실 수 있습니다
                    </h2>
                    <div className="hmmain2-in">
                        <div className="hmmain2-img">
                            <Slider {...settings}>
                                <div class="_1oqtnba"></div>
                                {
                                    hostdummy.results.map(item => (
                                        <div><img className="htdummyimg" src={item.imgpath} />
                                        <div className="htdmytxt">{item.text}</div>
                                        </div>
                                    ))
                                }
                                
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="_22yqgp3" data-reactroot="">
                    <div className="_1nsoe13">
                        10만 명에 달하는 우크라이나 피란민에게 임시 숙소를 제공해주세요
                        <div className="_1cvivhm">
                            <Link to="/" className="_17atahn">
                                자세히 알아보기
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="_1less15w" data-reactroot="">
                    <div className="_g1tx7t">
                        <div className="_1h6n1zu" style={{ display: "inline-block", verticalAlign: "bottom", height: "auto", width: "100%", minHeight: "1px", borderRadius: "12px", role: "presentation", ariaHidden: "true" }}>
                            <img className="_792k0r1" alt="" aria-hidden="true" decoding="async" elementtiming="LCP-target" fetchpriority="low" loading="lazy" src="https://a0.muscache.com/im/pictures/93ef1829-62d1-4349-8b4a-b02ebc650a25.jpg?im_w=2560&amp;im_q=highq" data-original-uri="https://a0.muscache.com/im/pictures/93ef1829-62d1-4349-8b4a-b02ebc650a25.jpg?im_w=2560&amp;im_q=highq" style={{ verticalAlign: "bottom", borderRadius: "12px" }}></img>

                        </div>
                    </div>
                    <div className="_1ix0mx3w">
                        호스팅에 관해 궁금하신 점이 있나요? <br />
                        슈퍼호스트에게 물어보세요.
                        <div className="_90fd4d">
                            <Link to="/" className="_snbhip0">자세히 알아보기</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="hmmm">
                    <div className="_1ketzfb">
                        <div className="a8jt5op dir dir-ltr">
                            <h2>호스트를 위한 에어커버</h2>
                        </div>
                        <div className="_1h6n1zu" style={{ display: "inline-block", verticalAlign: "bottom", height: "156.5px", width: "380px", minHeight: "1px", role: "presentation", ariaHidden: "true" }}>
                            <img className="_9ofhslt" alt="" aria-hidden="true" decoding="async" elementtiming="LCP-target" fetchpriority="low" loading="lazy" src="https://a0.muscache.com/im/pictures/d3537125-14e0-48e1-b760-97490570d937.jpg" data-original-uri="https://a0.muscache.com/im/pictures/d3537125-14e0-48e1-b760-97490570d937.jpg" style={{ objectFit: "contain", verticalAlign: "bottom" }} />
                            <div className="_15p4g025" style={{ backgroundImage: "url(&quot;https://a0.muscache.com/im/pictures/d3537125-14e0-48e1-b760-97490570d937.jpg&quot;)", backgroundSize: "contain" }}>
                            </div>
                        </div>
                        <p className="_1ldjds9">호스팅 전반에 대한 보호.<br />
                            모든 예약에 항상 무⁠료⁠로&nbsp;제⁠공.<br />
                            오직 에어비앤비에서만.
                        </p>
                        <p className="_vl5d9p">호스팅 전반에 대한 보호.<br />
                            모든 예약에 항상 무⁠료⁠로&nbsp;제⁠공.<br />
                            오직 에어비앤비에서만.
                        </p>
                        <Link to="/" clasNames="_1dj2p4gk">자세히 알아보기</Link>
                    </div>
                    <div className="_1gpbeq2">
                        <div className="_1h6n1zu" style={{ display: "inline-block", verticalAlign: "bottom", height: "100%", width: "100%", minHeight: "1px", role: "presentation", ariaHidden: "true" }}>
                            <img className="_9ofhslt" alt="" aria-hidden="true" decoding="async" elementtiming="LCP-target" fetchpriority="low" loading="lazy" src="https://a0.muscache.com/im/pictures/11e10d64-867e-4dba-b0b4-896026a4f0e0.jpg?im_w=2560&amp;im_q=highq" data-original-uri="https://a0.muscache.com/im/pictures/11e10d64-867e-4dba-b0b4-896026a4f0e0.jpg?im_w=2560&amp;im_q=highq" style={{ objectFit: "contain", verticalAlign: "bottom" }} />
                            <div className="_15p4g025" style={{ backgroundImage: "url(&quot;https://a0.muscache.com/im/pictures/11e10d64-867e-4dba-b0b4-896026a4f0e0.jpg?im_w=2560&amp;im_q=highq&quot;)", backgroundSize: "contain" }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="hmmal">
                    <div className="hmmal23">
                        <h2 className="_1an1ibm">
                            <div>에어비앤비에서 <br />호스팅을 시작해보세요</div>
                        </h2>
                        <div className="_1mom3v">
                            <div>에어비앤비 호스트가 되어보세요. 에어비앤비가 <br />모든 단계에서 도와드립니다.</div>
                        </div>
                        <div className="_1j4bomsw">
                            <Link aria-label="호스팅 시작하기" data-testid="lys-intro-video-cta" to="/" className="_108mstlv">
                                <span className="tjxdvlu dir dir-ltr">
                                    <span className="t12u7nq4 dir dir-ltr" style={{ backgroundPosition: "calc((100 - var(--mouse-x, 0)) * 1%) calc((100 - var(--mouse-y, 0)) * 1%)" }}>
                                    </span>
                                </span>
                                <span className="c4wd1yj dir dir-ltr">시작하기</span>
                            </Link>
                        </div>
                    </div>
                    <div className="_kg6214">
                        <div className="_flkdv3">
                            <video className="_e2l2kr" autoplay="" aria-label="세 명의 호스트가 게스트가 도착하기 전에 숙소를 준비합니다. 첫 번째 호스트인 한 여성이 갓 구운 빵을 내놓습니다. 두 번째 호스트인 남성은 게스트를 위한 환영 카드를 적고 있습니다. 세 번째 호스트인 여성은 레몬이 담긴 그릇을 테이블 위에 놓습니다." crossorigin="anonymous" playsinline="" preload="none" style={{ objectFit: "cover" }}>
                                <source src="https://a0.muscache.com/v/9a/7a/9a7ad4a1-cfab-5f7d-96e6-fda8abceabe7/9a7ad4a1cfab5f7d96e6fda8abceabe7_4000k_1.mp4?imformat=h265" type="video/mp4; codecs=hevc" />
                                <source src="https://a0.muscache.com/v/9a/7a/9a7ad4a1-cfab-5f7d-96e6-fda8abceabe7/9a7ad4a1cfab5f7d96e6fda8abceabe7_4000k_1.mp4" type="video/mp4" />
                            </video>
                            <div className="_tgyx5c"></div>
                            <div className="_7rkbxz">
                                <button aria-label="재생" type="button" className="_1osbyo4">
                                    <span className=" dir dir-ltr">
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

const MapContents = styled.div`
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  cursor: pointer !important;
  display: inline-block !important;
  margin: 0 !important;
  position: relative !important;
  text-align: center !important;
  text-decoration: none !important;
  width: auto !important;
  touch-action: manipulation !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 600 !important;
  border-radius: 8px !important;
  border-width: 1px !important;
  border-style: solid !important;
  outline: none !important;
  padding-top: 14px !important;
  padding-bottom: 14px !important;
  padding-left: 24px !important;
  padding-right: 24px !important;
  border: none;
  border-color: #FF385C;
  background: -webkit-linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%) !important;
  background: -moz-linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%) !important;
  background: linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%) !important;

`;