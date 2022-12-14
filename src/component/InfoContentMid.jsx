import React, { useState } from "react";
import styled from "styled-components";
/*global kakao*/
import { ReactComponent as Etc } from '../images/Etc.svg';
import { ReactComponent as Designer } from '../images/Designer.svg';
import { ReactComponent as Calendar } from '../images/Calendar.svg';
import { ReactComponent as Press } from '../images/Press.svg';
import { ReactComponent as Aircover } from '../images/Aircover.svg';
import { ReactComponent as Bed } from '../images/Bed.svg';
import { ReactComponent as Facilities1 } from '../images/Facilities1.svg';
import { ReactComponent as Facilities2 } from '../images/Facilities2.svg';
import { ReactComponent as Facilities3 } from '../images/Facilities3.svg';
import { ReactComponent as Facilities4 } from '../images/Facilities4.svg';
import { ReactComponent as Facilities5 } from '../images/Facilities5.svg';
import { ReactComponent as Facilities6 } from '../images/Facilities6.svg';
import { ReactComponent as Facilities7 } from '../images/Facilities7.svg';
import { ReactComponent as Facilities8 } from '../images/Facilities8.svg';
import { ReactComponent as Facilities9 } from '../images/Facilities9.svg';
import { ReactComponent as Facilities10 } from '../images/Facilities10.svg';
import InfoNav from './InfoNav';
import { ReactComponent as Star } from '../images/Star.svg';
import { ReactComponent as Plus } from '../images/Plus.svg';
import { ReactComponent as Minus } from '../images/Minus.svg';
import { ReactComponent as Certific } from '../images/Certific.svg';
import { ReactComponent as Safe } from '../images/Safe.svg';
import { Link } from "react-router-dom";
import { ReactComponent as Clock } from '../images/Clock.svg';
import { ReactComponent as Smork } from '../images/Smork.svg';
import { ReactComponent as Pet } from '../images/Pet.svg';
import { ReactComponent as Party } from '../images/Party.svg';
import { ReactComponent as More } from '../images/More.svg';
import { DateRangePicker } from 'react-date-range';
import { addDays } from "date-fns"
import ko from 'date-fns/locale/ko';



