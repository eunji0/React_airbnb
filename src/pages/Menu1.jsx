import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Like } from '../images/Like.svg';
import { ReactComponent as Star } from '../images/Star.svg';
import { ReactComponent as Next } from '../images/Next.svg';
import { ReactComponent as Previous } from '../images/Previous.svg';
import { useState, useEffect, useRef } from "react";

export default function Menu1({ place, img_path, km, day, price, star }) {

    const images = useRef([{ src: "https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720" }, { src: "https://a0.muscache.com/im/pictures/11bd9fc9-4ca9-4208-b449-bdc63a1969b9.jpg?im_w=720" }, { src: "https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white" }]);

    const [current, setCurrent] = useState(0);

    const [style, setStyle] = useState({
        marginLeft: `-${current}00%`
    });
    const imgSize = useRef(images.current.length);

    const moveSlide = (i) => {
        let nextIndex = current + i;

        if (nextIndex < 0) nextIndex = imgSize.current - 1;
        else if (nextIndex >= imgSize.current) nextIndex = 0;

        setCurrent(nextIndex);
    };

    useEffect(() => {
        setStyle({ marginLeft: `-${current}00%` });
    }, [current]);

    return (

        <div className="main_rd menu1">
            <div className="main_ctt_crd">
                <div state={{ place, star, price }} className="main_ctt_crd1">
                    <div className="main_ctt_crd1_grid">
                    <div className="window">
                        <div className="flexbox" style={style}>
                            {images.current.map((img, i) => (
                                <div
                                    key={i}
                                    className="main_ctt_crd1_img"
                                    style={{ backgroundImage: `url(${img.src})` }}
                                ></div>
                            ))}
                        </div>
                    </div>
                    </div>
                    <div className="main_info_pre">
                        <div className="main_info_pre_div">
                            <button onClick={() => { moveSlide(-1); }} aria-label="목록에 숙소 추가하기" type="button" className="main_info_pre_btn">
                                <Previous />
                            </button>
                        </div>
                    </div>
                    
                    <div className="main_info_next">
                        <div className="main_info_next_div">
                            <button onClick={() => { moveSlide(1); }} aria-label="목록에 숙소 추가하기" type="button" className="main_info_next_btn">
                                <Next />
                            </button>
                        </div>
                    </div>
                    {/* <div className="position">
                            {images.current.map((x, i) => (
                                <div
                                    key={i}
                                    className={i === current ? 'dot current' : 'dot'}
                                ></div>
                            ))}
                        </div> */}
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
                                <Star style={{ width: "12px", height: "12px" }} />
                            </span>
                            <span aria-hidden="true" className="ru0q88m dir dir-ltr">{star}</span>
                        </span>
                    </div>
                </div>
            </div>


            {/* <div className="main_ctt_crd">
                <div state={{ place, star, price }} className="main_ctt_crd1">

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
                    <div className="main_info_next">
                        <div className="main_info_next_div">
                            <button onClick={() => { moveSlide(1); }} aria-label="목록에 숙소 추가하기" type="button" className="main_info_next_btn">
                                <Next />
                            </button>
                        </div>
                    </div>
                    <div className="main_info_pre">
                        <div className="main_info_pre_div">
                            <button onClick={() => { moveSlide(-1); }} aria-label="목록에 숙소 추가하기" type="button" className="main_info_pre_btn">
                                <Previous />
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
                                <Star style={{ width: "12px", height: "12px" }} />
                            </span>
                            <span aria-hidden="true" className="ru0q88m dir dir-ltr">{star}</span>
                        </span>
                    </div>
                </div>
            </div> */}

        </div>
    )
}