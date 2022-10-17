import React from 'react';
import { ReactComponent as Down } from '../images/Down.svg';
import { Link } from "react-router-dom";
import { ReactComponent as Facebook2 } from '../images/Facebook2.svg';
import { ReactComponent as Google } from '../images/Google.svg';
import { ReactComponent as Apple } from '../images/Apple.svg';
import { ReactComponent as Email } from '../images/Email.svg';
import { useState, useEffect, useRef } from "react";
import { ReactComponent as Closelogin } from '../images/Closelogin.svg';
import { ReactComponent as Error } from '../images/Error.svg';
import { ReactComponent as Previous } from '../images/Previous.svg';
import { useRecoilState, useRecoilValue } from 'recoil';
import { phoneNumberState } from '../recoil/User';


const ModalSign = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;
  const [loginOpen, setLoginOpen] = useState(false); //모달사인
  const [inputOn, setInputOn] = useState(false);//전화번호 입력 밖 터치
  const [phoneNum, setphoneNum] = useState("");//전화번호 입력
  const [isConfirm, setisConfirm] = useState(false);//전화번호 확인
  const [nextmodal, setnextmodal] = useState(false);
  const outSection = useRef(null);
  const inputNumber = useRef(null);

  // recoil
  const phnum = useRecoilValue(phoneNumberState);
  const [phoneNumberAtomstate, setphoneNumberAtomstate]
  =useRecoilState(phoneNumberState)

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

  useEffect(() => {
    function handleClickOutside(e) {
      if (inputNumber.current && !inputNumber.current.contains(e.target)) {
        setInputOn(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [inputNumber]);


  // 전화번호 공란
  useEffect(() => {
    if (isConfirm === true && phoneNum.length < 1) {
      setisConfirm(true);
      setInputOn(true)
      return
    }
    setisConfirm(false);

    return
  }, [isConfirm, phoneNum.length])

  // const click = async () => {
    
  // }

  function click(){
    if (phoneNum.length < 1) {
      setisConfirm(true);
      setInputOn(true);
      setnextmodal(false);
      return
    }
    setisConfirm(false);
    setInputOn(false);
    setnextmodal(true);
    setphoneNumberAtomstate(phoneNum);
    return
  }


  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
          </header>
          <main>
            {/* {props.children} */}
            <div className="Modalll">
              <div className="loginModal" style={{ display: nextmodal ? "none" : "flex" }}>
                <div className="login-modal">
                  <div className="loginHeader">

                    <div type="button" className="closelogin" onClick={()=>setLoginOpen(!loginOpen)}>
                      <Closelogin />
                    </div>
                    <div className="loginheadertxt">로그인 또는 회원가입</div>

                  </div>
                  <div className="loginMain">
                    <div className="login-main">
                      <div className="lm1">
                        <h3 className="_u72b34" >에어비앤비에 오신 것을 환영합니다.</h3>
                      </div>
                      <form className="lm2">
                        <div className="lm2-form">

                        </div>
                        <div className="cx1v2qp dir dir-ltr" style={{ borderRadius: "8px" }}>
                          <div className="_jro6t0">
                            <div className="_e296pg" style={{ flex: "1 1 0%" }}>
                              <div role="presentation" className="_sbmagf" style={{ background: "#fff", borderRadius: "8px 8px 0px 0px", borderTopColor: "rgb(221,221,221)", inset: "0px 0px -1px" }}>
                              </div>
                              <div className="_ey3tib">
                                <label className="_19nw8j1" for="country">
                                  <div className="_zhftk97">
                                    <div className="_11hx67x">국가/지역</div>
                                  </div>
                                  <div className="_3hmsj">
                                    <select data-testid="login-signup-countrycode" className="_1iwku6d" id="country">
                                      <option value="242CG">콩고 (+242)</option>
                                      <option value="243CD">콩고 민주 공화국 (+243)</option>
                                      <option value="852HK">홍콩 (+852)</option>
                                      <option value="383XK">코소보 (+383)</option>
                                      <option value="853MO">마카오 (+853)</option>
                                      <option value="389MK">북마케도니아 (+389)</option>
                                      <option value="886TW">대만 (+886)</option>
                                      <option value="233GH">가나 (+233)</option>
                                      <option value="241GA">가봉 (+241)</option>
                                      <option value="592GY">가이아나 (+592)</option>
                                      <option value="220GM">감비아 (+220)</option>
                                      <option value="44GG">건지 (+44)</option>
                                      <option value="590GP">과들루프 (+590)</option>
                                      <option value="502GT">과테말라 (+502)</option>
                                      <option value="1GU">괌 (+1)</option>
                                      <option value="1GD">그레나다 (+1)</option>
                                      <option value="30GR">그리스 (+30)</option>
                                      <option value="299GL">그린란드 (+299)</option>
                                      <option value="224GN">기니 (+224)</option>
                                      <option value="245GW">기니비사우 (+245)</option>
                                      <option value="264NA">나미비아 (+264)</option>
                                      <option value="674NR">나우루 (+674)</option>
                                      <option value="234NG">나이지리아 (+234)</option>
                                      <option value="211SS">남수단 (+211)</option>
                                      <option value="27ZA">남아프리카 (+27)</option>
                                      <option value="31NL">네덜란드 (+31)</option>
                                      <option value="599BQ">네덜란드령 카리브 (+599)</option>
                                      <option value="977NP">네팔 (+977)</option>
                                      <option value="47NO">노르웨이 (+47)</option>
                                      <option value="672NF">노퍽섬 (+672)</option>
                                      <option value="64NZ">뉴질랜드 (+64)</option>
                                      <option value="687NC">뉴칼레도니아 (+687)</option>
                                      <option value="683NU">니우에 (+683)</option>
                                      <option value="227NE">니제르 (+227)</option>
                                      <option value="505NI">니카라과 (+505)</option>
                                      <option value="45DK">덴마크 (+45)</option>
                                      <option value="1DM">도미니카 (+1)</option>
                                      <option value="1DO">도미니카 공화국 (+1)</option>
                                      <option value="49DE">독일 (+49)</option>
                                      <option value="670TL">동티모르 (+670)</option>
                                      <option value="856LA">라오스 (+856)</option><option value="231LR">라이베리아 (+231)</option><option value="371LV">라트비아 (+371)</option><option value="7RU">러시아 (+7)</option><option value="961LB">레바논 (+961)</option><option value="266LS">레소토 (+266)</option><option value="40RO">루마니아 (+40)</option><option value="352LU">룩셈부르크 (+352)</option><option value="250RW">르완다 (+250)</option><option value="218LY">리비아 (+218)</option><option value="262RE">리유니온 (+262)</option><option value="370LT">리투아니아 (+370)</option><option value="423LI">리히텐슈타인 (+423)</option><option value="261MG">마다가스카르 (+261)</option><option value="596MQ">마르티니크 (+596)</option><option value="692MH">마셜 제도 (+692)</option><option value="262YT">마요트 (+262)</option><option value="265MW">말라위 (+265)</option><option value="60MY">말레이시아 (+60)</option><option value="223ML">말리 (+223)</option><option value="44IM">맨 섬 (+44)</option><option value="52MX">멕시코 (+52)</option><option value="377MC">모나코 (+377)</option><option value="212MA">모로코 (+212)</option><option value="230MU">모리셔스 (+230)</option><option value="222MR">모리타니 (+222)</option><option value="258MZ">모잠비크 (+258)</option><option value="382ME">몬테네그로 (+382)</option><option value="1MS">몬트세라트 (+1)</option><option value="373MD">몰도바 (+373)</option><option value="960MV">몰디브 (+960)</option><option value="356MT">몰타 (+356)</option><option value="976MN">몽골 (+976)</option><option value="1US">미국 (+1)</option><option value="1VI">미국령 버진아일랜드 (+1)</option><option value="95MM">미얀마 (+95)</option><option value="691FM">미크로네시아 (+691)</option><option value="678VU">바누아투 (+678)</option><option value="973BH">바레인 (+973)</option><option value="1BB">바베이도스 (+1)</option><option value="379VA">바티칸 시국 (+379)</option><option value="1BS">바하마 (+1)</option><option value="880BD">방글라데시 (+880)</option><option value="1BM">버뮤다 (+1)</option><option value="229BJ">베냉 (+229)</option><option value="58VE">베네수엘라 (+58)</option><option value="84VN">베트남 (+84)</option><option value="32BE">벨기에 (+32)</option><option value="375BY">벨라루스 (+375)</option><option value="501BZ">벨리즈 (+501)</option><option value="387BA">보스니아 헤르체고비나 (+387)</option><option value="267BW">보츠와나 (+267)</option><option value="591BO">볼리비아 (+591)</option><option value="257BI">부룬디 (+257)</option><option value="226BF">부르키나파소 (+226)</option><option value="975BT">부탄 (+975)</option><option value="1MP">북마리아나제도 (+1)</option><option value="359BG">불가리아 (+359)</option><option value="55BR">브라질 (+55)</option><option value="673BN">브루나이 (+673)</option><option value="685WS">사모아 (+685)</option><option value="966SA">사우디아라비아 (+966)</option><option value="500GS">사우스조지아 사우스샌드위치 제도 (+500)</option><option value="378SM">산마리노 (+378)</option><option value="239ST">상투메 프린시페 (+239)</option><option value="590MF">생마르탱 (+590)</option><option value="590BL">생바르텔레미 (+590)</option><option value="508PM">생피에르 미클롱 (+508)</option><option value="212EH">서사하라 (+212)</option><option value="221SN">세네갈 (+221)</option><option value="381RS">세르비아 (+381)</option><option value="248SC">세이셸 (+248)</option><option value="1LC">세인트루시아 (+1)</option><option value="1VC">세인트빈센트그레나딘 (+1)</option><option value="1KN">세인트키츠 네비스 (+1)</option><option value="290SH">세인트헬레나 (+290)</option><option value="252SO">소말리아 (+252)</option><option value="677SB">솔로몬 제도 (+677)</option><option value="249SD">수단 (+249)</option><option value="597SR">수리남 (+597)</option><option value="94LK">스리랑카 (+94)</option><option value="47SJ">스발바르제도-얀마웬섬 (+47)</option><option value="46SE">스웨덴 (+46)</option><option value="41CH">스위스 (+41)</option><option value="34ES">스페인 (+34)</option><option value="421SK">슬로바키아 (+421)</option><option value="386SI">슬로베니아 (+386)</option><option value="232SL">시에라리온 (+232)</option><option value="1SX">신트마르턴 (+1)</option><option value="65SG">싱가포르 (+65)</option><option value="971AE">아랍에미리트 (+971)</option><option value="297AW">아루바 (+297)</option><option value="374AM">아르메니아 (+374)</option><option value="54AR">아르헨티나 (+54)</option><option value="1AS">아메리칸 사모아 (+1)</option><option value="354IS">아이슬란드 (+354)</option><option value="509HT">아이티 (+509)</option><option value="353IE">아일랜드 (+353)</option><option value="994AZ">아제르바이잔 (+994)</option><option value="93AF">아프가니스탄 (+93)</option><option value="376AD">안도라 (+376)</option><option value="355AL">알바니아 (+355)</option><option value="213DZ">알제리 (+213)</option><option value="244AO">앙골라 (+244)</option><option value="1AG">앤티가 바부다 (+1)</option><option value="1AI">앵귈라 (+1)</option><option value="291ER">에리트리아 (+291)</option><option value="268SZ">에스와티니 (+268)</option><option value="372EE">에스토니아 (+372)</option><option value="593EC">에콰도르 (+593)</option><option value="251ET">에티오피아 (+251)</option><option value="503SV">엘살바도르 (+503)</option><option value="44GB">영국 (+44)</option><option value="1VG">영국령 버진아일랜드 (+1)</option><option value="246IO">영국령 인도양 식민지 (+246)</option><option value="967YE">예멘 (+967)</option><option value="968OM">오만 (+968)</option><option value="61AU">오스트레일리아 (+61)</option><option value="43AT">오스트리아 (+43)</option><option value="504HN">온두라스 (+504)</option><option value="358AX">올란드 제도 (+358)</option><option value="681WF">왈리스-푸투나 제도 (+681)</option><option value="962JO">요르단 (+962)</option><option value="256UG">우간다 (+256)</option><option value="598UY">우루과이 (+598)</option><option value="998UZ">우즈베키스탄 (+998)</option><option value="380UA">우크라이나 (+380)</option><option value="964IQ">이라크 (+964)</option><option value="972IL">이스라엘 (+972)</option><option value="20EG">이집트 (+20)</option><option value="39IT">이탈리아 (+39)</option><option value="91IN">인도 (+91)</option><option value="62ID">인도네시아 (+62)</option><option value="81JP">일본 (+81)</option><option value="1JM">자메이카 (+1)</option><option value="260ZM">잠비아 (+260)</option><option value="44JE">저지 (+44)</option><option value="240GQ">적도 기니 (+240)</option><option value="995GE">조지아 (+995)</option><option value="86CN">중국 (+86)</option><option value="236CF">중앙 아프리카 공화국 (+236)</option><option value="253DJ">지부티 (+253)</option><option value="350GI">지브롤터 (+350)</option><option value="263ZW">짐바브웨 (+263)</option><option value="235TD">차드 (+235)</option><option value="420CZ">체코 (+420)</option><option value="56CL">칠레 (+56)</option><option value="237CM">카메룬 (+237)</option><option value="238CV">카보베르데 (+238)</option><option value="7KZ">카자흐스탄 (+7)</option><option value="974QA">카타르 (+974)</option><option value="855KH">캄보디아 (+855)</option><option value="1CA">캐나다 (+1)</option><option value="254KE">케냐 (+254)</option><option value="1KY">케이맨 제도 (+1)</option><option value="269KM">코모로 (+269)</option><option value="506CR">코스타리카 (+506)</option><option value="61CC">코코스 제도 (+61)</option><option value="225CI">코트디부아르 (+225)</option><option value="57CO">콜롬비아 (+57)</option><option value="53CU">쿠바 (+53)</option><option value="965KW">쿠웨이트 (+965)</option><option value="682CK">쿡 제도 (+682)</option><option value="599CW">퀴라소 (+599)</option><option value="385HR">크로아티아 (+385)</option><option value="61CX">크리스마스섬 (+61)</option><option value="996KG">키르기스스탄 (+996)</option><option value="686KI">키리바시 (+686)</option><option value="357CY">키프로스 (+357)</option><option value="992TJ">타지키스탄 (+992)</option><option value="255TZ">탄자니아 (+255)</option><option value="66TH">태국 (+66)</option><option value="1TC">터크스 케이커스 제도 (+1)</option><option value="90TR">터키 (+90)</option><option value="228TG">토고 (+228)</option><option value="690TK">토켈라우 (+690)</option><option value="676TO">통가 (+676)</option><option value="993TM">투르크메니스탄 (+993)</option><option value="688TV">투발루 (+688)</option><option value="216TN">튀니지 (+216)</option><option value="1TT">트리니다드 토바고 (+1)</option><option value="507PA">파나마 (+507)</option><option value="595PY">파라과이 (+595)</option><option value="92PK">파키스탄 (+92)</option><option value="675PG">파푸아뉴기니 (+675)</option><option value="680PW">팔라우 (+680)</option><option value="970PS">팔레스타인 지구 (+970)</option><option value="298FO">페로 제도 (+298)</option><option value="51PE">페루 (+51)</option><option value="351PT">포르투갈 (+351)</option><option value="500FK">포클랜드 제도(말비나스 군도) (+500)</option><option value="48PL">폴란드 (+48)</option><option value="1PR">푸에르토리코 (+1)</option><option value="33FR">프랑스 (+33)</option><option value="594GF">프랑스령 기아나 (+594)</option><option value="689PF">프랑스령 폴리네시아 (+689)</option><option value="679FJ">피지 (+679)</option><option value="358FI">핀란드 (+358)</option><option value="63PH">필리핀 (+63)</option><option value="64PN">핏케언 섬 (+64)</option><option value="82KR">한국 (+82)</option><option value="36HU">헝가리 (+36)</option>
                                    </select>
                                  </div>
                                </label>
                                <div className="_lmil0">
                                  <Down />
                                </div>
                              </div>
                              <div className="_t26glb" style={{ inset: "0px 0px -1px", borderRadius: "8px 8px 0px 0px", borderTopColor: "rgb(221,221,221)", borderLeftColor: "rgb(221,221,221)", borderRightColor: "rgb(221,221,221)", borderWidth: "1px 1px 0px 1px", zIndex: "0" }}>
                              </div>
                            </div>
                          </div>
                          <div className="_jro6t0">
                            <div className="_e296pg" ref={inputNumber} onClick={() => setInputOn(true)} style={{ flex: "2 1 0%", zIndex: inputOn === false ? "" : "1" }}>
                              <div role="presentation" className="_sbmagf" style={{ borderRadius: "0px 0px 8px 8px", inset: "0px 0px -1px" }}>
                              </div>
                              <div className={`${inputOn === false ? "_tddesd" : "_wbq"}`} style={{ border: inputOn === true && isConfirm ? "3px solid #c13515" : "3px solid #222222" }}>
                                <label className="_1yw7hpv" for="phoneInputphoneNumber" >
                                  <div className={`${inputOn === false ? "_1jn0ze9" : "lm222"}`}>
                                    <div className="_11hx67x" style={{ color: isConfirm ? "#c13515" : "#222222" }}>전화번호</div>
                                  </div>
                                  <div dir="ltr">
                                    <div className={`${inputOn === false ? "_js9i23" : "_fywymp7"}`}>
                                      <div className="_1dnryfrb">+1</div>
                                      
                                     <input name="phoneInputphoneNumber" onChange={(e)=>setphoneNum(e.target.value)} aria-required="true" data-testid="login-signup-phonenumber" className="_c5rhl5" id="phoneInputphoneNumber" autocomplete="tel-national" inputmode="tel" type="tel" aria-describedby="phone-number-help-text-phoneNumber airlock-inline-container" value={phoneNum} />
                                  
                                    </div>
                                  </div>
                                </label>
                              </div>

                              <div className="_t26glb" style={{ inset: "0px 0px -1px", borderRadius: "0px 0px 8px 8px", borderTopColor: "#DDDDDD", borderRightColor: "#DDDDDD", borderBottomColor: "#DDDDDD", borderLeftColor: "#DDDDDD", borderWidth: "1px", zIndex: "0" }}></div></div></div>
                          <div className="_166d2jm1" >
                            <span className='few23' style={{ flexDirection: isConfirm ? "row" : "column" }} id="phone-number-help-text-phoneNumber">
                              <div style={{ opacity: isConfirm ? "1" : "0", height: isConfirm ? "16px" : "1px", marginRight: isConfirm ? "5px" : "0px" }}><Error /></div>
                              <div className="txtxxx" style={{ color: isConfirm ? "#c13515" : "#222222" }}> {isConfirm ? "전화번호는 필수 항목입니다." : "전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및 데이터 요금이 부과됩니다."}</div>
                              <Link to="/" style={{ opacity: isConfirm ? "0" : "1" }} target="_blank" className="_1sikdxcl">개인정보 처리방침</Link>
                            </span>

                          </div>

                          <div className="lm2-btn">
                            <div className="lm2btn" onClick={click}>
                              <span className="lm2span">
                                <span class="_kaq6tx" ></span>
                              </span>
                              <span className="lm2span22">
                                계속
                              </span>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div className="lm3">
                        <div class="_16fq9mb"><div className="lmor">또는</div></div>
                      </div>
                      <div className="lm4">
                        <div className="lm4-inner">
                          <div className="lm4-in">
                            <form>
                              <button className="lm4-btn">
                                <div className="lm4in">
                                  <div className="lm4div1">
                                    <Facebook2 />
                                  </div>
                                  <div className="lm4div2">페이스북으로 로그인하기</div>
                                  <div className="lm4div3"></div>
                                </div>
                              </button>
                            </form>
                          </div>
                          <div className="lm4-in">
                            <form>
                              <button className="lm4-btn">
                                <div className="lm4in">
                                  <div className="lm4div1">
                                    <Google />
                                  </div>
                                  <div className="lm4div2">구글로 로그인하기</div>
                                  <div className="lm4div3"></div>
                                </div>
                              </button>
                            </form>
                          </div>
                          <div className="lm4-in">
                            <form>
                              <button className="lm4-btn">
                                <div className="lm4in">
                                  <div className="lm4div1">
                                    <Apple />
                                  </div>
                                  <div className="lm4div2">Apple 계정으로 계속하기</div>
                                  <div className="lm4div3"></div>
                                </div>
                              </button>
                            </form>
                          </div>
                          <div className="lm4-in">
                            <form>
                              <button className="lm4-btn">
                                <div className="lm4in">
                                  <div className="lm4div1">
                                    <Email />
                                  </div>
                                  <div className="lm4div2">이메일로 로그인하기</div>
                                  <div className="lm4div3"></div>
                                </div>
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={nextmodal ? 'nextmodal':"nonemodal"}>
                <div className='nmmodal'>
                  <div className="_pa35zs">
                    <button aria-label="닫기" type="button" className="_oda838" onClick={()=>setnextmodal(!nextmodal)}>
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
                        <div style={{maxWidth: "183px"}}>
                          <div className="_p4w1xj">
                            <label className="_1yw7hpv" for="phone-verification-code-form__code-input">
                              <div dir="ltr">
                                <div className="_slsckq">
                                  <input aria-label="입력된 코드: " placeholder="------" maxlength="6" className="_xr1n8d" id="phone-verification-code-form__code-input" autocomplete="one-time-code" inputmode="numeric" type="tel" aria-describedby="" value=""/>
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

export default ModalSign;

