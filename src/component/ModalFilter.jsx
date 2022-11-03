import React from "react";
import { ReactComponent as Closelogin } from '../images/Closelogin.svg';
 import { useState, useEffect, useRef } from "react";


const ModalFilter = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close } = props;
    
    const [countbtn, setcountbtn] = useState(false);

    

    return (
        <div className={open ? 'filtermodal' : "nonemodal"} >
            {open ? (
                <div className='ftmodal'>
                    <div className="_pa35zs">
                        <button aria-label="닫기" type="button" className="_oda838" onClick={close}>
                            <span className="_e296pg">
                                <Closelogin />
                            </span>
                        </button>
                    </div>

                    <header className="_1youxq0">
                        <div className="_1tng6ym"></div>
                        <div className="_9t7ktw">
                            <h1 tabindex="-1" className="_14i3z6h" elementtiming="LCP-target">
                                <div className="_1q9sh65">필터</div>
                            </h1>
                        </div>
                        <div className="_rrmdgl"></div>
                    </header>
                    <div className="_10toigd">
                        <main id="site-content">
                            <div>
                                <div className="filter_inner">
                                    <div className="ft-inner">
                                        <div className="_16sjn7m8">
                                            <div class="_11tsb6x"></div>
                                            <section>
                                                <div className="_zi86zd8">
                                                    <h2 id="filter-section-heading-id--1297268627847806902" tabindex="-1" className="_14i3z6h1" elementtiming="LCP-target">가격 범위</h2>
                                                </div>
                                                <div className="oefjnkx">
                                                    <div className="wyhmdc">
                                                        <div className="_f6kkd8">
                                                            <div style={{ paddingTop: "8px" }}>
                                                                <div class="s1kx2c1w dir dir-ltr">평균 1박 요금은 ₩296,768입니다</div>
                                                                <div>
                                                                    <div className="ierhdc">
                                                                        {/* <div><div class="_1da2uww" aria-label="대부분 숙소의 요금은 1박당 ₩375,000 이상입니다." role="img"><div class="_1bf80wz8" style="height: 0px;"></div><div class="_1bf80wz8" style="height: 0px;"></div><div class="_1bf80wz8" style="height: 2px;"></div><div class="_1bf80wz8" style="height: 0px;"></div><div class="_1bf80wz8" style="height: 4px;"></div><div class="_1bf80wz8" style="height: 3px;"></div><div class="_1bf80wz8" style="height: 10px;"></div><div class="_1bf80wz8" style="height: 10px;"></div><div class="_1bf80wz8" style="height: 20px;"></div><div class="_1bf80wz8" style="height: 27px;"></div><div class="_1bf80wz8" style="height: 22px;"></div><div class="_1bf80wz8" style="height: 27px;"></div><div class="_1bf80wz8" style="height: 40px;"></div><div class="_1bf80wz8" style="height: 34px;"></div><div class="_1bf80wz8" style="height: 36px;"></div><div class="_1bf80wz8" style="height: 64px;"></div><div class="_1bf80wz8" style="height: 42px;"></div><div class="_1bf80wz8" style="height: 56px;"></div><div class="_1bf80wz8" style="height: 51px;"></div><div class="_1bf80wz8" style="height: 46px;"></div><div class="_1bf80wz8" style="height: 58px;"></div><div class="_1bf80wz8" style="height: 40px;"></div><div class="_1bf80wz8" style="height: 44px;"></div><div class="_1bf80wz8" style="height: 32px;"></div><div class="_1bf80wz8" style="height: 27px;"></div><div class="_1bf80wz8" style="height: 18px;"></div><div class="_1bf80wz8" style="height: 24px;"></div><div class="_1bf80wz8" style="height: 19px;"></div><div class="_1bf80wz8" style="height: 30px;"></div><div class="_1bf80wz8" style="height: 23px;"></div><div class="_1bf80wz8" style="height: 20px;"></div><div class="_1bf80wz8" style="height: 19px;"></div><div class="_1bf80wz8" style="height: 11px;"></div><div class="_1bf80wz8" style="height: 7px;"></div><div class="_1bf80wz8" style="height: 12px;"></div><div class="_1bf80wz8" style="height: 14px;"></div><div class="_1bf80wz8" style="height: 6px;"></div><div class="_1bf80wz8" style="height: 4px;"></div><div class="_1bf80wz8" style="height: 3px;"></div><div class="_1bf80wz8" style="height: 2px;"></div><div class="_1bf80wz8" style="height: 6px;"></div><div class="_1bf80wz8" style="height: 3px;"></div><div class="_1bf80wz8" style="height: 6px;"></div><div class="_1bf80wz8" style="height: 3px;"></div><div class="_1bf80wz8" style="height: 4px;"></div><div class="_1bf80wz8" style="height: 6px;"></div><div class="_1bf80wz8" style="height: 2px;"></div><div class="_1bf80wz8" style="height: 2px;"></div><div class="_1bf80wz8" style="height: 2px;"></div><div class="_1bf80wz8" style="height: 24px;"></div></div><div class="_sh9qj2d"><div class="_14j14ohv"></div><div class="_ejkfvn"><div class="atm_1xqa46a_1vi7ecw atm_wq_cs5v99 atm_lk_1v6z61t atm_ll_1v6z61t atm_gz_1siw5wn atm_tk_j8z7w7 dir dir-ltr" style="left: 0%; position: absolute;"><button class="atm_26_1spn1w4 atm_66_nqa18y atm_9j_tlke0l atm_9s_1o8liyq atm_gi_idpfg4 atm_mk_h2mmj6 atm_r3_1h6ojuz atm_rd_glywfm atm_6h_t94yts atm_4b_123340r atm_vy_171ogzb atm_lo_1y44olf atm_le_1y44olf atm_lk_ftgil2 atm_ll_ftgil2 atm_7l_11x86a4 atm_c8_dlk8xv atm_bx_1kw7nm4 atm_tl_1gw4zv3 atm_174zlj6_13gfvf7 atm_1jhk75u_si67jz atm_e2_171ogzb atm_2d_1hbpp16 atm_5j_1ssbidh atm_kd_glywfm atm_nvh0zw_glywfm atm_10xqkau_glywfm atm_6sivc_idpfg4 atm_1t4m47o_idpfg4 atm_so7p3s_glywfm atm_x9r51u_glywfm atm_e0aj52_glywfm atm_1b7jadx_ryfd4z atm_wa0l67_90tbsb atm_z8v79x_glywfm atm_57992z_glywfm atm_1fi7hcc_idpfg4 atm_1bpl3k1_idpfg4 atm_kwr3fs_glywfm atm_1vbw7mi_glywfm atm_iqrf8d_glywfm atm_1k7j3g0_ryfd4z atm_k7s5ow_90tbsb atm_uc_19dmrd5 atm_1xc0vp4_hc6nzr atm_1c5zo6y_15xp5po atm_44hetw_glywfm atm_j9qr6e_1o0nnai dir dir-ltr" type="button" aria-valuenow="14000" aria-valuetext="₩14,000 KRW" aria-label="최저 요금" role="slider" aria-valuemax="1500000" aria-valuemin="14000" aria-disabled="false" data-handle-key="0" tabindex="0"><span class="atm_9s_11p5wf0 atm_vy_1osqo2v atm_e2_1osqo2v atm_d5_1bp4okc atm_dz_1qdkfv0 atm_cx_yh40bf atm_mf_1h6ojuz dir dir-ltr"><div class="atm_e2_ftgil2 atm_vy_t94yts atm_2d_123340r atm_npdpgo_1fwxnve dir dir-ltr"></div><div class="atm_e2_ftgil2 atm_vy_t94yts atm_2d_123340r atm_npdpgo_1fwxnve dir dir-ltr"></div><div class="atm_e2_ftgil2 atm_vy_t94yts atm_2d_123340r atm_npdpgo_1fwxnve dir dir-ltr"></div></span></button></div><div class="atm_1xqa46a_1vi7ecw atm_wq_cs5v99 atm_lk_1v6z61t atm_ll_1v6z61t atm_gz_1siw5wn atm_tk_j8z7w7 dir dir-ltr" style="left: 100%; position: absolute;"><button class="atm_26_1spn1w4 atm_66_nqa18y atm_9j_tlke0l atm_9s_1o8liyq atm_gi_idpfg4 atm_mk_h2mmj6 atm_r3_1h6ojuz atm_rd_glywfm atm_6h_t94yts atm_4b_123340r atm_vy_171ogzb atm_lo_1y44olf atm_le_1y44olf atm_lk_ftgil2 atm_ll_ftgil2 atm_7l_11x86a4 atm_c8_dlk8xv atm_bx_1kw7nm4 atm_tl_1gw4zv3 atm_174zlj6_13gfvf7 atm_1jhk75u_si67jz atm_e2_171ogzb atm_2d_1hbpp16 atm_5j_1ssbidh atm_kd_glywfm atm_nvh0zw_glywfm atm_10xqkau_glywfm atm_6sivc_idpfg4 atm_1t4m47o_idpfg4 atm_so7p3s_glywfm atm_x9r51u_glywfm atm_e0aj52_glywfm atm_1b7jadx_ryfd4z atm_wa0l67_90tbsb atm_z8v79x_glywfm atm_57992z_glywfm atm_1fi7hcc_idpfg4 atm_1bpl3k1_idpfg4 atm_kwr3fs_glywfm atm_1vbw7mi_glywfm atm_iqrf8d_glywfm atm_1k7j3g0_ryfd4z atm_k7s5ow_90tbsb atm_uc_19dmrd5 atm_1xc0vp4_hc6nzr atm_1c5zo6y_15xp5po atm_44hetw_glywfm atm_j9qr6e_1o0nnai dir dir-ltr" type="button" aria-valuenow="1500000" aria-valuetext="₩1,500,000 KRW" aria-label="최고 요금" role="slider" aria-valuemax="1500000" aria-valuemin="14000" aria-disabled="false" data-handle-key="1" tabindex="0"><span class="atm_9s_11p5wf0 atm_vy_1osqo2v atm_e2_1osqo2v atm_d5_1bp4okc atm_dz_1qdkfv0 atm_cx_yh40bf atm_mf_1h6ojuz dir dir-ltr"><div class="atm_e2_ftgil2 atm_vy_t94yts atm_2d_123340r atm_npdpgo_1fwxnve dir dir-ltr"></div><div class="atm_e2_ftgil2 atm_vy_t94yts atm_2d_123340r atm_npdpgo_1fwxnve dir dir-ltr"></div><div class="atm_e2_ftgil2 atm_vy_t94yts atm_2d_123340r atm_npdpgo_1fwxnve dir dir-ltr"></div></span></button></div></div><div class="_3ck9kxg" style="left: 0%; width: 100%;"></div></div></div> */}
                                                                        <div className="rejhcx">
                                                                            <div class="_1jj61m9">
                                                                                <label class="_1yw7hpv" for="price_filter_min">
                                                                                    <div class="_1m2ich98">
                                                                                        <div class="_11hx67x">최저 요금</div>
                                                                                    </div>
                                                                                    <div dir="ltr">
                                                                                        <div class="_fywymp7">
                                                                                            <div class="_utak6qs">
                                                                                                <span>₩</span>
                                                                                            </div>
                                                                                            <input class="_yrzsibu" id="price_filter_min" autocomplete="off" type="text" aria-describedby="" value="14000" />
                                                                                        </div>
                                                                                    </div>
                                                                                </label>
                                                                            </div>
                                                                            <div class="sqef0rt dir dir-ltr" tabindex="-1">–</div>
                                                                            <div class="_1jj61m9">
                                                                                <label class="_1yw7hpv" for="price_filter_min">
                                                                                    <div class="_1m2ich98">
                                                                                        <div class="_11hx67x">최고 요금</div>
                                                                                    </div>
                                                                                    <div dir="ltr">
                                                                                        <div class="_fywymp7">
                                                                                            <div class="_utak6qs">
                                                                                                <span>₩</span>
                                                                                            </div>
                                                                                            <input class="_yrzsibu" id="price_filter_min" autocomplete="off" type="text" aria-describedby="" value="1500000+" />
                                                                                        </div>
                                                                                    </div>
                                                                                </label>
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
                            </div>
                            <div>
                                <div className="filter_inner">
                                    <div className="ft-inner">
                                        <div className="_16sjn7m8">
                                            <div class="_11tsb6x"></div>
                                            <section>
                                                <div className="_zi86zd8">
                                                    <h2 id="filter-section-heading-id--1297268627847806902" tabindex="-1" className="_14i3z6h1a" elementtiming="LCP-target">숙소 유형</h2>
                                                </div>
                                                <div className="dfsfdf">
                                                    <div>
                                                        <div className="_q4izx9">
                                                            <div style={{ paddingTop: "0px", paddingBottom: "0px", borderRadius: "1px" }}>
                                                                <label style={{ cursor: "pointer" }}>
                                                                    <div className="_jro6t01">
                                                                        <div className="_7ytxmo">
                                                                            <span className="_10ndlvp">
                                                                                <input name="집 전체" aria-describedby="filterItem--6773250026204794377-checkbox-room_types-Entire_home_apt-row-subtitle" id="filterItem--6773250026204794377-checkbox-room_types-Entire_home_apt-row-checkbox" className="_1yf4i4f" type="checkbox" />
                                                                                <span className="_41yoza" data-checkbox="true"></span>
                                                                            </span>
                                                                        </div>
                                                                        <div className="_gfomxi">
                                                                            <div id="filterItem--6773250026204794377-checkbox-room_types-Entire_home_apt-row-title" className="_gw4xx4">집 전체</div>
                                                                            <div id="filterItem--6773250026204794377-checkbox-room_types-Entire_home_apt-row-subtitle" className="_hi9sy">단독으로 사용하는 공간 전체</div>
                                                                        </div>
                                                                    </div>
                                                                </label>

                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="_q4izx9">
                                                            <div style={{ paddingTop: "0px", paddingBottom: "0px", borderRadius: "1px" }}>
                                                                <label style={{ cursor: "pointer" }}>
                                                                    <div className="_jro6t01">
                                                                        <div className="_7ytxmo">
                                                                            <span className="_10ndlvp">
                                                                                <input name="집 전체" aria-describedby="filterItem--6773250026204794377-checkbox-room_types-Entire_home_apt-row-subtitle" id="filterItem--6773250026204794377-checkbox-room_types-Entire_home_apt-row-checkbox" className="_1yf4i4f" type="checkbox" />
                                                                                <span className="_41yoza" data-checkbox="true"></span>
                                                                            </span>
                                                                        </div>
                                                                        <div className="_gfomxi">
                                                                            <div id="filterItem--6773250026204794377-checkbox-room_types-Entire_home_apt-row-title" className="_gw4xx4">집 전체</div>
                                                                            <div id="filterItem--6773250026204794377-checkbox-room_types-Entire_home_apt-row-subtitle" className="_hi9sy">단독으로 사용하는 공간 전체</div>
                                                                        </div>
                                                                    </div>
                                                                </label>

                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div></div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <div className="filter_inner">
                                    <div className="ft-inner">
                                        <div className="_16sjn7m8">
                                            <div class="_11tsb6x"></div>
                                            <section>
                                                <div className="_zi86zd8">
                                                    <h2 id="filter-section-heading-id--1297268627847806902" tabindex="-1" className="_14i3z6h1a" elementtiming="LCP-target">침실과 침대</h2>
                                                </div>
                                                <div className="bndviu">
                                                    <div className="wyhmdc">
                                                        <div style={{ paddingBottom: "16px" }}>
                                                            <div>
                                                                <legend className="_173jxq">
                                                                    <h3 tabindex="-1" elementtiming="LCP-target" className="_14i3z6h">침실</h3>
                                                                </legend>
                                                            </div>
                                                            <div className="vcljsd">
                                                                <div>
                                                                    <div className="vcljsd">
                                                                        <div>
                                                                            <div id="menuItemButton-상관없음" data-testid="menuItemButton-상관없음" className="_1d9tdvw">
                                                                                <button className="_11yc859a" aria-pressed="true" type="button">
                                                                                    <span className="_gjz3kfc" aria-label="상관없음">상관없음</span>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div id="menuItemButton-상관없음" data-testid="menuItemButton-상관없음" className="_1d9tdvw">
                                                                                <div className="_1710jwy" onClick={() => setcountbtn(true)} style={{ color: countbtn ? "rgb(255, 255, 255)" : "rgb(34, 34, 34)", backgroundColor: countbtn ? "rgb(34, 34, 34)" : "rgb(255, 255, 255)" }}>
                                                                                    <span className="_v56eio" aria-label="1">1</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div id="menuItemButton-상관없음" data-testid="menuItemButton-상관없음" className="_1d9tdvw">
                                                                                <div className="_1710jwy">
                                                                                    <span className="_v56eio" aria-label="1">2</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div id="menuItemButton-상관없음" data-testid="menuItemButton-상관없음" className="_1d9tdvw">
                                                                                <div className="_1710jwy">
                                                                                    <span className="_v56eio" aria-label="1">3</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div id="menuItemButton-상관없음" data-testid="menuItemButton-상관없음" className="_1d9tdvw">
                                                                                <div className="_1710jwy">
                                                                                    <span className="_v56eio" aria-label="1">4</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div id="menuItemButton-상관없음" data-testid="menuItemButton-상관없음" className="_1d9tdvw">
                                                                                <div className="_1710jwy">
                                                                                    <span className="_v56eio" aria-label="1">5</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div id="menuItemButton-상관없음" data-testid="menuItemButton-상관없음" className="_1d9tdvw">
                                                                                <div className="_1710jwy">
                                                                                    <span className="_v56eio" aria-label="1">6</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div id="menuItemButton-상관없음" data-testid="menuItemButton-상관없음" className="_1d9tdvw">
                                                                                <div className="_1710jwy">
                                                                                    <span className="_v56eio" aria-label="1">7</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div id="menuItemButton-상관없음" data-testid="menuItemButton-상관없음" className="_1d9tdvw">
                                                                                <div className="_1710jwy">
                                                                                    <span className="_v56eio" aria-label="1">8+</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="wyhmdc">
                                                        <div style={{ paddingBottom: "16px" }}>
                                                            <div>
                                                                <legend className="_173jxq">
                                                                    <h3 tabindex="-1" elementtiming="LCP-target" className="_14i3z6h">침대</h3>
                                                                </legend>
                                                            </div>
                                                            <div className="vcljsd">
                                                                <div>
                                                                    <div className="vcljsd">
                                                                        <div>
                                                                            <div id="menuItemButton-상관없음" data-testid="menuItemButton-상관없음" className="_1d9tdvw">
                                                                                <button className="_11yc859a" aria-pressed="true" type="button">
                                                                                    <span className="_gjz3kfc" aria-label="상관없음">상관없음</span>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div id="menuItemButton-상관없음" data-testid="menuItemButton-상관없음" className="_1d9tdvw">
                                                                                <div className="_1710jwy">
                                                                                    <span className="_v56eio" aria-label="1">1</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div id="menuItemButton-상관없음" data-testid="menuItemButton-상관없음" className="_1d9tdvw">
                                                                                <div className="_1710jwy">
                                                                                    <span className="_v56eio" aria-label="1">2</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div id="menuItemButton-상관없음" data-testid="menuItemButton-상관없음" className="_1d9tdvw">
                                                                                <div className="_1710jwy">
                                                                                    <span className="_v56eio" aria-label="1">3</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div id="menuItemButton-상관없음" data-testid="menuItemButton-상관없음" className="_1d9tdvw">
                                                                                <div className="_1710jwy">
                                                                                    <span className="_v56eio" aria-label="1">4</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div id="menuItemButton-상관없음" data-testid="menuItemButton-상관없음" className="_1d9tdvw">
                                                                                <div className="_1710jwy">
                                                                                    <span className="_v56eio" aria-label="1">5</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div id="menuItemButton-상관없음" data-testid="menuItemButton-상관없음" className="_1d9tdvw">
                                                                                <div className="_1710jwy">
                                                                                    <span className="_v56eio" aria-label="1">6</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div id="menuItemButton-상관없음" data-testid="menuItemButton-상관없음" className="_1d9tdvw">
                                                                                <div className="_1710jwy">
                                                                                    <span className="_v56eio" aria-label="1">7</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div id="menuItemButton-상관없음" data-testid="menuItemButton-상관없음" className="_1d9tdvw">
                                                                                <div className="_1710jwy">
                                                                                    <span className="_v56eio" aria-label="1">8+</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="wyhmdc">
                                                        <div style={{ paddingBottom: "16px" }}>
                                                            <div>
                                                                <legend className="_173jxq">
                                                                    <h3 tabindex="-1" elementtiming="LCP-target" className="_14i3z6h">욕실</h3>
                                                                </legend>
                                                            </div>
                                                            <div className="vcljsd">
                                                                <div>
                                                                    <div className="vcljsd">
                                                                        <div>
                                                                            <div id="menuItemButton-상관없음" data-testid="menuItemButton-상관없음" className="_1d9tdvw">
                                                                                <button className="_11yc859a" aria-pressed="true" type="button">
                                                                                    <span className="_gjz3kfc" aria-label="상관없음">상관없음</span>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div id="menuItemButton-상관없음" data-testid="menuItemButton-상관없음" className="_1d9tdvw">
                                                                                <div className="_1710jwy">
                                                                                    <span className="_v56eio" aria-label="1">1</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div id="menuItemButton-상관없음" data-testid="menuItemButton-상관없음" className="_1d9tdvw">
                                                                                <div className="_1710jwy">
                                                                                    <span className="_v56eio" aria-label="1">2</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div id="menuItemButton-상관없음" data-testid="menuItemButton-상관없음" className="_1d9tdvw">
                                                                                <div className="_1710jwy">
                                                                                    <span className="_v56eio" aria-label="1">3</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div id="menuItemButton-상관없음" data-testid="menuItemButton-상관없음" className="_1d9tdvw">
                                                                                <div className="_1710jwy">
                                                                                    <span className="_v56eio" aria-label="1">4</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div id="menuItemButton-상관없음" data-testid="menuItemButton-상관없음" className="_1d9tdvw">
                                                                                <div className="_1710jwy">
                                                                                    <span className="_v56eio" aria-label="1">5</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div id="menuItemButton-상관없음" data-testid="menuItemButton-상관없음" className="_1d9tdvw">
                                                                                <div className="_1710jwy">
                                                                                    <span className="_v56eio" aria-label="1">6</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div id="menuItemButton-상관없음" data-testid="menuItemButton-상관없음" className="_1d9tdvw">
                                                                                <div className="_1710jwy">
                                                                                    <span className="_v56eio" aria-label="1">7</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div id="menuItemButton-상관없음" data-testid="menuItemButton-상관없음" className="_1d9tdvw">
                                                                                <div className="_1710jwy">
                                                                                    <span className="_v56eio" aria-label="1">8+</span>
                                                                                </div>
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
                            </div>
                            <div>
                                <div className="filter_inner">
                                    <div className="ft-inner">
                                        <div className="_16sjn7m8">
                                            <div class="_11tsb6x"></div>
                                            <section>
                                                <div className="_zi86zd8">
                                                    <h2 id="filter-section-heading-id--1297268627847806902" tabindex="-1" className="_14i3z6h1a" elementtiming="LCP-target">건물 유형</h2>
                                                </div>
                                                <div>
                                                    <div className="bndviu">
                                                        <div className="wyhmdc">
                                                            <div style={{ paddingBottom: "16px" }}>
                                                                <div>
                                                                    <div className="_19dpbcv">
                                                                        <div className="_1doy7q3">
                                                                            <button className="_1h52lk5">
                                                                                <div className="_13as0oe">
                                                                                    <div className="_t7tlos">
                                                                                        <img className="_9phhti" src="https://a0.muscache.com/pictures/4d7580e1-4ab2-4d26-a3d6-97f9555ba8f9.jpg" alt="" />
                                                                                        <div className="_3hmsj">
                                                                                            <div className="_w7zj3g">단독 또는 다세대 주택</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </button>
                                                                        </div>
                                                                        <div className="_1doy7q3">
                                                                            <button className="_1h52lk5">
                                                                                <div className="_13as0oe">
                                                                                    <div className="_t7tlos">
                                                                                        <img className="_9phhti" src="https://a0.muscache.com/pictures/21cfc7c9-5457-494d-9779-7b0c21d81a25.jpg" alt="" />
                                                                                        <div className="_3hmsj">
                                                                                            <div className="_w7zj3g">아파트</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </button>
                                                                        </div>
                                                                        <div className="_1doy7q3">
                                                                            <button className="_1h52lk5">
                                                                                <div className="_13as0oe">
                                                                                    <div className="_t7tlos">
                                                                                        <img className="_9phhti" src="https://a0.muscache.com/pictures/6f261426-2e47-4c91-8b1a-7a847da2b21b.jpg" alt="" />
                                                                                        <div className="_3hmsj">
                                                                                            <div className="_w7zj3g">게스트용 별채</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </button>
                                                                        </div>
                                                                        <div className="_1doy7q3">
                                                                            <button className="_1h52lk5">
                                                                                <div className="_13as0oe">
                                                                                    <div className="_t7tlos">
                                                                                        <img className="_9phhti" src="https://a0.muscache.com/pictures/64b27fed-56a1-4f03-950a-d8da08efb428.jpg" alt="" />
                                                                                        <div className="_3hmsj">
                                                                                            <div className="_w7zj3g">호텔</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </button>
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
                            <div>
                                <div className="filter_inner">
                                    <div className="ft-inner">
                                        <div className="_16sjn7m8">
                                            <div class="_11tsb6x"></div>
                                            <section>
                                                <div className="_zi86zd8">
                                                    <h2 id="filter-section-heading-id--1297268627847806902" tabindex="-1" className="_14i3z6h1a" elementtiming="LCP-target">편의 시설</h2>
                                                </div>
                                                <div>
                                                    <div className="bndviu3">
                                                        <div className="wyhmdc">
                                                            <div>
                                                                <div className="t2353uq dir dir-ltr">
                                                                    <h3 tabindex="-1" className="_14i3z6h" elementtiming="LCP-target">필수</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="_q4izx9">
                                                                <div id="filterItem-7783811326556694790-checkbox-amenities-4" aria-disabled="false" className="rcem0st u6fux4d dir dir-ltr">
                                                                    <label for="filterItem-7783811326556694790-checkbox-amenities-4-row-checkbox" className="_13xlah4">
                                                                        <div className="_jro6t0">
                                                                            <div className="_7ytxmo">
                                                                                <span className="_10ndlvp">
                                                                                    <input name="무선 인터넷" id="filterItem-7783811326556694790-checkbox-amenities-4-row-checkbox" className="_1yf4i4f" type="checkbox" />
                                                                                    <span className="_41yoza" data-checkbox="true"></span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="_gfomxi">
                                                                                <div id="filterItem-7783811326556694790-checkbox-amenities-4-row-title" className="_gw4xx4">무선 인터넷</div>
                                                                            </div>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="_q4izx9">
                                                                <div id="filterItem-7783811326556694790-checkbox-amenities-4" aria-disabled="false" className="rcem0st u6fux4d dir dir-ltr">
                                                                    <label for="filterItem-7783811326556694790-checkbox-amenities-4-row-checkbox" className="_13xlah4">
                                                                        <div className="_jro6t0">
                                                                            <div className="_7ytxmo">
                                                                                <span className="_10ndlvp">
                                                                                    <input name="주방" id="filterItem-7783811326556694790-checkbox-amenities-4-row-checkbox" className="_1yf4i4f" type="checkbox" />
                                                                                    <span className="_41yoza" data-checkbox="true"></span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="_gfomxi">
                                                                                <div id="filterItem-7783811326556694790-checkbox-amenities-4-row-title" className="_gw4xx4">주방</div>
                                                                            </div>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="_q4izx9">
                                                                <div id="filterItem-7783811326556694790-checkbox-amenities-4" aria-disabled="false" className="rcem0st u6fux4d dir dir-ltr">
                                                                    <label for="filterItem-7783811326556694790-checkbox-amenities-4-row-checkbox" className="_13xlah4">
                                                                        <div className="_jro6t0">
                                                                            <div className="_7ytxmo">
                                                                                <span className="_10ndlvp">
                                                                                    <input name="세탁기" id="filterItem-7783811326556694790-checkbox-amenities-4-row-checkbox" className="_1yf4i4f" type="checkbox" />
                                                                                    <span className="_41yoza" data-checkbox="true"></span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="_gfomxi">
                                                                                <div id="filterItem-7783811326556694790-checkbox-amenities-4-row-title" className="_gw4xx4">세탁기</div>
                                                                            </div>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="_q4izx9">
                                                                <div id="filterItem-7783811326556694790-checkbox-amenities-4" aria-disabled="false" className="rcem0st u6fux4d dir dir-ltr">
                                                                    <label for="filterItem-7783811326556694790-checkbox-amenities-4-row-checkbox" className="_13xlah4">
                                                                        <div className="_jro6t0">
                                                                            <div className="_7ytxmo">
                                                                                <span className="_10ndlvp">
                                                                                    <input name="건조기" id="filterItem-7783811326556694790-checkbox-amenities-4-row-checkbox" className="_1yf4i4f" type="checkbox" />
                                                                                    <span className="_41yoza" data-checkbox="true"></span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="_gfomxi">
                                                                                <div id="filterItem-7783811326556694790-checkbox-amenities-4-row-title" className="_gw4xx4">건조기</div>
                                                                            </div>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="_q4izx9">
                                                                <div id="filterItem-7783811326556694790-checkbox-amenities-4" aria-disabled="false" className="rcem0st u6fux4d dir dir-ltr">
                                                                    <label for="filterItem-7783811326556694790-checkbox-amenities-4-row-checkbox" className="_13xlah4">
                                                                        <div className="_jro6t0">
                                                                            <div className="_7ytxmo">
                                                                                <span className="_10ndlvp">
                                                                                    <input name="에어컨" id="filterItem-7783811326556694790-checkbox-amenities-4-row-checkbox" className="_1yf4i4f" type="checkbox" />
                                                                                    <span className="_41yoza" data-checkbox="true"></span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="_gfomxi">
                                                                                <div id="filterItem-7783811326556694790-checkbox-amenities-4-row-title" className="_gw4xx4">에어컨</div>
                                                                            </div>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="_q4izx9">
                                                                <div id="filterItem-7783811326556694790-checkbox-amenities-4" aria-disabled="false" className="rcem0st u6fux4d dir dir-ltr">
                                                                    <label for="filterItem-7783811326556694790-checkbox-amenities-4-row-checkbox" className="_13xlah4">
                                                                        <div className="_jro6t0">
                                                                            <div className="_7ytxmo">
                                                                                <span className="_10ndlvp">
                                                                                    <input name="난방" id="filterItem-7783811326556694790-checkbox-amenities-4-row-checkbox" className="_1yf4i4f" type="checkbox" />
                                                                                    <span className="_41yoza" data-checkbox="true"></span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="_gfomxi">
                                                                                <div id="filterItem-7783811326556694790-checkbox-amenities-4-row-title" className="_gw4xx4">난방</div>
                                                                            </div>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="_cfvh61">
                                                        <div className="l1rjzj3m dir dir-ltr">
                                                            <button type="button" className="_edqkt1v">
                                                                <span className="lnq7699 dir dir-ltr">더 표시</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="filter_inner">
                                    <div className="ft-inner">
                                        <div className="_16sjn7m8">
                                            <div class="_11tsb6x"></div>
                                            <section>
                                                <div className="_zi86zd8">
                                                    <h2 id="filter-section-heading-id--1297268627847806902" tabindex="-1" className="_14i3z6h1a" elementtiming="LCP-target">예약 옵션</h2>
                                                </div>
                                                <div>
                                                    <div className="bndviu">
                                                        <div className="wyhmdc">
                                                            <div className="_1ubyg61">
                                                                <div>
                                                                    <div className="_jro6t0">
                                                                        <span className="_67jjmd" id="title-label-filterItem-4448503134735162330-switch-ib-true">즉시 예약</span>
                                                                    </div>
                                                                    <div className="_6gg9ez" id="subtitle-label-filterItem-4448503134735162330-switch-ib-true">호스트 승인을 기다릴 필요 없이 예약할 수 있는 숙소</div>
                                                                </div>
                                                                <div class="_1vmcy00">
                                                                    <button aria-checked="false" aria-labelledby="title-label-filterItem-4448503134735162330-switch-ib-true" aria-describedby="subtitle-label-filterItem-4448503134735162330-switch-ib-true" id="filterItem-4448503134735162330-switch-ib-true" role="switch" type="button" class="_1hzx1vsg">
                                                                        <div class="_vr1ztso"></div>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="wyhmdc">
                                                            <div className="_1ubyg61">
                                                                <div>
                                                                    <div className="_jro6t0">
                                                                        <span className="_67jjmd" id="title-label-filterItem-4448503134735162330-switch-ib-true">셀프 체크인</span>
                                                                    </div>
                                                                    <div className="_6gg9ez" id="subtitle-label-filterItem-4448503134735162330-switch-ib-true">숙소에 도착한 후 복잡한 절차 없이 쉽게 입실할 수 있습니다.</div>
                                                                </div>
                                                                <div class="_1vmcy00">
                                                                    <button aria-checked="false" aria-labelledby="title-label-filterItem-4448503134735162330-switch-ib-true" aria-describedby="subtitle-label-filterItem-4448503134735162330-switch-ib-true" id="filterItem-4448503134735162330-switch-ib-true" role="switch" type="button" class="_1hzx1vsg">
                                                                        <div class="_vr1ztso"></div>
                                                                    </button>
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
                            <div>
                                <div className="filter_inner">
                                    <div className="ft-inner">
                                        <div className="_16sjn7m8">
                                            <div class="_11tsb6x"></div>
                                            <section>
                                                <div className="_zi86zd81">
                                                    <h2 id="filter-section-heading-id--1297268627847806902" tabindex="-1" className="_14i3z6h1a1" elementtiming="LCP-target">접근성 편의</h2>
                                                    <div className="_lrg3eu">호스트가 제공하고 에어비앤비에서 검토한 정보입니다.</div>
                                                </div>
                                                <div>
                                                    <div className="bndviu3">
                                                        <div className="wyhmdc">
                                                            <div>
                                                                <div className="t2353uq dir dir-ltr">
                                                                    <h3 tabindex="-1" className="_14i3z6h" elementtiming="LCP-target">게스트 출입구 및 주차장</h3>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <div className="_q4izx9">
                                                                    <div id="filterItem-7783811326556694790-checkbox-amenities-4" aria-disabled="false" className="rcem0st u6fux4d dir dir-ltr">
                                                                        <label for="filterItem-7783811326556694790-checkbox-amenities-4-row-checkbox" className="_13xlah4">
                                                                            <div className="_jro6t0">
                                                                                <div className="_7ytxmo">
                                                                                    <span className="_10ndlvp">
                                                                                        <input id="filterItem-7783811326556694790-checkbox-amenities-4-row-checkbox" className="_1yf4i4f" type="checkbox" />
                                                                                        <span className="_41yoza" data-checkbox="true"></span>
                                                                                    </span>
                                                                                </div>
                                                                                <div className="_gfomxi">
                                                                                    <div id="filterItem-7783811326556694790-checkbox-amenities-4-row-title" className="_gw4xx4">게스트 출입구에 계단이나 문턱 없음</div>
                                                                                </div>
                                                                            </div>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <div className="_q4izx9">
                                                                    <div id="filterItem-7783811326556694790-checkbox-amenities-4" aria-disabled="false" className="rcem0st u6fux4d dir dir-ltr">
                                                                        <label for="filterItem-7783811326556694790-checkbox-amenities-4-row-checkbox" className="_13xlah4">
                                                                            <div className="_jro6t0">
                                                                                <div className="_7ytxmo">
                                                                                    <span className="_10ndlvp">
                                                                                        <input id="filterItem-7783811326556694790-checkbox-amenities-4-row-checkbox" className="_1yf4i4f" type="checkbox" />
                                                                                        <span className="_41yoza" data-checkbox="true"></span>
                                                                                    </span>
                                                                                </div>
                                                                                <div className="_gfomxi">
                                                                                    <div id="filterItem-7783811326556694790-checkbox-amenities-4-row-title" className="_gw4xx4">너비 81cm 이상의 게스트 출입구</div>
                                                                                </div>
                                                                            </div>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <div className="_q4izx9">
                                                                    <div id="filterItem-7783811326556694790-checkbox-amenities-4" aria-disabled="false" className="rcem0st u6fux4d dir dir-ltr">
                                                                        <label for="filterItem-7783811326556694790-checkbox-amenities-4-row-checkbox" className="_13xlah4">
                                                                            <div className="_jro6t0">
                                                                                <div className="_7ytxmo">
                                                                                    <span className="_10ndlvp">
                                                                                        <input id="filterItem-7783811326556694790-checkbox-amenities-4-row-checkbox" className="_1yf4i4f" type="checkbox" />
                                                                                        <span className="_41yoza" data-checkbox="true"></span>
                                                                                    </span>
                                                                                </div>
                                                                                <div className="_gfomxi">
                                                                                    <div id="filterItem-7783811326556694790-checkbox-amenities-4-row-title" className="_gw4xx4">휠체어 접근 가능 주차 공간</div>
                                                                                </div>
                                                                            </div>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <div className="_q4izx9">
                                                                    <div id="filterItem-7783811326556694790-checkbox-amenities-4" aria-disabled="false" className="rcem0st u6fux4d dir dir-ltr">
                                                                        <label for="filterItem-7783811326556694790-checkbox-amenities-4-row-checkbox" className="_13xlah4">
                                                                            <div className="_jro6t0">
                                                                                <div className="_7ytxmo">
                                                                                    <span className="_10ndlvp">
                                                                                        <input id="filterItem-7783811326556694790-checkbox-amenities-4-row-checkbox" className="_1yf4i4f" type="checkbox" />
                                                                                        <span className="_41yoza" data-checkbox="true"></span>
                                                                                    </span>
                                                                                </div>
                                                                                <div className="_gfomxi">
                                                                                    <div id="filterItem-7783811326556694790-checkbox-amenities-4-row-title" className="_gw4xx4">
                                                                                        게스트 출입구까지 계단이나 문턱 없이 이동 가능</div>
                                                                                </div>
                                                                            </div>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="_cfvh61">
                                                        <div className="l1rjzj3m dir dir-ltr">
                                                            <button type="button" className="_edqkt1v">
                                                                <span className="lnq7699 dir dir-ltr">더 표시</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="filter_inner">
                                    <div className="ft-inner">
                                        <div className="_16sjn7m8">
                                            <div class="_11tsb6x"></div>
                                            <section>
                                                <div className="_zi86zd8">
                                                    <h2 id="filter-section-heading-id--1297268627847806902" tabindex="-1" className="_14i3z6h1a" elementtiming="LCP-target">최고 수준의 숙소</h2>
                                                </div>
                                                <div>
                                                    <div className="bndviu">
                                                        <div className="wyhmdc">
                                                            <div className="_1ubyg61">
                                                                <div>
                                                                    <div className="_jro6t0">
                                                                        <span className="_67jjmd" id="title-label-filterItem-4448503134735162330-switch-ib-true">슈퍼호스트</span>
                                                                    </div>
                                                                    <div className="_6gg9ez" id="subtitle-label-filterItem-4448503134735162330-switch-ib-true">슈퍼호스트의 숙소에 머물러보세요</div>
                                                                    <div className="_2lqt1m">
                                                                        <div className="_1sikdxcl">더 알아보기</div>
                                                                    </div>
                                                                </div>
                                                                <div class="_1vmcy00">
                                                                    <button aria-checked="false" aria-labelledby="title-label-filterItem-4448503134735162330-switch-ib-true" aria-describedby="subtitle-label-filterItem-4448503134735162330-switch-ib-true" id="filterItem-4448503134735162330-switch-ib-true" role="switch" type="button" class="_1hzx1vsg">
                                                                        <div class="_vr1ztso"></div>
                                                                    </button>
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
                            <div>
                            <div className="filter_inner">
                                    <div className="ft-inner">
                                        <div className="_16sjn7m8">
                                            <div class="_11tsb6x"></div>
                                            <section>
                                                <div className="_zi86zd81">
                                                    <h2 id="filter-section-heading-id--1297268627847806902" tabindex="-1" className="_14i3z6h1a1" elementtiming="LCP-target">호스트 언어</h2>
                                                </div>
                                                <div>
                                                    <div className="bndviu3">
                                                            <div>
                                                                <div className="_q4izx9">
                                                                    <div id="filterItem-7783811326556694790-checkbox-amenities-4" aria-disabled="false" className="rcem0st u6fux4d dir dir-ltr">
                                                                        <label for="filterItem-7783811326556694790-checkbox-amenities-4-row-checkbox" className="_13xlah4">
                                                                            <div className="_jro6t0">
                                                                                <div className="_7ytxmo">
                                                                                    <span className="_10ndlvp">
                                                                                        <input id="filterItem-7783811326556694790-checkbox-amenities-4-row-checkbox" className="_1yf4i4f" type="checkbox" />
                                                                                        <span className="_41yoza" data-checkbox="true"></span>
                                                                                    </span>
                                                                                </div>
                                                                                <div className="_gfomxi">
                                                                                    <div id="filterItem-7783811326556694790-checkbox-amenities-4-row-title" className="_gw4xx4">영어</div>
                                                                                </div>
                                                                            </div>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="_q4izx9">
                                                                    <div id="filterItem-7783811326556694790-checkbox-amenities-4" aria-disabled="false" className="rcem0st u6fux4d dir dir-ltr">
                                                                        <label for="filterItem-7783811326556694790-checkbox-amenities-4-row-checkbox" className="_13xlah4">
                                                                            <div className="_jro6t0">
                                                                                <div className="_7ytxmo">
                                                                                    <span className="_10ndlvp">
                                                                                        <input id="filterItem-7783811326556694790-checkbox-amenities-4-row-checkbox" className="_1yf4i4f" type="checkbox" />
                                                                                        <span className="_41yoza" data-checkbox="true"></span>
                                                                                    </span>
                                                                                </div>
                                                                                <div className="_gfomxi">
                                                                                    <div id="filterItem-7783811326556694790-checkbox-amenities-4-row-title" className="_gw4xx4">프랑스어</div>
                                                                                </div>
                                                                            </div>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="_q4izx9">
                                                                    <div id="filterItem-7783811326556694790-checkbox-amenities-4" aria-disabled="false" className="rcem0st u6fux4d dir dir-ltr">
                                                                        <label for="filterItem-7783811326556694790-checkbox-amenities-4-row-checkbox" className="_13xlah4">
                                                                            <div className="_jro6t0">
                                                                                <div className="_7ytxmo">
                                                                                    <span className="_10ndlvp">
                                                                                        <input id="filterItem-7783811326556694790-checkbox-amenities-4-row-checkbox" className="_1yf4i4f" type="checkbox" />
                                                                                        <span className="_41yoza" data-checkbox="true"></span>
                                                                                    </span>
                                                                                </div>
                                                                                <div className="_gfomxi">
                                                                                    <div id="filterItem-7783811326556694790-checkbox-amenities-4-row-title" className="_gw4xx4">독일어</div>
                                                                                </div>
                                                                            </div>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="_q4izx9">
                                                                    <div id="filterItem-7783811326556694790-checkbox-amenities-4" aria-disabled="false" className="rcem0st u6fux4d dir dir-ltr">
                                                                        <label for="filterItem-7783811326556694790-checkbox-amenities-4-row-checkbox" className="_13xlah4">
                                                                            <div className="_jro6t0">
                                                                                <div className="_7ytxmo">
                                                                                    <span className="_10ndlvp">
                                                                                        <input id="filterItem-7783811326556694790-checkbox-amenities-4-row-checkbox" className="_1yf4i4f" type="checkbox" />
                                                                                        <span className="_41yoza" data-checkbox="true"></span>
                                                                                    </span>
                                                                                </div>
                                                                                <div className="_gfomxi">
                                                                                    <div id="filterItem-7783811326556694790-checkbox-amenities-4-row-title" className="_gw4xx4">일본어</div>
                                                                                </div>
                                                                            </div>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="_cfvh61">
                                                        <div className="l1rjzj3m dir dir-ltr">
                                                            <button type="button" className="_edqkt1v">
                                                                <span className="lnq7699 dir dir-ltr">더 표시</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                    <footer>
                        <div className="ftfooter">
                            <footer class="_zgc1p6">
                                <button type="button" className="_za4ekfm">전체 해제</button>
                                <a aria-live="polite" href="/?tab_id=home_tab&amp;refinement_paths%5B%5D=%2Fhomes&amp;search_mode=flex_destinations_search&amp;flexible_trip_lengths%5B%5D=one_week&amp;location_search=MIN_MAP_BOUNDS&amp;price_filter_input_type=0&amp;price_filter_num_nights=5&amp;date_picker_type=calendar&amp;category_tag=Tag%3A8225&amp;search_type=filter_change" className="_1ku51f04">숙소 691개 표시</a>
                            </footer>
                        </div>
                    </footer>
                </div>
            ) : null}
        </div>
    );
}

export default ModalFilter;