import React from "react";
import { ReactComponent as Map } from '../images/Map.svg';
import { ReactComponent as Up } from '../images/Up.svg';
import { ReactComponent as Earth } from '../images/Earth.svg';



export default function Footer (){
    return(
        <div className="main_bottom">
            <div className="site-bottom-wrap">
                <div className="main_map_btn">
                    <button type="button" className="main_map_btnbtn">
                      <span className="main_map_txt">지도 표시하기</span>
                      <div className="main_map_svg">
                        <Map />
                      </div>
                    </button>
                </div>
            
            </div>
            <div className="main_bottom_wrap">
                <div className="main_bottom_inner">
                    <div>
                        <span className="main_btm_in_txt">
                            © 2022 Airbnb, Inc.
                        </span>
                        <span className="main_btm_in_txt2">·</span>
                        <span className="main_btm_in_link">
                        개인정보 처리방침
                        </span>
                        <span className="main_btm_in_txt2">·</span>
                        <span className="main_btm_in_link2">이용약관</span>
                        <span className="main_btm_in_txt2">·</span>
                        <span className="main_btm_in_link5">사이트맵</span>
                        <span className="main_btm_in_txt2">·</span>
                        <span className="main_btm_in_link3">한국의 변경된 환불 정책</span>
                        <span className="main_btm_in_txt2">·</span>
                        <span className="main_btm_in_link4">회사 세부정보</span>
                    </div>
                    <div className="main_btm_in_txt_txt"></div>
                    <div className="main_btm_in3_txt">
                        <div className="main_btm_in3_a">
                            <span className="in3_a_a">
                                <button type="button" className="in3_a_a_btn">
                                    <span className="in3_a_a_span">
                                        언어선택
                                    </span>
                                    <span className="in3_a_a_span2">
                                        <Earth />
                                    </span>
                                    <span className="in3_a_a_span3">한국어(KR)</span>
                                </button>
                            </span>
                            <span className="in3_a_b">
                                <button type="button" className="in3_a_b_btn">
                                    <span className="in3_a_b_span">₩</span>
                                    <span className="in3_a_b_span2">KRW</span>
                                </button>
                            </span>
                        </div>
                        <button className="main_brm_in3_b">
                            <span className="main_brm_in3_b_span">
                                <span className="main_brm_in3_b_span-ltr">지원 및 참고 자료</span>
                                <span className="main_brm_in3_b_span2">
                                <Up />
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="main_bottom_inner2">
                    <div className="main_bottom_inner2-ltr" ></div>
                    웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8 Hanover Quay Dublin 2,
D02 DP23 Ireland | 이사: Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT 번호:
IE9827384L | 사업자 등록 번호: IE 511825 | 연락처: terms@airbnb.com, 웹사이트,
080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로
에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다.
에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 해당
서비스를 제공하는 호스트에게 있습니다.
                </div>
            </div>
        </div>
    );
}