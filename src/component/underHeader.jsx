import React from "react"
import { ReactComponent as Previous } from '../images/Previous.svg';
import { ReactComponent as Next } from '../images/Next.svg';
import { ReactComponent as Filter } from '../images/Filter.svg';
import { Link } from "react-router-dom";

export default function UnderHeader() {
    return (
        <div className="main_scd_header">
            <div className="main_scd_header_inner">
                <div className="scd_header_inner_in">
                    <div className="scd_header_inner_menu">
                        <div className="scd_header_inner_scroll">
                            <div className="scd_header_scroll">
                                <button type="button" className="scd_header_btn">
                                    <span className="scd_header_btn_span">
                                        <Previous />
                                    </span>
                                </button>
                            </div>
                            <div className="scd_header_scroll_next2">
                            <div className="scd_header_scroll_next">
                                <button aria-label="다음" data-shared-element-id="next-button" type="button" class="scd_header_scroll_next_btn">
                                    <span className="scd_header_scroll_next_span">
                                        <Next />
                                    </span>
                                </button>
                            </div>
                            </div>
                        </div>
                        <div className="scd_hdr_in">
                            <div className="scd_hdr_in_grid">
                                <Link to="/">
                                <button aria-hidden="false" className="scd_hdr_in_btn" role="radio" aria-checked="true" type="button">
                                    <div className="scd_hdr_in_div">
                                        <span className="scd_hdr_in_div_span">
                                            <img class="scd_hdr_in_div_img" src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" alt="" width="24" height="24"/>
                                            <div className="scd_hdr_in_div_txt">
                                                <span className="scd_hdr_in_txt">기상천외한 숙소</span>
                                            </div>
                                        </span>
                                    </div>
                                </button>
                                </Link>
                                <Link to="/menu2">
                                <button aria-hidden="false" className="scd_hdr_in_btn2" role="radio" aria-checked="true" type="button">
                                    <div className="scd_hdr_in_div2">
                                        <span className="scd_hdr_in_div_span2">
                                            <img class="scd_hdr_in_div_img2" src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg" alt="" width="24" height="24"/>
                                            <div className="scd_hdr_in_div_txt2">
                                                <span className="scd_hdr_in_txt2">국립공원</span>
                                            </div>
                                        </span>
                                    </div>
                                </button>
                                </Link>
                                <Link to="/menu3">
                                <button className="scd_hdr_in_btn3"  aria-hidden="false" role="radio" aria-checked="true" type="button"
                                style={{padding: "4px 0 14px 5px", margin: "12px 0 0 !important"}}>
                                    <div className="scd_hdr_in_div2">
                                        <span className="scd_hdr_in_div_span2">
                                            <img class="scd_hdr_in_div_img2" type="filter: contrast(calc(13 / 44)) !important;" src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" alt="" width="24" height="24"/>
                                            <div className="scd_hdr_in_div_txt2">
                                                <span className="scd_hdr_in_txt2">통나무집</span>
                                            </div>
                                        </span>
                                    </div>
                                </button>
                                </Link>
                                <Link to="/menu4">
                                <button aria-hidden="false" className="scd_hdr_in_btn3" role="radio" aria-checked="true" type="button" style={{paddingLeft :"15px"}}>
                                    <div className="scd_hdr_in_div2" >
                                        <span className="scd_hdr_in_div_span2">
                                            <img class="scd_hdr_in_div_img2" src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg" alt="" width="24" height="24"/>
                                            <div className="scd_hdr_in_div_txt2">
                                                <span className="scd_hdr_in_txt2">섬</span>
                                            </div>
                                        </span>
                                    </div>
                                </button>
                                </Link>
                                <Link to="/menu5">
                                <button aria-hidden="false" className="scd_hdr_in_btn2" role="radio" aria-checked="true" type="button">
                                    <div className="scd_hdr_in_div2">
                                        <span clasNames="scd_hdr_in_div_span2">
                                            <img className="scd_hdr_in_div_img2" src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg" alt="" width="24" height="24"/>
                                            <div className="scd_hdr_in_div_txt2">
                                                <span className="scd_hdr_in_txt2">해변 근처</span>
                                            </div>
                                        </span>
                                    </div>
                                </button>
                                </Link>
                                <button aria-hidden="false" className="scd_hdr_in_btn2" role="radio" aria-checked="true" type="button">
                                    <div className="scd_hdr_in_div2">
                                        <span className="scd_hdr_in_div_span2">
                                            <img class="scd_hdr_in_div_img2" src="https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg" alt="" width="24" height="24"/>
                                            <div className="scd_hdr_in_div_txt2">
                                                <span className="scd_hdr_in_txt2">초소형 주택</span>
                                            </div>
                                        </span>
                                    </div>
                                </button>
                                <button aria-hidden="false" className="scd_hdr_in_btn3" style={{marginLeft: "5px"}}role="radio" aria-checked="true" type="button">
                                    <div className="scd_hdr_in_div2">
                                        <span className="scd_hdr_in_div_span2">
                                            <img class="scd_hdr_in_div_img2" src="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg" alt="" width="24" height="24"/>
                                            <div className="scd_hdr_in_div_txt2">
                                                <span className="scd_hdr_in_txt2">디자인</span>
                                            </div>
                                        </span>
                                    </div>
                                </button>
                                <button aria-hidden="false" className="scd_hdr_in_btn3" role="radio" aria-checked="true" type="button">
                                    <div className="scd_hdr_in_div2">
                                        <span className="scd_hdr_in_div_span2">
                                            <img class="scd_hdr_in_div_img2" src="https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg" alt="" width="24" height="24"/>
                                            <div className="scd_hdr_in_div_txt2">
                                                <span className="scd_hdr_in_txt2">캠핑장</span>
                                            </div>
                                        </span>
                                    </div>
                                </button>
                                <button aria-hidden="false" className="scd_hdr_in_btn2" role="radio" aria-checked="true" type="button">
                                    <div className="scd_hdr_in_div2">
                                        <span className="scd_hdr_in_div_span2">
                                            <img class="scd_hdr_in_div_img2" src="https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg" alt="" width="24" height="24"/>
                                            <div className="scd_hdr_in_div_txt2">
                                                <span className="scd_hdr_in_txt2">A자형 주택</span>
                                            </div>
                                        </span>
                                    </div>
                                </button>
                                <button aria-hidden="false" className="scd_hdr_in_btn3" style={{marginLeft: "10px"}} role="radio" aria-checked="true" type="button">
                                    <div className="scd_hdr_in_div2">
                                        <span className="scd_hdr_in_div_span2">
                                            <img class="scd_hdr_in_div_img2" src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg" alt="" width="24" height="24"/>
                                            <div className="scd_hdr_in_div_txt2">
                                                <span className="scd_hdr_in_txt2">호숫가</span>
                                            </div>
                                        </span>
                                    </div>
                                </button>
                                <button aria-hidden="false" className="scd_hdr_in_btn3" style={{marginLeft: "5px"}} role="radio" aria-checked="true" type="button">
                                    <div className="scd_hdr_in_div2">
                                        <span className="scd_hdr_in_div_span2">
                                            <img class="scd_hdr_in_div_img2" src="https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg" alt="" width="24" height="24"/>
                                            <div className="scd_hdr_in_div_txt2">
                                                <span className="scd_hdr_in_txt2">북극</span>
                                            </div>
                                        </span>
                                    </div>
                                </button>
                                <button aria-hidden="false" className="scd_hdr_in_btn2" role="radio" aria-checked="true" type="button">
                                    <div className="scd_hdr_in_div2">
                                        <span className="scd_hdr_in_div_span2">
                                            <img class="scd_hdr_in_div_img2" src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" alt="" width="24" height="24"/>
                                            <div className="scd_hdr_in_div_txt2">
                                                <span className="scd_hdr_in_txt2">멋진 수영장</span>
                                            </div>
                                        </span>
                                    </div>
                                </button>
                                <button aria-hidden="false" className="scd_hdr_in_btn3" style={{marginLeft: "15px"}} role="radio" aria-checked="true" type="button">
                                    <div className="scd_hdr_in_div2">
                                        <span className="scd_hdr_in_div_span2">
                                            <img class="scd_hdr_in_div_img2" src="https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg" alt="" width="24" height="24"/>
                                            <div className="scd_hdr_in_div_txt2">
                                                <span className="scd_hdr_in_txt2">동굴</span>
                                            </div>
                                        </span>
                                    </div>
                                </button>
                                <button aria-hidden="false" className="scd_hdr_in_btn3" style={{marginLeft: "20px"}} role="radio" aria-checked="true" type="button">
                                    <div className="scd_hdr_in_div2">
                                        <span className="scd_hdr_in_div_span2">
                                            <img class="scd_hdr_in_div_img2" src="https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg" alt="" width="24" height="24"/>
                                            <div className="scd_hdr_in_div_txt2">
                                                <span className="scd_hdr_in_txt2">서핑</span>
                                            </div>
                                        </span>
                                    </div>
                                </button>
                                <button aria-hidden="false" className="scd_hdr_in_btn2" role="radio" aria-checked="true" type="button">
                                    <div className="scd_hdr_in_div2">
                                        <span className="scd_hdr_in_div_span2">
                                            <img class="scd_hdr_in_div_img2" src="https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg" alt="" width="24" height="24"/>
                                            <div className="scd_hdr_in_div_txt2">
                                                <span className="scd_hdr_in_txt2">최고의 전망</span>
                                            </div>
                                        </span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="scd_header_inner_filter">
                        <div className="scd_header_filter">
                            <div className="header_filter">
                                <button className="header_filter_btn">
                                    <span className="ic_filter_btn">
                                        <Filter />
                                    <span className="ic_filter_txt">필터</span>
                                    </span>
                                   
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}