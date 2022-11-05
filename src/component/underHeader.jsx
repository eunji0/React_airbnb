import React from "react"
import { ReactComponent as Previous } from '../images/Previous.svg';
import { ReactComponent as Next } from '../images/Next.svg';
import { ReactComponent as Filter } from '../images/Filter.svg';
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import ModalFilter from "./ModalFilter";
import Slider from "react-slick";
import { menudummy } from "../menudummy";


export default function UnderHeader() {

    const [filterOpen, setFilterOpen] = useState(false);//필터모달
    const outSection = useRef(null);

    const closeFilter = () => {
        setFilterOpen(false);
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow: (
            <div className="scd_header_scroll">
                <button type="button" className="scd_header_btn">
                    <span className="scd_header_btn_span">
                        <Previous />
                    </span>
                </button>
            </div>
        ),
        nextArrow: (
            <div className="scd_header_scroll_next2">
                <button aria-label="다음" data-shared-element-id="next-button" type="button" class="scd_header_scroll_next_btn">
                    <span className="scd_header_scroll_next_span">
                        <Next />
                    </span>
                </button>
            </div>
        ),
    };

    console.log(menudummy);

    useEffect(() => {
        function handleClickOutside(e) {
            if (outSection.current && !outSection.current.contains(e.target)) {
                setFilterOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [outSection]);

    return (
        <div className="main_scd_header" style={{ zIndex: filterOpen ? "2" : "1" }}>
            <div className="main_scd_header_inner">
                <div className="scd_header_inner_in">
                    <div className="scd_header_inner_menu">
                        <div className="scd_hdr_in">
                            <Slider {...settings} className="boxzzz">
                                {
                                    menudummy.results.map(item => (
                                        <Link to="/" className="boxzz scdbtn">
                                            <button aria-hidden="false" className="scd_hdr_in_btn" role="radio" aria-checked="true" type="button">
                                                <div className="scd_hdr_in_div">
                                                    <span className="scd_hdr_in_div_span"  >
                                                        <img className="scd_hdr_in_div_img2" src={item.imgpath} alt="" width="24" height="24" />

                                                        <div className="scd_hdr_in_div_txt">
                                                            <span className="scd_hdr_in_txt">{item.menuname}</span>
                                                        </div>
                                                    </span>
                                                </div>
                                            </button>
                                        </Link>
                                    ))
                                }

                            </Slider>
                        </div>
                    </div>
                    <div className="scd_header_inner_filter">
                        <div className="scd_header_filter">
                            <div className="header_filter">
                                <button className="header_filter_btn" onClick={() => setFilterOpen(true)}>
                                    <span className="ic_filter_btn">
                                        <Filter />
                                        <span className="ic_filter_txt">필터</span>
                                    </span>

                                </button>
                                <ModalFilter open={filterOpen} close={closeFilter} ref={outSection}></ModalFilter>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}