import React from "react"
import { ReactComponent as Previous } from '../images/Previous.svg';
import { ReactComponent as Next } from '../images/Next.svg';
import { ReactComponent as Filter } from '../images/Filter.svg';
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import ModalFilter from "./ModalFilter";

export default function UnderHeader() {
    // const images = useRef([{ src: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" }, { src: "https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg" }, { src: "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" }
    // , { src: "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg" }, { src: "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg" }, { src: "https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg" }
    // , { src: "https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg" }, { src: "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg" }, { src: "https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg" }
    // , { src: "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg" }, { src: "https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg" }, { src: "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" }
    // , { src: "https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg" }, { src: "https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg" }, { src: "https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg" }
    // ]);

    // //캐러셀
    // const [current, setCurrent] = useState(0);
    // const [style, setStyle] = useState({
    //   marginLeft: `-${current}00%`
    // });
    // const imgSize = useRef(images.current.length);
  
    // const moveSlide = (i) => {
    //   let nextIndex = current + i;
      
    //   if (nextIndex < 0) nextIndex = imgSize.current - 1;
    //   else if (nextIndex >= imgSize.current) nextIndex = 0;
  
    //   setCurrent(nextIndex);
    // };
  
    // useEffect(() => {
    //     setStyle({ marginLeft: `-${current}00%` });
    // }, [current]);
    const [filterOpen, setFilterOpen] = useState(false);//필터모달

    const closeFilter = () => {
        setFilterOpen(false);
    }

    console.log(filterOpen); 
    
    return (
        <div className="main_scd_header">
            <div className="main_scd_header_inner">
                <div className="scd_header_inner_in">
                    <div className="scd_header_inner_menu">
                        <div className="scd_header_inner_scroll">
                            <div className="scd_header_scroll">
                            {/* onClick={() => { moveSlide(-14);}} */}
                                <button type="button" className="scd_header_btn">
                                    <span className="scd_header_btn_span">
                                        <Previous />
                                    </span>
                                </button>
                            </div>
                            <div className="scd_header_scroll_next2">
                                <button aria-label="다음" data-shared-element-id="next-button" type="button" class="scd_header_scroll_next_btn">
                                    <span className="scd_header_scroll_next_span">
                                        <Next />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="scd_hdr_in">
                            <div className="scd_hdr_in_grid" >
                                <Link to="/" className="scdbtn">
                                <button aria-hidden="false" className="scd_hdr_in_btn" role="radio" aria-checked="true" type="button">
                                    <div className="scd_hdr_in_div">
                                    {/* style={style} */}
                                        <span className="scd_hdr_in_div_span" >
                                                {/* {images.current.map((img, i) => (
                                                    <div
                                                        key={i}
                                                        className="scd_hdr_in_div_img2"
                                                        style={{ backgroundImage: `url(${img.src})` }}
                                                    ></div>
                                                ))} */}
                                                 <img className="scd_hdr_in_div_img2" src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg" alt="" width="24" height="24"/>
                                            
                                            <div className="scd_hdr_in_div_txt">
                                                <span className="scd_hdr_in_txt">기상천외한 숙소</span>
                                            </div>
                                        </span>
                                    </div>
                                </button>
                                </Link>
                                <Link to="/menu2"  className="scdbtn">
                                <button aria-hidden="false" className="scd_hdr_in_btn" role="radio" aria-checked="true" type="button">
                                    <div className="scd_hdr_in_div">
                                        <span className="scd_hdr_in_div_span">
                                            <img className="scd_hdr_in_div_img2" src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg" alt="" width="24" height="24"/>
                                            <div className="scd_hdr_in_div_txt">
                                                <span className="scd_hdr_in_txt">국립공원</span>
                                            </div>
                                        </span>
                                    </div>
                                </button>
                                </Link>
                                <Link to="/menu3" className="scdbtn">
                                <button className="scd_hdr_in_btn"  aria-hidden="false" role="radio" aria-checked="true" type="button">
                                    <div className="scd_hdr_in_div">
                                        <span className="scd_hdr_in_div_span">
                                            <img className="scd_hdr_in_div_img2" type="filter: contrast(calc(13 / 44)) !important;" src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" alt="" width="24" height="24"/>
                                            <div className="scd_hdr_in_div_txt">
                                                <span className="scd_hdr_in_txt">통나무집</span>
                                            </div>
                                        </span>
                                    </div>
                                </button>
                                </Link>
                                <Link to="/menu4" className="scdbtn">
                                <button aria-hidden="false" className="scd_hdr_in_btn" role="radio" aria-checked="true" type="button" style={{paddingLeft :"15px"}}>
                                    <div className="scd_hdr_in_div" >
                                        <span className="scd_hdr_in_div_span">
                                            <img className="scd_hdr_in_div_img2" src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg" alt="" width="24" height="24"/>
                                            <div className="scd_hdr_in_div_txt">
                                                <span className="scd_hdr_in_txt">섬</span>
                                            </div>
                                        </span>
                                    </div>
                                </button>
                                </Link>
                                <Link to="/menu5"  className="scdbtn">
                                <button aria-hidden="false" className="scd_hdr_in_btn" role="radio" aria-checked="true" type="button">
                                    <div className="scd_hdr_in_div">
                                        <span className="scd_hdr_in_div_span">
                                            <img className="scd_hdr_in_div_img2" src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg" alt="" width="24" height="24"/>
                                            <div className="scd_hdr_in_div_txt">
                                                <span className="scd_hdr_in_txt">해변 근처</span>
                                            </div>
                                        </span>
                                    </div>
                                </button>
                                </Link>
                                
                                <button aria-hidden="false" className="scd_hdr_in_btn" role="radio" aria-checked="true" type="button">
                                    <div className="scd_hdr_in_div">
                                        <span className="scd_hdr_in_div_span">
                                            <img class="scd_hdr_in_div_img2" src="https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg" alt="" width="24" height="24"/>
                                            <div className="scd_hdr_in_div_txt">
                                                <span className="scd_hdr_in_txt">초소형 주택</span>
                                            </div>
                                        </span>
                                    </div>
                                </button>
                                <Link to="/" className="scdbtn">
                                <button aria-hidden="false" className="scd_hdr_in_btn" style={{marginLeft: "5px"}}role="radio" aria-checked="true" type="button">
                                    <div className="scd_hdr_in_div">
                                        <span className="scd_hdr_in_div_span">
                                            <img class="scd_hdr_in_div_img2" src="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg" alt="" width="24" height="24"/>
                                            <div className="scd_hdr_in_div_txt">
                                                <span className="scd_hdr_in_txt">디자인</span>
                                            </div>
                                        </span>
                                    </div>
                                </button>
                                </Link>
                                <Link to="/" className="scdbtn">
                                <button aria-hidden="false" className="scd_hdr_in_btn" role="radio" aria-checked="true" type="button">
                                    <div className="scd_hdr_in_div">
                                        <span className="scd_hdr_in_div_span">
                                            <img class="scd_hdr_in_div_img2" src="https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg" alt="" width="24" height="24"/>
                                            <div className="scd_hdr_in_div_txt">
                                                <span className="scd_hdr_in_txt">캠핑장</span>
                                            </div>
                                        </span>
                                    </div>
                                </button>
                                </Link>
                                <Link to="/" className="scdbtn">
                                <button aria-hidden="false" className="scd_hdr_in_btn" role="radio" aria-checked="true" type="button">
                                    <div className="scd_hdr_in_div">
                                        <span className="scd_hdr_in_div_span">
                                            <img class="scd_hdr_in_div_img2" src="https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg" alt="" width="24" height="24"/>
                                            <div className="scd_hdr_in_div_txt">
                                                <span className="scd_hdr_in_txt">A자형 주택</span>
                                            </div>
                                        </span>
                                    </div>
                                </button>
                                </Link>
                                
                                <Link to="/" className="scdbtn">
                                <button aria-hidden="false" className="scd_hdr_in_btn" style={{marginLeft: "10px"}} role="radio" aria-checked="true" type="button">
                                    <div className="scd_hdr_in_div">
                                        <span className="scd_hdr_in_div_span">
                                            <img class="scd_hdr_in_div_img2" src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg" alt="" width="24" height="24"/>
                                            <div className="scd_hdr_in_div_txt">
                                                <span className="scd_hdr_in_txt">호숫가</span>
                                            </div>
                                        </span>
                                    </div>
                                </button>
                                </Link>
                                <Link to="/" className="scdbtn">
                                <button aria-hidden="false" className="scd_hdr_in_btn" style={{marginLeft: "5px"}} role="radio" aria-checked="true" type="button">
                                    <div className="scd_hdr_in_div">
                                        <span className="scd_hdr_in_div_span">
                                            <img class="scd_hdr_in_div_img2" src="https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg" alt="" width="24" height="24"/>
                                            <div className="scd_hdr_in_div_txt">
                                                <span className="scd_hdr_in_txt">북극</span>
                                            </div>
                                        </span>
                                    </div>
                                </button>
                                </Link>
                                
                                <Link to="/" className="scdbtn">
                                <button aria-hidden="false" className="scd_hdr_in_btn" role="radio" aria-checked="true" type="button">
                                    <div className="scd_hdr_in_div">
                                        <span className="scd_hdr_in_div_span">
                                            <img class="scd_hdr_in_div_img2" src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" alt="" width="24" height="24"/>
                                            <div className="scd_hdr_in_div_txt">
                                                <span className="scd_hdr_in_txt">멋진 수영장</span>
                                            </div>
                                        </span>
                                    </div>
                                </button>
                                </Link>
                                <Link to="/" className="scdbtn">
                                <button aria-hidden="false" className="scd_hdr_in_btn" style={{marginLeft: "15px"}} role="radio" aria-checked="true" type="button">
                                    <div className="scd_hdr_in_div">
                                        <span className="scd_hdr_in_div_span">
                                            <img class="scd_hdr_in_div_img2" src="https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg" alt="" width="24" height="24"/>
                                            <div className="scd_hdr_in_div_txt">
                                                <span className="scd_hdr_in_txt">동굴</span>
                                            </div>
                                        </span>
                                    </div>
                                </button>
                                </Link>
                             
                                <Link to="/" className="scdbtn">
                                <button aria-hidden="false" className="scd_hdr_in_btn" style={{marginLeft: "20px"}} role="radio" aria-checked="true" type="button">
                                    <div className="scd_hdr_in_div">
                                        <span className="scd_hdr_in_div_span">
                                            <img class="scd_hdr_in_div_img2" src="https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg" alt="" width="24" height="24"/>
                                            <div className="scd_hdr_in_div_txt">
                                                <span className="scd_hdr_in_txt">서핑</span>
                                            </div>
                                        </span>
                                    </div>
                                </button>
                                </Link>
                               
                                <Link to="/" className="scdbtn">
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
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="scd_header_inner_filter">
                        <div className="scd_header_filter">
                            <div className="header_filter">
                                <button className="header_filter_btn" onClick={()=>setFilterOpen(true)}>
                                    <span className="ic_filter_btn">
                                        <Filter />
                                    <span className="ic_filter_txt">필터</span>
                                    </span>
                                    <ModalFilter open={filterOpen} close={closeFilter}></ModalFilter>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}