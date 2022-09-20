import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as Search } from '../images/Search.svg';
import { ReactComponent as Earth } from '../images/Earth.svg';
import { ReactComponent as Menu } from '../images/Menu.svg';
import { ReactComponent as My } from '../images/My.svg';
import { useState, useRef} from 'react';
import ModalLogin from './ModalLogin';
import { useEffect } from "react";
// import { ReactComponent as Closelogin } from '../images/Closelogin.svg';

export default function Header() {
    const [modalOpen, setModalOpen] = useState(false);
    const outSection = useRef(null);


    useEffect(() => {
        function handleClickOutside(e) {
            if (outSection.current && !outSection.current.contains(e.target)) {
                setModalOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [outSection]);

    return (
        <>
        <header className="main_header" >
            <div className="main_header_inner">
                <div className="main_header_front">
                    <div className="main_front_logo">
                        <Link to="/" className="main_home_link" aria-label="에어비앤비 홈페이지">
                            <Logo className="header_front_logo"/>
                        </Link>
                    </div>
                </div>
                <div className="main_header_mid">
                    <div className="main_header_mid_box">
                        <button className="main_header_mid_frt">
                           <div className="main_header_mid_frt_txt">어디든지</div>
                        </button>
                        <span className="barbar"></span>
                        <button className="main_header_mid_mid">
                            <div className="main_header_mid_mid_txt">언제든 일주일</div>
                        </button>
                        <span className="barbar"></span>
                        <button className="main_header_mid_last">
                            <div className="main_header_mid_last_txt">게스트 추가</div>
                            <div className="main_header_mid_search">
                                <Search className="search"/>
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
                                    <button type="button" className="main_header_last_mymenu" ref={outSection} onClick={()=>setModalOpen(true)}>
                                        <Menu className="menu" />
                                        <ModalLogin open={modalOpen} >
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
                                        </ModalLogin>
                                        
                                    </button>
                                    
                                <div className="main_header_last_mymy" ref={outSection} onClick={()=>setModalOpen(true)} >
                                    <My />
                                    <ModalLogin open={modalOpen}>
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
                                        </ModalLogin>
                                </div>
                            </button>
                            
                        </div>
                    </nav>
                </div>
            </div>
        </header>
        </>
    )
}