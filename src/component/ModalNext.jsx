import React from 'react';
import { useState, useEffect, useRef } from "react";
import { ReactComponent as Previous } from '../images/Previous.svg';
import { useRecoilState, useRecoilValue } from 'recoil';
import { phoneNumberState } from '../recoil/User';


const ModalNext = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;
  const [nextmodal, setnextmodal] = useState(false);
  const outSection = useRef(null);

  // recoil
  const phnum = useRecoilValue(phoneNumberState);
  const [phoneNumberAtomstate, setphoneNumberAtomstate]
    = useRecoilState(phoneNumberState)

  useEffect(() => {
    function handleClickOutside(e) {
      if (outSection.current && !outSection.current.contains(e.target)) {
        setLoginOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [outSection]);

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <main>
            {/* {props.children} */}
            <div className="Modalll">
              <div className={nextmodal ? 'nextmodal' : "nonemodal"}>
                <div className='nmmodal'>
                  <div className="_pa35zs">
                    <button aria-label="닫기" type="button" className="_oda838" onClick={() => setnextmodal(!nextmodal)}>
                      <span className="_e296pg">
                        <Previous />
                      </span>
                    </button>
                  </div>
                  <header className="_1youxq0">
                    <div className="_1tng6ym"></div>
                    <div className="_9t7ktw">
                      <h1 tabindex="-1" className="_14i3z6h" elementtiming="LCP-target">
                        <div className="_1q9sh65">전화번호 인증하기</div>
                      </h1>
                    </div>
                    <div className="_rrmdgl"></div>
                  </header>
                  <div className="_12kfhdn">
                    <div data-testid="login-pane">
                      <h2 className="_wtixm2">+82 {phnum}번으로 보내드린 인증 코드를 입력하세요.</h2>
                      <div>
                        <div style={{ maxWidth: "183px" }}>
                          <div className="_p4w1xj">
                            <label className="_1yw7hpv" for="phone-verification-code-form__code-input">
                              <div dir="ltr">
                                <div className="_slsckq">
                                  <input aria-label="입력된 코드: " placeholder="------" maxlength="6" className="_xr1n8d" id="phone-verification-code-form__code-input" autocomplete="one-time-code" inputmode="numeric" type="tel" aria-describedby="" value="" />
                                </div>
                              </div>
                            </label>
                          </div>
                        </div>
                        <div className="_klarpw"></div>
                      </div>
                      <div className="_w99wiq"></div>
                      <div id="airlock-inline-container" aria-live="polite"></div>
                      <div className="_4518a5">
                        <button type="button" className="_za4ekfm">옵션 더 보기</button>
                        <button type="button" className="_1ku51f04">계속</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </main>
        </section>
      ) : close}
    </div>
  );
};

export default ModalNext;

