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


export default function InfoHeader() {
    const [modalOpen, setModalOpen] = useState(false);
    const outSection = useRef(null);
    const outSection2 = useRef(null);
    const [loginOpen, setLoginOpen] = useState(false); //모달사인



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


    return (
        <header className="room_header">
            <div className="room_header_inner" >
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
                <div className="room_header-middle">
                    <div className="room_header-mid-f">
                        <div className="room_header-mid-in1">
                            <button className="room_header-mid-in1-btn" type="button">
                                <div className="room_header-mid-in1-div">검색 시작하기</div>
                                <div className="room_header-mid-in1-ic">
                                    <Search />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="room_header-mid-s">
                        {/* 이너는 나중에 */}
                        <div className="room_header-mid-in2">
                            <form className="room_header-mid-form">
                                <div className="room_header-mid-top">
                                    <div aria-label="무엇을 찾고 계신가요?"></div>
                                    <div className="room_header_mid-t1"></div>
                                </div>
                                <div className="room_header-mid-inner"></div>
                            </form>
                        </div>
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

        </header>


    );
}