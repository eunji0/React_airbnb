import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as Search } from '../images/Search.svg';
import { ReactComponent as Earth } from '../images/Earth.svg';
import { ReactComponent as Menu } from '../images/Menu.svg';
import { ReactComponent as My } from '../images/My.svg';
import ModalHome from "./ModalHome";
import { useState} from "react";

export default function Header() {
    const [ModalHomeOn, setModalHomeOn]=useState(false);

    return (
        <>
        <ModalHome show={ModalHomeOn} onHide={()=>setModalHomeOn(false)}/>
        <header className="main_header">
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
                                <button type="button" className="main_header_last_mymenu" onClick={()=>setModalHomeOn(true) }>
                                    <Menu className="menu"/>
                                    
                                </button>
                                <div className="main_header_last_mymy" onClick={()=>setModalHomeOn(false) }>
                                    <My />
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