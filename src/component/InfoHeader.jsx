import React from "react";
import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as Search } from '../images/Search.svg';
import { ReactComponent as Earth } from '../images/Earth.svg';
import { ReactComponent as Menu } from '../images/Menu.svg';
import { ReactComponent as My } from '../images/My.svg';
import { Link } from "react-router-dom";
import { useState, useRef } from 'react';
import ModalLogin from './ModalLogin';
import { useEffect } from "react";
import ModalSign from "./ModalSign";
import { ReactComponent as HomeLogo } from '../images/HomeLogo.svg';
import { ReactComponent as Minus2 } from '../images/Minus2.svg';
import { ReactComponent as Plus2 } from '../images/Plus2.svg';



export default function InfoHeader() {
    const [modalOpen, setModalOpen] = useState(false);
    const outSection = useRef(null);
    const outSection2 = useRef(null);
    const outSection3 = useRef(null);
    const [loginOpen, setLoginOpen] = useState(false); //모달사인
    const [search, setSearch] = useState(false);//검색창 누르면 헤더 변경
    const [headerout, setHeaderout] = useState(false);//여행지
    const [checkin, setCheckin] = useState(false);//체크인
    const [checkout, setCheckout] = useState(false);//체크아웃
    const [traveler, setTraveler] = useState(false);//여행자

    //스크롤
    const [scrollPosition, setScrollPosition] = useState(0);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
    });

      //스크롤을 내렸다 올리면 원래헤더로
      useEffect(() => {
        if (scrollPosition > 200) {
            setSearch(false);
            return;
        }
    })

    // 메뉴모달 밖
    useEffect(() => {
        function handleClickOutside(e) {
            if (outSection.current && !outSection.current.contains(e.target)) {
                setModalOpen(false);
                setLoginOpen(false);
                return
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [outSection]);

    // 로그인 모달
    useEffect(() => {

        function handleClickOutsid(e) {
            if (outSection2.current && !outSection2.current.contains(e.target)) {
                setLoginOpen(false);
                return
            }

        }
        document.addEventListener('mousedown', handleClickOutsid);
        return () => {
            document.removeEventListener('mousedown', handleClickOutsid);
        };
    }, [outSection2]);

    //헤더
    useEffect(() => {
        function handleClickOutside(e) {
            if (outSection3.current && !outSection3.current.contains(e.target)) {
                setSearch(false);

            }
            setHeaderout(true);
            setCheckin(false);
            setCheckout(false);
            setTraveler(false);
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [outSection3]);



    return (
        <header className={search === true && scrollPosition < 200 ? "qweds2" : "room_header"} ref={outSection3}>
            <div className={search === true && scrollPosition < 200 ? 'room_header_inner2' : 'room_header_inner'}>
                <div className="main_header_front">
                    <Link to="/" className="room_header-front-link" aria-label="에어비앤비 홈페이지">
                        {/* <div className="room_header-logo">
                            <Logo />
                        </div> */}
                        <div className="logoqwe">
                            <Logo className="header_front_logo" />
                        </div>
                        <div className="logodfh">
                            <HomeLogo />
                        </div>
                    </Link>
                </div>
                <div className="room_header-middle" style={{ display: search ? "none" : "block" }}>
                    <div className="room_header-mid-f">
                        <div className="room_header-mid-in1">
                            <button className="room_header-mid-in1-btn" type="button" onClick={() => setSearch(true)}>
                                <div className="room_header-mid-in1-div">검색 시작하기</div>
                                <div className="room_header-mid-in1-ic" onClick={() => setHeaderout(false)}>
                                    <Search />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="main_header_mid" style={{ display: search ? "block" : "none" }}>
                    <div className="main_header_mid_box2">
                        <button className="main_header_mid_frt2">
                            <div className="main_header_mid_frt_txt2">숙소</div>
                        </button>
                        <button className="main_header_mid_frt2">
                            <div className="main_header_mid_frt_txt2">체험</div>
                        </button>
                        <button className="main_header_mid_last2">
                            <div className="main_header_mid_frt_txt2">온라인 체험</div>

                        </button>
                    </div>
                </div>
                <div className="room_header-end">
                    <nav className="r-hdr-profile">
                        <div className="r-hdr-pf-f">
                            <Link to="/host" className="r-hdr-pf-link">
                                <div className="r-hdr-pf-link-txt">호스트 되기</div>
                            </Link>
                            <div className="r-hdr-pf-div">
                                <button type="button" className="r-hdr-pf-btn">
                                    <div className="r-hdr-pf-div">
                                        <div className="r-hdr-pf-div2">
                                            <Earth />
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="r-hdr-pf-e">
                            <div className="r-hdr-pf-e-div">
                                <button className="r-hdr-pf-e-btn" ref={outSection} onClick={() => setModalOpen(true)}>
                                    <div className="pfediv">
                                        <Menu />
                                        <ModalLogin open={modalOpen} >
                                            <div className="momo2">
                                                <div className="modalhome-btn">
                                                    <div className="modalhome-btn2">
                                                        <div type="button" className="modalhome-signup" ref={outSection2} onClick={() => setLoginOpen(true)}>회원 가입
                                                            <ModalSign open={loginOpen} onClick={() => setLoginOpen(false)}>

                                                            </ModalSign>
                                                        </div>
                                                        <div type="button" className="modalhome-login">로그인
                                                        </div>
                                                    </div>
                                                    <div className="modalhome-btn3">
                                                        <div type="button" className="modalhome-host">숙소 호스트 되기</div>
                                                        <div type="button" className="modalhome-hosting">체험 호스팅하기</div>
                                                        <div type="button" className="modalhome-help">도움말</div>
                                                    </div>

                                                </div>
                                            </div>
                                        </ModalLogin>
                                    </div>
                                    <div className="pfediv2">
                                        <My />
                                        {/* <ModalLogin open={modalOpen}>
                                            <div className="momo">
                                                <div className="modalhome-btn">
                                                    <div className="modalhome-btn2" >
                                                        <div type="button" className="modalhome-signup" >회원 가입</div>
                                                        <div type="button" className="modalhome-login">로그인</div>
                                                    </div>
                                                    <div className="modalhome-btn3">
                                                        <div type="button" className="modalhome-host">숙소 호스트 되기</div>
                                                        <div type="button" className="modalhome-hosting">체험 호스팅하기</div>
                                                        <div type="button" className="modalhome-help">도움말</div>
                                                    </div>

                                                </div>
                                            </div>
                                        </ModalLogin> */}
                                    </div>
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="dgfd" style={{ opacity: search === true && scrollPosition < 200 ? "1" : "0" }}>
                <div className="pokmlm" style={{ backgroundColor: checkin === true || headerout === false || checkout === true || traveler === true ? "#EBEBEB" : "#FFFFFF" }}>
                    <div className="pokmfle">
                        <div className="p11" >
                            <div className="c11we" onClick={() => setHeaderout(false)}>
                                <label className={headerout ? "in3kizz i18pj64x i1mixo1 dir dir-ltr" : "in3kizz i9jpnbz i1mixo1 dir dir-ltr"} for="bigsearch-query-location-input">
                                    <div className="c1gxtg0q dir dir-ltr">
                                        <div className="i1kt4qwh dir dir-ltr">여행지</div>
                                        <input className="ivycze5 dir dir-ltr" aria-autocomplete="none" autocomplete="off" autocorrect="off" spellcheck="false" id="bigsearch-query-location-input" name="query" aria-describedby="bigsearch-query-location-description" placeholder="여행지 검색" data-testid="structured-search-input-field-query">
                                        </input>

                                    </div>
                                </label>
                                <div className="mdlpok" style={{ display: headerout ? "none" : "block" }}>
                                    <div className="mdlkjjf">
                                        <section>
                                            <div>
                                                <div className="v786cx">
                                                    <div className="w9cvjkj">
                                                        <div className="l5mmcz9 dir dir-ltr" id="locationInspirationTitleID">지역으로 검색하기</div>
                                                        <div>
                                                            <div className="grid9sd">
                                                                <div className="sd9fds">
                                                                    <div className="kljf976">
                                                                        <button className="btn098fds">
                                                                            <img className="i17d61fu dir dir-ltr" alt="" src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg" />
                                                                            <div className="ioa2q3t dir dir-ltr"></div>
                                                                            <span className="a8jt5op dir dir-ltr">유연한 검색</span>

                                                                        </button>
                                                                        <div><div className="o11dhjqa dir dir-ltr">유연한 검색</div></div>
                                                                    </div>
                                                                </div>
                                                                <div className="sd9fds">
                                                                    <div className="kljf976">
                                                                        <button className="btn098fds">
                                                                            <img className="i17d61fu dir dir-ltr" alt="" src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg" />
                                                                            <div className="ioa2q3t dir dir-ltr"></div>
                                                                            <span className="a8jt5op dir dir-ltr">유럽</span>

                                                                        </button>
                                                                        <div><div className="o11dhjqa dir dir-ltr">유럽</div></div>
                                                                    </div>
                                                                </div>
                                                                <div className="sd9fds">
                                                                    <div className="kljf976">
                                                                        <button className="btn098fds">
                                                                            <img className="i17d61fu dir dir-ltr" alt="" src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg" />
                                                                            <div className="ioa2q3t dir dir-ltr"></div>
                                                                            <span className="a8jt5op dir dir-ltr">프랑스</span>

                                                                        </button>
                                                                        <div><div className="o11dhjqa dir dir-ltr">프랑스</div></div>
                                                                    </div>
                                                                </div>
                                                                <div className="sd9fds">
                                                                    <div className="kljf976">
                                                                        <button className="btn098fds">
                                                                            <img className="i17d61fu dir dir-ltr" alt="" src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg" />
                                                                            <div className="ioa2q3t dir dir-ltr"></div>
                                                                            <span className="a8jt5op dir dir-ltr">동남아시아</span>

                                                                        </button>
                                                                        <div><div className="o11dhjqa dir dir-ltr">동남아시아</div></div>
                                                                    </div>
                                                                </div>
                                                                <div className="sd9fds">
                                                                    <div className="kljf976">
                                                                        <button className="btn098fds">
                                                                            <img className="i17d61fu dir dir-ltr" alt="" src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg" />
                                                                            <div className="ioa2q3t dir dir-ltr"></div>
                                                                            <span className="a8jt5op dir dir-ltr">이탈리아</span>

                                                                        </button>
                                                                        <div><div className="o11dhjqa dir dir-ltr">이탈리아</div></div>
                                                                    </div>
                                                                </div>
                                                                <div className="sd9fds">
                                                                    <div className="kljf976">
                                                                        <button className="btn098fds">
                                                                            <img className="i17d61fu dir dir-ltr" alt="" src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg" />
                                                                            <div className="ioa2q3t dir dir-ltr"></div>
                                                                            <span className="a8jt5op dir dir-ltr">미국</span>

                                                                        </button>
                                                                        <div><div className="o11dhjqa dir dir-ltr">미국</div></div>
                                                                    </div>
                                                                </div>
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
                        <div className="sv3mkdx dir dir-ltr"></div>
                        <div className="p22">
                            <div className="p22sd kerfd" onClick={() => setCheckin(true)}>
                                <div className={checkin ? "b1234x59c dir dir-ltr" : "b192dx2b b174x59c dir dir-ltr"} role="button" tabindex="0" aria-expanded="false" data-testid="structured-search-input-field-split-dates-0">
                                    <div className="c11if3v5 dir dir-ltr">
                                        <div className="l1vto4to dir dir-ltr">체크인</div>
                                        <div className="p1kudodg dir dir-ltr">날짜 입력</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: checkin ? "block" : "none" }}>
                                <div className="main-calander">
                                    <section>
                                        <div>
                                            <div className="mn-cdr">
                                                <div className="mncdr">
                                                    <div>
                                                        <div className="mncdr-in">
                                                            <div className="mncdr-in2">
                                                                <div className="mncdrin">
                                                                    <div className="_1rzjy36" role="tablist">
                                                                        <button type="button" id="tab--tabs--0" aria-controls="panel--tabs--0" aria-selected="true" className="_d09hfbg" role="tab">날짜 선택</button>
                                                                        <button type="button" id="tab--tabs--1" aria-controls="panel--tabs--1" aria-selected="false" className="_19471dk" role="tab" tabindex="-1">유연한 일정</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <div>
                                                                    <div className="mncdr-a">

                                                                    </div>
                                                                    <div className="mncdr-b">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                            <div class="sv3mkdx dir dir-ltr"></div>
                            <div className="p22sd kerfd" onClick={() => setCheckout(true)}>
                                <div className={checkout ? "b1234x59c dir dir-ltr" : "b192dx2b b174x59c dir dir-ltr"} role="button" tabindex="0" aria-expanded="false" data-testid="structured-search-input-field-split-dates-0">
                                    <div className="c11if3v5 dir dir-ltr">
                                        <div className="l1vto4to dir dir-ltr">체크아웃</div>
                                        <div className="p1kudodg dir dir-ltr">날짜 입력</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: checkout ? "block" : "none" }}>
                                <div className="main-calander">
                                    <section>
                                        <div>
                                            <div className="mn-cdr">
                                                <div className="mncdr">
                                                    <div>
                                                        <div className="mncdr-in">
                                                            <div className="mncdr-in2">
                                                                <div className="mncdrin">
                                                                    <div className="_1rzjy36" role="tablist">
                                                                        <button type="button" id="tab--tabs--0" aria-controls="panel--tabs--0" aria-selected="true" className="_d09hfbg" role="tab">날짜 선택</button>
                                                                        <button type="button" id="tab--tabs--1" aria-controls="panel--tabs--1" aria-selected="false" className="_19471dk" role="tab" tabindex="-1">유연한 일정</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <div>
                                                                    <div className="mncdr-a">

                                                                    </div>
                                                                    <div className="mncdr-b">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div className="sv3mkdx dir dir-ltr"></div>
                        <div className="p33" onClick={() => setTraveler(true)}>
                            <div className={traveler ? "p22sd b1234x59c1" : "p22sd kerfd"}>
                                <div className="b192dx2b b174x59c dir dir-ltr" role="button" tabindex="0" aria-expanded="false" data-testid="structured-search-input-field-split-dates-0">
                                    <div className="c11if3v5 dir dir-ltr">
                                        <div className="l1vto4to dir dir-ltr">여행자</div>
                                        <div className="p1kudodg dir dir-ltr">게스트 추가</div>
                                    </div>
                                </div>
                                <div className="btnweq">
                                    <button className={checkin === true || headerout === false || checkout === true || traveler === true ? "bbtnasd" : "bbtnlhk"} onClick={() => setSearch(!search)}>
                                        <span className="_tcp689">
                                            <div className="c8th90 dir dir-ltr">
                                                <div className=" dir dir-ltr">
                                                    <Search className="starss" />
                                                </div>
                                                <div className="l1huikbk l123k1u5 dir dir-ltr" style={{ opacity: checkin === true || headerout === false || checkout === true || traveler === true ? "1" : "0" }}>검색</div>
                                            </div>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div style={{ display: traveler ? "block" : "none" }}>
                                <div>
                                    <div className="iuyjc">
                                        <section>
                                            <div>
                                                <div className="jhrgfsad">
                                                    <div>
                                                        <div className="erbnvcd">
                                                            <div className="_1hhulki">
                                                                <div className="_rtmzs6z" id="searchFlow-title-label-stepper-adults">성인</div>
                                                                <div className="_ebqknn" id="searchFlow-subtitle-label-stepper-adults">만 13세 이상</div>
                                                            </div>
                                                            <div className="_ojavom">
                                                                <div className="_3zlfom" id="stepper-adults">
                                                                    <button className="_ul9u8c" type="button" disabled="" aria-label="값 내리기" aria-describedby="searchFlow-title-label-stepper-adults" data-testid="stepper-adults-decrease-button">
                                                                        <span className="_8ovatg">
                                                                            <Minus2 />
                                                                        </span>
                                                                    </button>
                                                                    <div className="_1665lvv">
                                                                        <span aria-hidden="true" data-testid="stepper-adults-value">0</span>
                                                                        <span className="_25sktq" data-testid="stepper-adults-a11y-value-label">0 성인</span>
                                                                    </div>
                                                                    <button className="_ul9u8c" type="button" aria-label="값 올리기" aria-describedby="searchFlow-title-label-stepper-adults" data-testid="stepper-adults-increase-button">
                                                                        <span className="_8ovatg">
                                                                            <Plus2 />
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="erbnvcd">
                                                            <div className="_1hhulki">
                                                                <div className="_rtmzs6z" id="searchFlow-title-label-stepper-adults">어린이</div>
                                                                <div className="_ebqknn" id="searchFlow-subtitle-label-stepper-adults">만 2~12세</div>
                                                            </div>
                                                            <div className="_ojavom">
                                                                <div className="_3zlfom" id="stepper-adults">
                                                                    <button className="_ul9u8c" type="button" disabled="" aria-label="값 내리기" aria-describedby="searchFlow-title-label-stepper-adults" data-testid="stepper-adults-decrease-button">
                                                                        <span className="_8ovatg">
                                                                            <Minus2 />
                                                                        </span>
                                                                    </button>
                                                                    <div className="_1665lvv">
                                                                        <span aria-hidden="true" data-testid="stepper-adults-value">0</span>
                                                                        <span className="_25sktq" data-testid="stepper-adults-a11y-value-label">0 어린이</span>
                                                                    </div>
                                                                    <button className="_ul9u8c" type="button" aria-label="값 올리기" aria-describedby="searchFlow-title-label-stepper-adults" data-testid="stepper-adults-increase-button">
                                                                        <span className="_8ovatg">
                                                                            <Plus2 />
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="erbnvcd">
                                                            <div className="_1hhulki">
                                                                <div className="_rtmzs6z" id="searchFlow-title-label-stepper-adults">유아</div>
                                                                <div className="_ebqknn" id="searchFlow-subtitle-label-stepper-adults">만 2세 미만</div>
                                                            </div>
                                                            <div className="_ojavom">
                                                                <div className="_3zlfom" id="stepper-adults">
                                                                    <button className="_ul9u8c" type="button" disabled="" aria-label="값 내리기" aria-describedby="searchFlow-title-label-stepper-adults" data-testid="stepper-adults-decrease-button">
                                                                        <span className="_8ovatg">
                                                                            <Minus2 />
                                                                        </span>
                                                                    </button>
                                                                    <div className="_1665lvv">
                                                                        <span aria-hidden="true" data-testid="stepper-adults-value">0</span>
                                                                        <span className="_25sktq" data-testid="stepper-adults-a11y-value-label">0 유아</span>
                                                                    </div>
                                                                    <button className="_ul9u8c" type="button" aria-label="값 올리기" aria-describedby="searchFlow-title-label-stepper-adults" data-testid="stepper-adults-increase-button">
                                                                        <span className="_8ovatg">
                                                                            <Plus2 />
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="erbnvcd">
                                                            <div className="_1hhulki">
                                                                <div className="_rtmzs6z" id="searchFlow-title-label-stepper-adults">반려동물</div>
                                                                <div className="_ebqknn" id="searchFlow-subtitle-label-stepper-adults">보조동물을 동반하시나요?</div>
                                                            </div>
                                                            <div className="_ojavom">
                                                                <div className="_3zlfom" id="stepper-adults">
                                                                    <button className="_ul9u8c" type="button" disabled="" aria-label="값 내리기" aria-describedby="searchFlow-title-label-stepper-adults" data-testid="stepper-adults-decrease-button">
                                                                        <span className="_8ovatg">
                                                                            <Minus2 />
                                                                        </span>
                                                                    </button>
                                                                    <div className="_1665lvv">
                                                                        <span aria-hidden="true" data-testid="stepper-adults-value">0</span>
                                                                        <span className="_25sktq" data-testid="stepper-adults-a11y-value-label">0 성인</span>
                                                                    </div>
                                                                    <button className="_ul9u8c" type="button" aria-label="값 올리기" aria-describedby="searchFlow-title-label-stepper-adults" data-testid="stepper-adults-increase-button">
                                                                        <span className="_8ovatg">
                                                                            <Plus2 />
                                                                        </span>
                                                                    </button>
                                                                </div>
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
                </div>
            </div>
        </header>


    );
}