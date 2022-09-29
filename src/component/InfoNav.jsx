import React from "react";
import { ReactComponent as Star } from '../images/Star.svg';
import { ReactComponent as Down } from '../images/Down.svg';
import { ReactComponent as Jewel  } from "../images/Jewel.svg";
import { ReactComponent as Flag  } from "../images/Flag.svg";
import { useLocation } from "react-router-dom";

export default function InfoNav() {
    const { state } = useLocation();

    return (
    <div className="rmctt3-r">
    <div className="rmctt3r">
        <div>
            <div style={{marginTop: "48px"}}>
                <div style={{border: "1px solid rgb(221, 221, 221)",
                borderRadius: "12px",
                padding: "24px",
                boxShadow: "rgb(0 0 0 / 12%) 0px 6px 16px"}}>
                <div className="rmctt3rr">
                    <div className="rmctt3r-f">
                        <div className="rmctt3r-f1">
                            <div>
                                <div className="rmctt3r-f1f">
                                    ₩{state.price}<span style={{fontWeight: "400", fontSize: "16px", lineHeight:"20px"}}>/박</span>
                                </div>
                            </div>
                            <div className="rmctt3r-f1ff">
                                <span className="rmctt3r-f11">
                                    <Star style={{width:"12px", height:"12px"}}/>
                                </span>
                                <span className="rmctt3r-f12">{state.star} ·</span>
                                <button className="rmctt3r-f13">후기 143개</button>
                            </div>
                            
                        </div>
                        <div className="rmctt3r-f2">
                            <div>
                                <div style={{borderRadius: "8px", backgroundColor: "#fff", display: "flex", flexDirection: "column"}}>
                                    <div className="rmctt34-bdr">
                                        <button style={{borderRadius: "10px", display: "flex", flexDirection:"row", backgroundColor: "#fff", border: "transparent"}}>
                                        <div className="rmctt34-bdrin">
                                            <div className="rmctt34-bdrin-txt">체크인</div>
                                            <div className="rmctt34-bdrin-txt2">2023. 2. 19.</div>
                                        </div>
                                        <div className="rmctt34-bdrin2">
                                            <div className="rmctt34-bdrin-txt">체크아웃</div>
                                            <div className="rmctt34-bdrin-txt2">2023. 2. 20.</div>
                                        </div>
                                        </button>
                                    </div>
                                    <div className="rmctt34-bdr2">
                                        <div className="rmctt34-bdr2in">인원</div>
                                        <div className="rmctt34-bdr2in2">게스트 1명</div>
                                        <div className="rmctt34-bdr2in3">
                                            <Down />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rmctt3r-f3">
                            <button className="rmctt3r-f3btn">
                                예약하기
                            </button>
                        </div>
                    </div>
                    <div className="rmctt3r-m">
                        <div className="rmctt3r-mf">예약 확정 전에는 요금이 청구되지 않습니다.</div>
                    </div>
                    <div className="rmctt3r-e">
                        <section>
                            <div className="rmctt3r-ef">
                                <div className="rmctt3r-ef1">
                                    <div className="rmctt3r-eff">₩{state.price} x 2박</div>
                                    <div className="rmctt3r-efs">
                                        ₩123,456
                                    </div>
                                </div>
                                <div className="rmctt3r-ef2">
                                        <div className="rmctt3r-eff">서비스 수수료</div>
                                        <div className="rmctt3r-efs">
                                            ₩0
                                        </div>
                                </div>
                            </div>
                            <div className="rmctt3r-es">
                                <div className="rmctt3r-esf">
                                    <div className="rmctt3r-esf1">총 합계</div>
                                    <div className="rmctt3r-esf2">₩913,058</div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div class="rmctt3-m">
            <div class="rmctt3m">
                <div class="rmctt3m-f">
                    <div class="rmctt3m-inner">
                        <div>
                            <div class="rmctt3m-in">
                                <div class="rmctt3-b">
                                        <h2 class="rmctt3-bin-txt">흔치 않은 기회입니다.</h2>
                                        <span class="rmctt3-bin-txt2">Wayan님의 에어비앤비 숙소는 보통 예약이 가득 차 있습니다.</span>
                                   
                                </div>
                                <div class="rmctt3-br">
                                    <Jewel />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="rmctt3-e">
            <div style={{marginTop: "24px"}}>
                <button class="rmctt3-ebtn" type="button">
                    <span class="rmctt3-ef">
                    <Flag />
                    </span>
                    <span class="rmctt3-es">
                        숙소 신고하기
                    </span>
                </button>

            </div>
        </div>
    </div>
</div>

    );
}