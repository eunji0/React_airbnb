import React from "react";
import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as Search } from '../images/Search.svg';
import { ReactComponent as Earth } from '../images/Earth.svg';
import { ReactComponent as Menu } from '../images/Menu.svg';
import { ReactComponent as My } from '../images/My.svg';
import { Link } from "react-router-dom";

export default function InfoHeader(){
    return(
        <header className="room_header">
            <div className="room_header_inner">
                <div className="room_header-front">
                    <Link to="/" className="room_header-front-link" aria-label="에어비앤비 홈페이지">
                        <div className="room_header-logo">
                            <Logo />
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
                                    <button className="r-hdr-pf-e-btn">
                                        <div className="pfediv">
                                            <Menu />
                                        </div>
                                        <div className="pfediv2">
                                            <My />
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