import React from "react";
import { ReactComponent as Closelogin } from '../images/Closelogin.svg';
// import { useState, useEffect, useRef } from "react";


const ModalFilter = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close } = props;

    return (
        <div className={open ? 'filtermodal' : "nonemodal"}>
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
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
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