export default function InfoContentMid() {
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

    //??????
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
      ]);

    return (
        <div>
            <div className="rmctt3-inner">
                <div className="rmctt3-in">
                    <div className="rmctt3-in1">
                        <div className="rmctt3-in11">
                            <section>
                                <div>
                                    <div className="rmctt3-in11-1">
                                        <div className="rmctt3-inin">
                                            <div className="rmctt3-inin-1">
                                                Wayan?????? ??????????????? ?????? ??????
                                            </div>
                                            <div className="rmctt3-inin-2">
                                                <span className="rmctt3-in2-txt">
                                                    ?????? ?????? 4???
                                                </span>
                                                <span className="s1b4clln dir dir-ltr" aria-hidden="true"> ?? </span>
                                                <span className="rmctt3-in2-txt">
                                                    ?????? 2???
                                                </span>
                                                <span className="s1b4clln dir dir-ltr" aria-hidden="true"> ?? </span>
                                                <span className="rmctt3-in2-txt">
                                                    ?????? 2???
                                                </span>
                                                <span className="s1b4clln dir dir-ltr" aria-hidden="true"> ?? </span>
                                                <span className="rmctt3-in2-txt">
                                                    ?????? 2???
                                                </span>
                                            </div>
                                        </div>
                                        <div className="rmctt3-inin2">
                                            <div className="rmctt3-inin2-1">
                                                <button className="rmctt3-inin2-1btn">
                                                    <img className="_9ofhsl" aria-hidden="true" alt="Wayan?????? ????????????????????????. Wayan?????? ?????? ????????? ???????????????." decoding="async" elementtiming="LCP-target" src="https://a0.muscache.com/im/pictures/user/237512e2-5c40-40e9-86de-6a7c84e6882b.jpg?im_w=240" data-original-uri="https://a0.muscache.com/im/pictures/user/237512e2-5c40-40e9-86de-6a7c84e6882b.jpg?im_w=240" style={{ objectFit: "cover", verticalAlign: "bottom" }} />
                                                </button>
                                                <div className="rmctt3-etc">
                                                    <Etc />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="rmctt3-in2a">
                        <div className="rmctt3-in2-in">
                            <div className="rmctt3-in2-in1">
                                <div className="rmctt3-in2-in11">
                                    <Designer />
                                </div>
                                <div className="rmctt3-in2-in12">
                                    <div className="rmctt3-in2-in12-1">????????????:</div>
                                    <div className="rmctt3-in2-in12-2">Ibuku Bamboo Architecture and Design</div>
                                </div>
                            </div>
                            <div className="rmctt3-in2-in1">
                                <div className="rmctt3-in2-in11">
                                    <Press />
                                </div>
                                <div className="rmctt3-in2-in12">
                                    <div className="rmctt3-in2-in12-1">?????? ??????:</div>
                                    <div className="rmctt3-in2-in12-2">Cond?? Nast Traveler, October 2019</div>
                                    <div className="rmctt3-in2-in12-2">Home Crux, August 2019</div>
                                </div>
                            </div>
                            <div className="rmctt3-in2-in1">
                                <div className="rmctt3-in2-in11">
                                    <Calendar />
                                </div>
                                <div className="rmctt3-in2-in121">
                                    <div className="rmctt3-in2-in12-1">1??? 20??? ????????? ????????? ???????????? ??? ????????????.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rmctt3-in3">
                        <div className="rmctt3-in3-in">
                            <div className="rmctt3-in3-in1">
                                <img className="l1li2ovm dir dir-ltr" src="https://a0.muscache.com/im/pictures/51a7f002-b223-4e05-a2af-0d4838411d92.jpg" alt="????????????" />
                            </div>
                            <div className="rmctt3-in3-in2">
                                ?????? ???????????? ???????????? ????????? ??????????????? ?????? ????????? ???????????? ?????? ?????? ?????? ???????????? ????????? ?????? ????????? ????????? ?????? ?????? ???????????????&nbsp;???????????????.
                            </div>
                            <button className="rmctt3-in3-in3">??? ????????????</button>

                        </div>
                    </div>
                    <div className="rmctt3-in4">
                        <div className="rmctt3-in4-in">
                            <div className="rmctt3-in4-in1">
                                <Aircover />
                            </div>
                            <div className="rmctt3-in4-in2">?????? ????????? ?????? ?????????????????????.</div>
                            <button className="rmctt3-in4-in3">?????? ??????</button>
                        </div>
                    </div>
                    <div className="rmctt3-in5">
                        <div className="rmctt3-in5-in">
                            <div className="rmctt3-in5-in2">
                                ????????? ???????????? ????????? ???????????? ?????? ???????????? ????????? ????????? ?????? ?????? ????????? ???????????? ????????? ?????? ????????? ????????????. ????????? ???????????? ???????????? 25???, ???????????? 35??? ????????? ????????????.
                                <br />
                                <br />
                                ????????? ????????? ??????, ??????????????? ????????? (????????? ?????? ??????) ??? ???????????? ???????????? ????????? ??? 10?????? ??? ???????????????. ?????? ?????? ????????? ????????????.
                                <br />
                                <br />

                            </div>
                            <button className="rmctt3-in5-in3">
                                ??? ?????? '{'>'}'
                            </button>
                        </div>
                    </div>
                    <div className="rmctt3-in6">
                        <div className="rmctt3-in6-in">
                            <div className="rmctt3-in6-in1">
                                ?????? ??????
                            </div>
                            <div className="rmctt3-in6-in2">
                                <div className="rmctt3-in6-in21">
                                    <div className="rmctt3-in6-in21-1">
                                        <div className="rmctt3-in6-in21-f">
                                            <Bed />
                                        </div>
                                        <div className="rmctt3-in6-in21-m">
                                            ?????? 1
                                        </div>
                                        <div className="rmctt3-in6-in21-e">
                                            ?????? ?????? 1???
                                        </div>
                                    </div>
                                </div>
                                <div className="rmctt3-in6-in21">
                                    <div className="rmctt3-in6-in21-1">
                                        <div className="rmctt3-in6-in21-f">
                                            <Bed />
                                        </div>
                                        <div className="rmctt3-in6-in21-m">
                                            ?????? 2
                                        </div>
                                        <div className="rmctt3-in6-in21-e">
                                            ?????? ?????? 1???
                                        </div>
                                    </div>
                                </div>
                                <div className="rmctt3-in6-in21">
                                    <div className="rmctt3-in6-in21-1">
                                        <div className="rmctt3-in6-in21-f">
                                            <Bed />Name
                                        </div>
                                        <div className="rmctt3-in6-in21-m">
                                            ?????? ??????
                                        </div>
                                        <div className="rmctt3-in6-in21-e">
                                            ?????? 1???
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rmctt3-in7">
                        <div className="rmctt3-in7-in">
                            <div className="rmctt3-in7-in1">
                                ?????? ????????????
                            </div>
                            <div className="rmctt3-in7-in2">
                                <div className="rmctt3-in7-inner1">
                                    <div className="rmctt3-in7-inner1-div">
                                        <div>??????</div>
                                        <div className="rmctt3-in7-inner1-div2">
                                            <Facilities1 />
                                        </div>
                                    </div>
                                </div>
                                <div className="rmctt3-in7-inner1">
                                    <div className="rmctt3-in7-inner1-div">
                                        <div>?????? ?????????</div>
                                        <div className="rmctt3-in7-inner1-div2">
                                            <Facilities2 />
                                        </div>
                                    </div>
                                </div>
                                <div className="rmctt3-in7-inner1">
                                    <div className="rmctt3-in7-inner1-div">
                                        <div>?????? ?????? ??????</div>
                                        <div className="rmctt3-in7-inner1-div2">
                                            <Facilities3 />
                                        </div>
                                    </div>
                                </div>
                                <div className="rmctt3-in7-inner1">
                                    <div className="rmctt3-in7-inner1-div">
                                        <div>?????? ??? ?????? ??????</div>
                                        <div className="rmctt3-in7-inner1-div2">
                                            <Facilities4 />
                                        </div>
                                    </div>
                                </div>
                                <div className="rmctt3-in7-inner1">
                                    <div className="rmctt3-in7-inner1-div">
                                        <div>?????? ?????????</div>
                                        <div className="rmctt3-in7-inner1-div2">
                                            <Facilities5 />
                                        </div>
                                    </div>
                                </div>
                                <div className="rmctt3-in7-inner1">
                                    <div className="rmctt3-in7-inner1-div">
                                        <div>?????????</div>
                                        <div className="rmctt3-in7-inner1-div2">
                                            <Facilities6 />
                                        </div>
                                    </div>
                                </div>
                                <div className="rmctt3-in7-inner1">
                                    <div className="rmctt3-in7-inner1-div">
                                        <div>?????? ????????? ?????? ?????????</div>
                                        <div className="rmctt3-in7-inner1-div2">
                                            <Facilities7 />
                                        </div>
                                    </div>
                                </div>
                                <div className="rmctt3-in7-inner1">
                                    <div className="rmctt3-in7-inner1-div">
                                        <div>?????????</div>
                                        <div className="rmctt3-in7-inner1-div2">
                                            <Facilities8 />
                                        </div>
                                    </div>
                                </div>
                                <div className="rmctt3-in7-inner1">
                                    <div className="rmctt3-in7-inner1-div">
                                        <div style={{ textDecoration: "line-through" }}>??????????????? ?????????</div>
                                        <div className="rmctt3-in7-inner1-div2">
                                            <Facilities9 />
                                        </div>
                                    </div>
                                </div>
                                <div className="rmctt3-in7-inner1">
                                    <div className="rmctt3-in7-inner1-div">
                                        <div style={{ textDecoration: "line-through" }}>???????????????</div>
                                        <div className="rmctt3-in7-inner1-div2">
                                            <Facilities10 />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rmctt3-in7-in3">
                                <button type="button" className="rmctt3-in7-in3-btn">???????????? 20??? ?????? ??????</button>
                            </div>
                        </div>
                    </div>
                    <div className="rmctt3-in8">
                        <div className="rmctt3-in8-in">
                            <div className="rmctt3-in8-inner">
                                <div className="rmctt3-in8-in1">
                                    Abiansemal?????? 5???
                                </div>
                                <div className="rmctt3-in8-in2">
                                    2023??? 2??? 19??? - 2023??? 2??? 24???
                                </div>
                            </div>
                            <div className="rmctt3-in8-inner2">
                                <div className="rmctt3-in8-inner2-in">
                                    <div className="rmctt3-in8-in2-in">
                                        <DateRangePicker
                                            editableDateInputs={true}
                                            onChange={(item) => setState([item.selection])}
                                            showSelectionPreview={true}
                                            moveRangeOnFirstSelection={false}
                                            ranges={state}
                                            months={2}
                                            locale={ko}
                                            direction="horizontal"
                                        >
                                        </DateRangePicker>
                                    </div>
                                    <div className="rmctt3-in8-in2-in2">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <InfoNav />

            </div>
            <div className="rmctt3-inner2">
                <div className="rmctt3-a">
                    <div className="rmctt3-ain">
                        <div className="rmctt3-inff">
                            <section>
                                <div className="rmctt3in">
                                    <span style={{ display: "inline", marginRight: "8px", width: "16px", height: "16px" }}>
                                        <Star style={{ width: "16px", height: "16px" }} />
                                    </span>
                                    <span style={{ display: "inline" }}>
                                        4.87 ?? ?????? 143???
                                    </span>
                                </div>
                                <div className="rmctt3-in2">
                                    <div className="rmctt3-in2-in2">
                                        <div className="rmctt3in2">
                                            <div className="rmctt3in2-f">
                                                <div style={{ marginBottom: "16px" }}>
                                                    <div className="rmctt3in2-fin">
                                                        <div className="rmctt3in2-fin-txt">?????????</div>
                                                        <div className="rmctt3in2-fin-div">
                                                            <div className="_7pay" aria-label="5.0??? ????????? 4.8???" role="img">
                                                                <span className="_1wsvxly" style={{ width: "96%" }}>
                                                                </span>
                                                            </div>
                                                            <span className="_4oybiu" aria-hidden="true">4.8</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rmctt3in2-f">
                                                <div style={{ marginBottom: "16px" }}>
                                                    <div className="rmctt3in2-fin">
                                                        <div className="rmctt3in2-fin-txt">?????????</div>
                                                        <div className="rmctt3in2-fin-div">
                                                            <div className="_7pay" aria-label="5.0??? ????????? 4.8???" role="img">
                                                                <span className="_1wsvxly" style={{ width: "96%" }}>
                                                                </span>
                                                            </div>
                                                            <span className="_4oybiu" aria-hidden="true">4.8</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rmctt3in2-f">
                                                <div style={{ marginBottom: "16px" }}>
                                                    <div className="rmctt3in2-fin">
                                                        <div className="rmctt3in2-fin-txt">????????????</div>
                                                        <div className="rmctt3in2-fin-div">
                                                            <div className="_7pay" aria-label="5.0??? ????????? 4.8???" role="img">
                                                                <span className="_1wsvxly" style={{ width: "96%" }}>
                                                                </span>
                                                            </div>
                                                            <span className="_4oybiu" aria-hidden="true">4.8</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rmctt3in2-f">
                                                <div style={{ marginBottom: "16px;" }}>
                                                    <div className="rmctt3in2-fin">
                                                        <div className="rmctt3in2-fin-txt">??????</div>
                                                        <div className="rmctt3in2-fin-div">
                                                            <div className="_7pay" aria-label="5.0??? ????????? 4.8???" role="img">
                                                                <span className="_1wsvxly" style={{ width: "96%" }}>
                                                                </span>
                                                            </div>
                                                            <span className="_4oybiu" aria-hidden="true">4.8</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rmctt3in2-f">
                                                <div style={{ marginBottom: "16px;" }}>
                                                    <div className="rmctt3in2-fin">
                                                        <div className="rmctt3in2-fin-txt">?????????</div>
                                                        <div className="rmctt3in2-fin-div">
                                                            <div className="_7pay" aria-label="5.0??? ????????? 4.8???" role="img">
                                                                <span className="_1wsvxly" style={{ width: "96%" }}>
                                                                </span>
                                                            </div>
                                                            <span className="_4oybiu" aria-hidden="true">4.8</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rmctt3in2-f">
                                                <div style={{ marginBottom: "16px;" }}>
                                                    <div className="rmctt3in2-fin">
                                                        <div className="rmctt3in2-fin-txt">?????? ?????? ?????????</div>
                                                        <div className="rmctt3in2-fin-div">
                                                            <div className="_7pay" aria-label="5.0??? ????????? 4.8???" role="img">
                                                                <span className="_1wsvxly" style={{ width: "96%" }}>
                                                                </span>
                                                            </div>
                                                            <span className="_4oybiu" aria-hidden="true">4.8</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rmctt3-in2">
                                    <div className="rmctt3-in33">
                                        <div className="rmctt3in3" role="listitem">
                                            <div style={{ marginBottom: "40px" }}>
                                                <div className="rmc3-in3f">
                                                    <div className="rmc3ff">
                                                        <Link to="https://www.airbnb.co.kr/login?redirect_url=/users/show/469233392" className="rmc3ff-a">
                                                            <img className="_9ofhsl1" aria-hidden="true" alt="??????" decoding="async" elementtiming="LCP-target" src="https://a0.muscache.com/im/pictures/user/7b7f0639-142a-4189-af4a-47b30d482e20.jpg?im_w=240" data-original-uri="https://a0.muscache.com/im/pictures/user/7b7f0639-142a-4189-af4a-47b30d482e20.jpg?im_w=240" style={{ objectFit: "cover", verticalAlign: "bottom" }} />
                                                        </Link>
                                                    </div>
                                                    <div className="rmc3fs">
                                                        <div className="rmc3fs-name">??????</div>
                                                        <div className="rmc3fs-date"> 2022??? 8???</div>
                                                    </div>
                                                </div>
                                                <div className="rmc3-ins">
                                                    <div style={{ lineHeight: "24px" }}>
                                                        <span>
                                                            <span className="ll4r2n">
                                                                ??????????????? ?????? ?????? ????????? ???????????? ????????? ??? ??????????????????
                                                                <br />
                                                                ???????????? ????????? ????????? ???????????????
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rmctt3in3" role="listitem">
                                            <div style={{ marginBottom: "40px" }}>
                                                <div className="rmc3-in3f">
                                                    <div className="rmc3ff">
                                                        <Link to="https://www.airbnb.co.kr/login?redirect_url=/users/show/469233392" className="rmc3ff-a">
                                                            <img className="_9ofhsl1" aria-hidden="true" alt="Jay" decoding="async" elementtiming="LCP-target" src="https://a0.muscache.com/im/pictures/user/92d53241-61f2-47ce-a18d-2a6efa58ae8a.jpg?im_w=240" data-original-uri="https://a0.muscache.com/im/pictures/user/92d53241-61f2-47ce-a18d-2a6efa58ae8a.jpg?im_w=240" style={{ objectFit: "cover", verticalAlign: "bottom" }} />
                                                        </Link>
                                                    </div>
                                                    <div className="rmc3fs">
                                                        <div className="rmc3fs-name">Jay</div>
                                                        <div className="rmc3fs-date"> 2020??? 10???</div>
                                                    </div>
                                                </div>
                                                <div className="rmc3-ins">
                                                    <div style={{ lineHeight: "24px" }}>
                                                        <span>
                                                            <span className="ll4r2n">
                                                                Aura House??? ?????? ????????? ?????????????????????. ???????????? ???????????? ???????????????????????????. ???????????? Wayan?????? ????????????, Febri??? ????????? ????????? ????????????, ????????? ??????????????? ???????????? ????????????...

                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="rmc3-more">
                                                        <button className="rmc3-more-btn">
                                                            <span>??? ??????</span>
                                                            <span className="atm_gz">
                                                                <More />
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rmctt3in3" role="listitem">
                                            <div style={{ marginBottom: "40px" }}>
                                                <div className="rmc3-in3f">
                                                    <div className="rmc3ff">
                                                        <Link to="https://www.airbnb.co.kr/login?redirect_url=/users/show/469233392" className="rmc3ff-a">
                                                            <img className="_9ofhsl1" aria-hidden="true" alt="Inhye" decoding="async" elementtiming="LCP-target" src="https://a0.muscache.com/im/pictures/user/ff3653b3-60d8-458a-b6ca-559ba599a2d8.jpg?im_w=240" data-original-uri="https://a0.muscache.com/im/pictures/user/ff3653b3-60d8-458a-b6ca-559ba599a2d8.jpg?im_w=240" style={{ objectFit: "cover", verticalAlign: "bottom" }} />
                                                        </Link>
                                                    </div>
                                                    <div className="rmc3fs">
                                                        <div className="rmc3fs-name">Inhye</div>
                                                        <div className="rmc3fs-date"> 2022??? 7???</div>
                                                    </div>
                                                </div>
                                                <div className="rmc3-ins">
                                                    <div style={{ lineHeight: "24px" }}>
                                                        <span>
                                                            <span className="ll4r2n">
                                                                ????????? ????????? ????????? ????????? ??????????????? ?????? ??? ????????????. ?????? ???????????? ?????? ???????????????. ????????? ???????????? ?????? ????????? ????????????. ??? ???????????? ???????????? ????????????. ????????? ?????????...
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="rmc3-more">
                                                        <button className="rmc3-more-btn">
                                                            <span>??? ??????</span>
                                                            <span className="atm_gz">
                                                                <More />
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rmctt3in3" role="listitem">
                                            <div style={{ marginBottom: "40px" }}>
                                                <div className="rmc3-in3f">
                                                    <div className="rmc3ff">
                                                        <Link to="https://www.airbnb.co.kr/login?redirect_url=/users/show/469233392" className="rmc3ff-a">

                                                            <img className="_9ofhsl1" aria-hidden="true" alt="Sanna" decoding="async" elementtiming="LCP-target" src="https://a0.muscache.com/im/pictures/user/a59a7111-6c2a-4066-9fc4-93240069775e.jpg?im_w=240" data-original-uri="https://a0.muscache.com/im/pictures/user/a59a7111-6c2a-4066-9fc4-93240069775e.jpg?im_w=240" style={{ objectFit: "cover", verticalAlign: "bottom" }} />
                                                        </Link>
                                                    </div>
                                                    <div className="rmc3fs">
                                                        <div className="rmc3fs-name">Sanna</div>
                                                        <div className="rmc3fs-date"> 2022??? 8???</div>
                                                    </div>
                                                </div>
                                                <div className="rmc3-ins">
                                                    <div style={{ lineHeight: "24px" }}>
                                                        <span>
                                                            <span className="ll4r2n">
                                                                ????????? ???????????? ??? ?????? ?????? ????????????????????????. ????????? ???????????? ????????? ?????? ?????? ?????????????????????. ???????????? ????????????????????? ??????????????????. ?????? ?????? ?????? 10?????? ?????????...
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="rmc3-more">
                                                        <button className="rmc3-more-btn">
                                                            <span>??? ??????</span>
                                                            <span className="atm_gz">
                                                                <More />
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rmctt3in3" role="listitem">
                                            <div style={{ marginBottom: "40px" }}>
                                                <div className="rmc3-in3f">
                                                    <div className="rmc3ff">
                                                        <Link to="https://www.airbnb.co.kr/login?redirect_url=/users/show/469233392" className="rmc3ff-a">
                                                            <img className="_9ofhsl1" aria-hidden="true" alt="Kodchawan" decoding="async" elementtiming="LCP-target" src="https://a0.muscache.com/im/pictures/user/8e3e1f99-e436-41fa-a910-d53c7ee13ac7.jpg?im_w=240" data-original-uri="https://a0.muscache.com/im/pictures/user/8e3e1f99-e436-41fa-a910-d53c7ee13ac7.jpg?im_w=240" style={{ objectFit: "cover", verticalAlign: "bottom" }} />
                                                        </Link>
                                                    </div>
                                                    <div className="rmc3fs">
                                                        <div className="rmc3fs-name">Kodchawan</div>
                                                        <div className="rmc3fs-date"> 2022??? 8???</div>
                                                    </div>
                                                </div>
                                                <div className="rmc3-ins">
                                                    <div style={{ lineHeight: "24px" }}>
                                                        <span>
                                                            <span className="ll4r2n">
                                                                ?????? ??????????????????! ?????? ?????? ??? ???????????? ?????? ????????? ??? ???????????? ?????????, ?????? ????????? ???????????? ????????????. ????????? ?????? ????????? ????????? ????????????. ????????? ?????? ????????? ?????? ????????? ??????...
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="rmc3-more">
                                                        <button className="rmc3-more-btn">
                                                            <span>??? ??????</span>
                                                            <span className="atm_gz">
                                                                <More />
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rmctt3in3" role="listitem">
                                            <div style={{ marginBottom: "40px" }}>
                                                <div className="rmc3-in3f">
                                                    <div className="rmc3ff">
                                                        <Link to="https://www.airbnb.co.kr/login?redirect_url=/users/show/469233392" className="rmc3ff-a">
                                                            <img className="_9ofhsl1" aria-hidden="true" alt="Alexandra" decoding="async" elementtiming="LCP-target" src="https://a0.muscache.com/im/pictures/user/997402ba-c0a1-4888-adee-e40532204a9a.jpg?im_w=240" data-original-uri="https://a0.muscache.com/im/pictures/user/997402ba-c0a1-4888-adee-e40532204a9a.jpg?im_w=240" style={{ objectFit: "cover", verticalAlign: "bottom" }} />
                                                        </Link>
                                                    </div>
                                                    <div className="rmc3fs">
                                                        <div className="rmc3fs-name">Alexandra</div>
                                                        <div className="rmc3fs-date"> 2022??? 8???</div>
                                                    </div>
                                                </div>
                                                <div className="rmc3-ins">
                                                    <div style={{ lineHeight: "24px" }}>Name
                                                        <span>
                                                            <span className="ll4r2n">
                                                                ????????? ??????????????? ????????? ????????? ???????????????. ?????? ????????? ????????????. ??? ?????? ????????? ?????? ??? ?????? ????????? ?????? ??????????????????!  ???????????? ????????? ??????????????? ????????? ??????????????????. ?????????...
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="rmc3-more">
                                                        <button className="rmc3-more-btn">
                                                            <span>??? ??????</span>
                                                            <span className="atm_gz">
                                                                <More />
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="stu4md" style={{ marginTop: "0" }}>
                                        <button className="rmctt3in4-btn" aria-label="?????? 143??? ?????? ??????, ?????? ????????? ?????????." type="button">?????? 143??? ?????? ??????</button>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rmctt3-inner3">
                <div className="rmctt3in4">
                    <div className="rmctt3in4-inner">
                        <div className="rmctt3in4-in3">
                            <div>
                                <section>
                                    <div className="rmctt3in4-in3-title">
                                        <h2 className="rmctt3in4-in3-title2">????????? ??????</h2>
                                    </div>
                                    <div className="rmctt3in4-in31">
                                        <MapContents id="Mymap">
                                            <div className="rmctt3in4-in31s">
                                                <div className="sarm123" style={{ display: "flex", flexDirection: "row" }}>
                                                    <div className="rmctt3in4-in31sf">
                                                        <input type="checkbox" className="rmctt3in4-in31sfin" />

                                                    </div>
                                                    <span className="rmctt3in4-in31sftxt">????????????</span>
                                                </div>
                                            </div>
                                            <div className="rmctt3in4-in31t">
                                                <div className="rmctt3in4-in31tinf">
                                                    <div style={{
                                                        display: "flex", flexDirection: "column", width: "40px", backgroundColor: "#fff", boxShadow: "0px 6px 16px rbga(0,0,0,0.12)",
                                                        borderRadius: "8px"
                                                    }}>
                                                        <button className="rmctt3in4-in31tinf-btn">
                                                            <Plus />
                                                        </button>
                                                        <div className="c1fisx1o dir dir-ltr"></div>
                                                        <button className="rmctt3in4-in31tinf-btn2">
                                                            <Minus />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="rmctt3in4-in31tins"></div>
                                            </div>
                                        </MapContents>
                                    </div>
                                    <div className="rmc3-in7">
                                        <div className="rmc3in7">
                                            <div style={{ paddingLeft: "8px", paddingRight: "8px" }}>
                                                <div>
                                                    <div className="rmc3in7f">
                                                        <div className="rmc3in7ff">Abiansemal, ??????, ???????????????</div>
                                                    </div>
                                                    <div className="rmc3in7s">
                                                        <span><span className="ll4r2nl dir dir-ltr">
                                                            ???????????? ????????? ?????? ???????????? ?????? ????????? ?????? ??? ????????????.
                                                            <br /><br />
                                                            - ?????? ?????? - ?????? 5??? ??????...
                                                        </span></span>
                                                    </div>
                                                    <div className="rmc3-more">
                                                        <button className="rmc3-more-btn" style={{ marginTop: "16px !important" }}>
                                                            <span>??? ??????</span>
                                                            <span className="atm_gz">
                                                                <More />
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rmctt3-inner4">
                <div className="rmctt3-a">
                    <div className="rmctt3-ain">
                        <div className="rmctt3-inff">
                            <section>
                                <div className="rmc3-in3f">
                                    <div className="rmc3ff" style={{ width: "64px", height: "64px" }}>
                                        <Link to="https://www.airbnb.co.kr/login?redirect_url=/users/show/469233392" className="rmc3ff-a">
                                            <img className="_9ofhsl12" aria-hidden="true" alt="Wayan?????? ????????????????????????. Wayan?????? ?????? ????????? ???????????????." decoding="async" elementtiming="LCP-target" src="https://a0.muscache.com/im/pictures/user/237512e2-5c40-40e9-86de-6a7c84e6882b.jpg?im_w=240" data-original-uri="https://a0.muscache.com/im/pictures/user/237512e2-5c40-40e9-86de-6a7c84e6882b.jpg?im_w=240" style={{ objectFit: "cover", verticalAlign: "bottom" }} />
                                        </Link>
                                        <div className="rmctt3-etc">
                                            <Etc />
                                        </div>
                                    </div>

                                    <div className="rmc3fs">
                                        <h2 style={{ margin: "0" }}>?????????: Wayan???</h2>
                                        <div className="rmc3fs-date" style={{ paddingTop: "8px", color: "#717171" }}>?????? ?????????: 2019??? 2???
                                        </div>
                                    </div>
                                </div>
                                <div className="rmc3-in3s">
                                    <div style={{ paddingRight: "8px", paddingLeft: "8px" }}>
                                        <div className="rmc3in3s1">
                                            <div className="rmc3in3s1f">
                                                <div className="rmc3in3s1f-img">
                                                    <Star />
                                                </div>
                                                <div className="rmc3in3s1f-txt">?????? 438???</div>
                                            </div>
                                            <div className="rmc3in3s1f">
                                                <div className="rmc3in3s1f-img">
                                                    <Certific />
                                                </div>
                                                <div className="rmc3in3s1f-txt">?????? ?????? ??????</div>
                                            </div>
                                            <div className="rmc3in3s1f">
                                                <div className="rmc3in3s1f-img">
                                                    <span className="_8tbpu3" aria-hidden="true">????</span>
                                                </div>
                                                <div className="rmc3in3s1f-txt">???????????????</div>
                                            </div>
                                        </div>
                                        <div className="rmc3in3s2">
                                            <div className="rmc3in3s2-tit">Wayan?????? ????????????????????????.</div>
                                            <div className="rmc3in3s2-txt">?????????????????? ????????? ????????? ?????? ????????? ???????????? ???????????? ???????????? ????????? ????????? ??? ????????? ????????? ????????? ??????????????????.</div>
                                        </div>
                                        <div className="rmc3in3s3">
                                            <div className="rmc3in3s3-txt">?????????: 100%</div>
                                            <div className="rmc3in3s3-txt">?????? ??????: 1?????? ??????</div>
                                        </div>
                                        <div className="rmc3in3s4">
                                            <div className="stu4md" style={{ marginTop: "0" }}>
                                                <button className="rmctt3in4-btn" type="button">??????????????? ????????????</button>
                                            </div>
                                        </div>
                                        <div className="rmc3in3s5">
                                            <div className="rmc3in3s5-div">
                                                <div className="rmc3in3s5-img">
                                                    <Safe />
                                                </div>
                                                <div className="rmc3in3s5-txt">
                                                    ????????? ????????? ?????? ??????????????? ??????????????? ??? ???????????? ??????????????? ????????? ????????? ?????????.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rmctt3-inner5">
                <div className="rmctt3-a">
                    <div className="rmctt3-ain">
                        <div className="rmctt3-inff">

                            <div style={{ paddingBottom: "24px", height: "50px" }}>
                                <section>
                                    <h2 style={{ fontSize: "22px", fontWeight: "600", lineHeight: "26px" }}>
                                        ??????????????? ??? ??????
                                    </h2>
                                </section>
                            </div>
                            <div className="rmctt3-in8">
                                <div className="rmctt3-in8f">
                                    <div>
                                        <div className="rmctt3-in8ss">
                                            <div style={{ marginBottom: "12px" }}>
                                                <div style={{ fontSize: "16px", fontWeight: "600", lineHeight: "20px", marginBottom: "12px" }}>?????? ????????????</div>
                                                <div className="rmctt3in8s">
                                                    <div className="rmctt3in8s-img">
                                                        <Clock />
                                                    </div>
                                                    <div className="rmctt3in8s-txt">
                                                        ?????????: ?????? 3:00 - ?????? 5:00
                                                    </div>
                                                </div>
                                                <div className="rmctt3in8s">
                                                    <div className="rmctt3in8s-img">
                                                        <Clock />
                                                    </div>
                                                    <div className="rmctt3in8s-txt">
                                                        ???????????? ??????: ?????? 11:00
                                                    </div>
                                                </div>
                                                <div className="rmctt3in8s">
                                                    <div className="rmctt3in8s-img">
                                                        <Smork />
                                                    </div>
                                                    <div className="rmctt3in8s-txt">
                                                        ?????? ??????
                                                    </div>
                                                </div>
                                                <div className="rmctt3in8s">
                                                    <div className="rmctt3in8s-img">
                                                        <Pet />
                                                    </div>
                                                    <div className="rmctt3in8s-txt">
                                                        ???????????? ?????? ??????
                                                    </div>
                                                </div>
                                                <div className="rmctt3in8s">
                                                    <div className="rmctt3in8s-img">
                                                        <Party />
                                                    </div>
                                                    <div className="rmctt3in8s-txt">
                                                        ????????? ????????? ??????
                                                    </div>
                                                </div>
                                                <div className="rmc3-more" style={{ marginTop: "24px" }}>
                                                    <button className="rmc3-more-btn" style={{ marginTop: "16px !important" }}>
                                                        <span>??? ??????</span>
                                                        <span className="atm_gz">
                                                            <More />
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rmctt3-in8f">
                                    <div>
                                        <div className="rmctt3-in8ss">
                                            <div style={{ marginBottom: "12px" }}>
                                                <div style={{ fontSize: "16px", fontWeight: "600", lineHeight: "20px", marginBottom: "12px" }}>????????? ??????</div>
                                                <div className="rmctt3in8s">
                                                    <div className="rmctt3in8s-img">
                                                        <span className="_8tbpu3" style={{ marginRight: "16.8px;" }} aria-hidden="true">????</span>
                                                    </div>
                                                    <div className="rmctt3in8s-txt">
                                                        ??????????????? ?????????19 ?????? ????????? ??????????????? ?????????.
                                                    </div>
                                                </div>
                                                <div className="rmctt3in8s">
                                                    <div className="rmctt3in8s-img">
                                                        <span className="_8tbpu3" style={{ marginRight: "16.8px" }} aria-hidden="true">????</span>
                                                    </div>
                                                    <span className="rmctt3in8s-txt">
                                                        ??????????????? ????????? ?????? ?????? ?????? ??????
                                                        <Link to="https://www.airbnb.co.kr/login?redirect_url=/users/show/469233392" target="_blank" className="bi61u5q v18vkvko dir dir-ltr">??? ??????</Link>
                                                    </span>
                                                </div>
                                                <div className="rmctt3in8s">
                                                    <div className="rmctt3in8s-img">
                                                        <span className="_8tbpu3" style={{ marginRight: "16.8px;" }} aria-hidden="true">????</span>
                                                    </div>
                                                    <span className="rmctt3in8s-txt">
                                                        ??????????????? ?????? ?????? ?????? ??????
                                                        <Link to="https://www.airbnb.co.kr/login?redirect_url=/users/show/469233392" target="_blank" className="bi61u5q v18vkvko dir dir-ltr">??? ??????</Link>

                                                    </span>
                                                </div>

                                                <div className="rmc3-more" style={{ marginTop: "24px" }}>
                                                    <button className="rmc3-more-btn" style={{ marginTop: "16px !important" }}>
                                                        <span>??? ??????</span>
                                                        <span className="atm_gz">
                                                            <More />
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rmctt3-in8f">
                                    <div>
                                        <div className="rmctt3-in8ss">
                                            <div style={{ marginBottom: "12px" }}>
                                                <div style={{ fontSize: "16px", fontWeight: "600", lineHeight: "20px", marginBottom: "12px" }}>?????? ??????</div>
                                                <div className="rmctt3in8s">
                                                    <div className="rmctt3in8s-txt">
                                                        7??? 13??? ????????? ????????? ???????????? ??? ????????????.
                                                    </div>
                                                </div>

                                                <div className="rmc3-more" style={{ marginTop: "24px" }}>
                                                    <button className="rmc3-more-btn" style={{ marginTop: "16px !important" }}>
                                                        <span>??? ??????</span>
                                                        <span className="atm_gz">
                                                            <More />
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const MapContents = styled.div`
  width: 100%;
  height: 100%;
`;