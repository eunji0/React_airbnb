import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Like } from '../images/Like.svg';
import { ReactComponent as Star } from '../images/Star.svg';

export default function Menu1({ place, img_path, km, day, price, star }) {

    return (

        <div>

            <div className="main_ctt_crd">
                <Link to="/menuinfo"  state={{place, star, price}} className="main_ctt_crd1">
                    <div className="main_ctt_crd1_link">
                        {/* <Link to="/menuinfo" state={{place, star, price}} class="main_info_link"></Link> */}
                        
                    </div>
                    <div className="main_ctt_crd1_grid">
                        <img className="main_ctt_crd1_img" src={img_path} aria-hidden="true" alt="Image 1" elementtiming="LCP-target" fetchpriority="high" id="FMP-target" loading="eager" data-original-uri="https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720" style={{ objectFit: "cover", verticalAlign: "bottom" }} />

                    </div>
                    <div className="main_info_like">
                        <div className="main_info_like_div">
                            <button aria-label="목록에 숙소 추가하기" type="button" className="main_info_like_btn">
                                <Like />
                            </button>
                        </div>
                    </div>
                    <div className="main_ctt_crd1_grid2">
                            <div className="ctt_crd1_grid2_txt">{place}</div>

                            <div className="ctt_crd1_grid2_txt-ltr">
                                <span aria-label="5,275km">
                                    <span className="ctt_crd1_grid2_txt-ltr-ltr">{km}</span>
                                </span>
                            </div>
                            <div className="ctt_crd1_grid2_txt2">
                                <span aria-label="8월 12일~17일">
                                    <span className="ctt_crd1_grid2_txt2-ltr">{day}</span>
                                </span>
                            </div>
                            <div className="ctt_crd1_grid2_txt3">
                                <div>
                                    <div className="_i5duul">
                                        <span className="_14y1gcl">
                                            <div className="_1jo4hgw" aria-hidden="true">
                                                <span className="_tyxjp1">₩{price}</span>
                                                <span className="_r1nvod">&nbsp;/박</span>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <span aria-label="평점 4.88점(5점 만점)" className="t5eq1io r4a59j5 dir dir-ltr" role="img">
                                <span className="s1dxllyb dir dir-ltr">
                                <Star style={{width:"12px", height:"12px"}}/>
                                </span>
                                <span aria-hidden="true" className="ru0q88m dir dir-ltr">{star}</span>
                            </span>
                    </div>
                </Link>
            </div>

        </div>
    )
}