import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as Search } from '../images/Search.svg';
import { ReactComponent as Earth } from '../images/Earth.svg';
import { ReactComponent as Menu } from '../images/Menu.svg';
import { ReactComponent as My } from '../images/My.svg';
import { useState, useRef } from 'react';
import ModalLogin from './ModalLogin';
import { useEffect } from "react";
import ModalSign from "./ModalSign";
// import { ReactComponent as Closelogin } from '../images/Closelogin.svg';

export default function Header() {
    const [modalOpen, setModalOpen] = useState(false);//메뉴모달
    const outSection = useRef(null);
    const outSection2 = useRef(null);
    const [loginOpen, setLoginOpen] = useState(false); //모달로그인
    const [search, setSearch] = useState(false);//검색창 누르면 헤더 변경


    useEffect(() => {
        function handleClickOutside(e) {
            if (outSection.current && !outSection.current.contains(e.target)) {
                setModalOpen(false);
                setLoginOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [outSection]);

    //헤더
    useEffect(() => {
        function handleClickOutside(e) {
            if (outSection.current && !outSection.current.contains(e.target)) {
                setSearch(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [outSection]);

    // 로그인 모달
    useEffect(() => {
        function handleClickOutside(e) {
            if (outSection2.current && !outSection2.current.contains(e.target)) {
                setLoginOpen(false);
                return
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [outSection2]);

    //동시에 켜지고 꺼지게 하기
    // useEffect(() => {
    //     if (modalOpen === true && loginOpen === true) {
    //         setModalOpen(false);
    //         return
    //     }
    //     setModalOpen(true);
    // }, [modalOpen, loginOpen]);
    // console.log(modalOpen);


    return (
        <>
            <header className='main_header' >
                <div className={search ? "qweds" : "puio"}>
                    <div className={search ? 'main_header_inner2' : 'main_header_inner'} ref={outSection}>
                        <div className="main_header_front">
                            <div className="main_front_logo">
                                <Link to="/" className="main_home_link" aria-label="에어비앤비 홈페이지">
                                    <Logo className="header_front_logo" />
                                </Link>
                            </div>
                        </div>
                        <div className='main_header_mid'>
                            <div className={search ? 'main_header_mid_box2' : 'main_header_mid_box'}>
                                <button className={search ? "main_header_mid_frt2" : "main_header_mid_frt"}>
                                    <div className={search ? "main_header_mid_frt_txt2" : "main_header_mid_frt_txt"}>{search ? "숙소" : "어디든지"}</div>
                                </button>
                                <span class="dc65r8z dir dir-ltr" style={{ opacity: search ? "0" : "1" }}></span>
                                <button className={search ? "main_header_mid_frt2" : "main_header_mid_mid"}>
                                    <div className={search ? "main_header_mid_frt_txt2" : "main_header_mid_mid_txt"}>{search ? "체험" : "언제든 일주일"}</div>
                                </button>
                                <span class="dc65r8z dir dir-ltr" style={{ opacity: search ? "0" : "1" }}></span>
                                <button className={search ? "main_header_mid_last2" : "main_header_mid_last"} onClick={() => setSearch(true)}>
                                    <div className={search ? "main_header_mid_frt_txt2" : "main_header_mid_last_txt"}>{search ? "온라인 체험" : "게스트 추가"}</div>
                                    <div className="main_header_mid_search" style={{ opacity: search ? "0" : "1" }}>
                                        <Search className="search" />
                                    </div>
                                </button>

                            </div>

                        </div>
                        <div className="main_header_last">
                            <nav className="main_header_lastlast">
                                <div className="main_header_last_frt">
                                    <Link to="/host" className="main_header_last_frt2">
                                        <div className="header_lst_frt2_txt">호스트 되기</div>
                                    </Link>
                                    <div className="main_header_last_mid">
                                        <div className="header_last_mid_svg">
                                            <Earth />
                                        </div>
                                    </div>
                                </div>
                                <div className="main_header_last_scd">
                                    <button className="main_header_last_last_box">
                                        <button type="button" className="main_header_last_mymenu" ref={outSection} onClick={() => setModalOpen(true)}>
                                            <Menu className="menu" />
                                            <ModalLogin open={modalOpen}>
                                                <div className="momo">
                                                    <div className="modalhome-btn">
                                                        <div className="modalhome-btn2">
                                                            <div type="button" className="modalhome-signup" onClick={() => setLoginOpen(true)} >회원 가입
                                                                <ModalSign open={loginOpen}></ModalSign>
                                                            </div>
                                                            <div type="button" className="modalhome-login" onClick={() => setLoginOpen(true)} >로그인
                                                                <ModalSign open={loginOpen}></ModalSign>
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

                                        </button>

                                        <div className="main_header_last_mymy" ref={outSection} onClick={() => setModalOpen(true)} >
                                            <My />
                                            <ModalLogin open={modalOpen}>
                                                <div className="momo">
                                                    <div className="modalhome-btn">
                                                        <div className="modalhome-btn2" >
                                                            <div type="button" className="modalhome-signup" onClick={() => setLoginOpen(true)} >회원 가입</div>
                                                            <ModalSign open={loginOpen}></ModalSign>
                                                            <div type="button" className="modalhome-login" onClick={() => setLoginOpen(true)}>로그인
                                                                <ModalSign open={loginOpen}></ModalSign>
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
                                    </button>

                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="dgfd" style={{ opacity: search ? "1" : "0" }}>
                        <div className="pokmlm">
                            <div className="pokmfle">
                                <div className="p11">
                                    <div className="c11we">
                                        <label className="in3kizz i9jpnbz i1mixo1 dir dir-ltr" for="bigsearch-query-location-input">
                                            <div className="c1gxtg0q dir dir-ltr">
                                                <div className="i1kt4qwh dir dir-ltr">여행지</div>
                                                <input className="ivycze5 dir dir-ltr" aria-autocomplete="none" autocomplete="off" autocorrect="off" spellcheck="false" id="bigsearch-query-location-input" name="query" aria-describedby="bigsearch-query-location-description" placeholder="여행지 검색" data-testid="structured-search-input-field-query" />

                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="sv3mkdx dir dir-ltr"></div>
                                <div className="p22">
                                    <div className="p22sd">
                                        <div className="b192dx2b b174x59c dir dir-ltr" role="button" tabindex="0" aria-expanded="false" data-testid="structured-search-input-field-split-dates-0">
                                            <div className="c11if3v5 dir dir-ltr">
                                                <div className="l1vto4to dir dir-ltr">체크인</div>
                                                <div className="p1kudodg dir dir-ltr">날짜 입력</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sv3mkdx dir dir-ltr"></div>
                                    <div className="p22sd">
                                        <div className="b192dx2b b174x59c dir dir-ltr" role="button" tabindex="0" aria-expanded="false" data-testid="structured-search-input-field-split-dates-0">
                                            <div className="c11if3v5 dir dir-ltr">
                                                <div className="l1vto4to dir dir-ltr">체크아웃</div>
                                                <div className="p1kudodg dir dir-ltr">날짜 입력</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sv3mkdx dir dir-ltr"></div>
                                <div className="p33">
                                    <div className="p22sd">
                                        <div className="b192dx2b b174x59c dir dir-ltr" role="button" tabindex="0" aria-expanded="false" data-testid="structured-search-input-field-split-dates-0">
                                            <div className="c11if3v5 dir dir-ltr">
                                                <div className="l1vto4to dir dir-ltr">여행자</div>
                                                <div className="p1kudodg dir dir-ltr">게스트 추가</div>
                                            </div>
                                        </div>
                                        <div className="btnweq">
                                            <button className="bbtnasd">
                                            <span className="_tcp689">
                                                <div className="c8th90 dir dir-ltr">
                                                    <div className=" dir dir-ltr">
                                                        <Search className="starss"/>
                                                    </div>
                                                    <div className="l1huikbk l123k1u5 dir dir-ltr">검색</div>
                                                </div>
                                            </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </>
    )
}