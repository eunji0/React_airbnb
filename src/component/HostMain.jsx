import React from "react";
/*global kakao*/
import { Link } from "react-router-dom";
import { ReactComponent as HostLogo2 } from '../images/HostLogo2.svg';
import { ReactComponent as Play } from '../images/Play.svg';
import ModalSign from "./ModalSign";
import { useState, useEffect, useRef } from "react";
import { ReactComponent as Hostsearch } from '../images/Hostsearch.svg';
import { ReactComponent as Next } from '../images/Next.svg';
import { ReactComponent as Plus } from '../images/Plus.svg';
import { ReactComponent as Minus } from '../images/Minus.svg';
import { ReactComponent as Previous } from '../images/Previous.svg';
import styled from "styled-components";
import Slider from "react-slick";
import { hostdummy } from "../hostdummy";
import { useRecoilState } from 'recoil';
import { phoneNumberState } from '../recoil/User';
import GoogleLoginBtn from "./GoogleLoginBtn";
import ModalNext from "./ModalNext";
import { ReactComponent as Down } from '../images/Down.svg';
import { ReactComponent as Facebook2 } from '../images/Facebook2.svg';
import { ReactComponent as Google } from '../images/Google.svg';
import { ReactComponent as Apple } from '../images/Apple.svg';
import { ReactComponent as Email } from '../images/Email.svg';
import { ReactComponent as Closelogin } from '../images/Closelogin.svg';
import { ReactComponent as Error } from '../images/Error.svg';


export default function HostMain() {
    const outSection = useRef(null);
    const [signOpen, setSignOpen] = useState(false); //모달로그인
    const [nextmodal, setnextmodal] = useState(false);
    const [isConfirm, setisConfirm] = useState(false);//전화번호 확인
    const [phoneNum, setphoneNum] = useState("");//전화번호 입력
    const [inputOn, setInputOn] = useState(false);//전화번호 입력 밖 터치
    const inputNumber = useRef(null);

    //모달
    const openSign = () => {
        setSignOpen(true);
    }

    const closeSign = () => {
        setSignOpen(false);
    }

    const closeNext = () => {
        setnextmodal(false);
    }

        // recoil
    // const phnum = useRecoilValue(phoneNumberState);
    const [phoneNumberAtomstate, setphoneNumberAtomstate]
        = useRecoilState(phoneNumberState)

    useEffect(() => {
        function handleClickOutside(e) {
            if (outSection.current && !outSection.current.contains(e.target)) {

                setSignOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [outSection]);

    //로그인 창
    useEffect(() => {
        function handleClickOutside(e) {
            if (outSection.current && !outSection.current.contains(e.target)) {
                setSignOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [outSection]);

    function click() {
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
        setSignOpen(false);
    }


    //지도

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=3dd5404de1cc92bf47d78700b1c56113&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
        kakao.maps.load(() => {
            let container = document.getElementById("Mymap");
            let options = {
                center: new kakao.maps.LatLng(37.506502, 127.053617),
                level: 7
            };

            const map = new window.kakao.maps.Map(container, options);

        });
    }


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: (
            <span className="_17x243d">
                <button aria-label="이전" data-testid="prev-host-profile-button" type="button" className="_16wu1yq">
                    <span className="_e296pg">
                        <Previous />
                    </span>
                </button>
            </span>

        ),
        nextArrow: (
            <span className="_17x243d">
                <button aria-label="다음" data-testid="next-host-profile-button" type="button" className="_16wu1yq">
                    <span className="_e296pg">
                        <Next />
                    </span>
                </button>
            </span>
        ),
    };

    return (

        <main>
            <div className="hostmain">
                <div className="hostmain-logo">
                    <Link to="/" className="hostheader-logo">
                        <span>
                            <HostLogo2 />
                        </span>
                    </Link>
                </div>
                <div className="hostmain-left">
                    <div className="hml">
                        <h1 className="hml-h">
                            <div>
                                호스팅을 <br />시작해보세요
                            </div>
                        </h1>
                        <div className="hml-inner" ref={outSection}>
                            <Button className="hostheader-right2" type="button" onClick={openSign} >
                                <span className="hostheader-right2txt">
                                    호스팅 시작하기
                                </span>
                            </Button>
                            <ModalSign open={signOpen} close={closeSign}>
                                <div className="Modalll">
                                    <div className="loginModal2">
                                        <div className="login-modal">
                                            <div className="loginHeader">

                                                <div type="button" className="closelogin" onClick={closeSign}>
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

                                                                                    <input name="phoneInputphoneNumber" onChange={(e) => setphoneNum(e.target.value)} aria-required="true" data-testid="login-signup-phonenumber" className="_c5rhl5" id="phoneInputphoneNumber" autocomplete="tel-national" inputmode="tel" type="tel" aria-describedby="phone-number-help-text-phoneNumber airlock-inline-container" value={phoneNum} />

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
                                                                            <div className="lm4div2" >페이스북으로 로그인하기</div>
                                                                            <div className="lm4div3"></div>
                                                                        </div>
                                                                    </button>
                                                                </form>
                                                            </div>
                                                            <div className="lm4-in">
                                                                <form>
                                                                    <div type="button" className="lm4-btnn">

                                                                        <div className="lm4in">
                                                                            <div className="lm4div11">
                                                                                <Google />
                                                                            </div>
                                                                            <div className="lm4div2">
                                                                                <GoogleLoginBtn />
                                                                            </div>
                                                                            <div className="lm4div3"></div>
                                                                        </div>
                                                                    </div>
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

                                </div>
                            </ModalSign>
                            <ModalNext open={nextmodal} close={closeNext}></ModalNext>
                        </div>
                    </div>
                </div>
                <div className="hostmain-right">
                    <div className="hmr-inner">
                        <video className="_e2l2kr" autoplay="" aria-label="필라델피아의 호스트 첼시님이 미소를 지으며 문을 엽니다. 뭄바이에서 호스팅하는 소라야님이 미소를 지으며 옆에 있는 다른 사람과 함께 현관문을 엽니다. 요하네스버그의 호스트 모하메드님이 미소를 지으며 문을 엽니다. 멕시코시티의 호스트 마리아님이 고개를 끄덕이고 미소를 지으며 식물을 옮깁니다." crossorigin="anonymous" playsinline="" preload="auto" style={{ objectFit: "cover", objectPosition: "center top" }}>
                            <source src="https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4?imformat=h265" type="video/mp4; codecs=hevc" />
                            <source src="https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4" type="video/mp4" />
                        </video>
                        <div className="hmr-in1"></div>
                        <div className="hmr-in2">
                            <div className="hmr-in21">
                                <div className="_1h6n1zu" role="presentation" aria-hidden="true" style={{ display: "inline-block", verticalAlign: "bottom", height: "40px", width: "auto", minHeight: "1px;" }}>
                                    <img className="_9ofhsl" aria-hidden="true" alt="필라델피아의 호스트" elementtiming="LCP-target" src="https://a0.muscache.com/im/pictures/cac9415a-acfb-4c92-a6d0-770e948741b1.jpg?im_w=480" data-original-uri="https://a0.muscache.com/im/pictures/cac9415a-acfb-4c92-a6d0-770e948741b1.jpg?im_w=480" style={{ objectFit: "contain", objectPosition: "left center", verticalAlign: "bottom;" }} />
                                    <div className="_15p4g025" style={{ backgroundImage: "url(&quot;https://a0.muscache.com/im/pictures/cac9415a-acfb-4c92-a6d0-770e948741b1.jpg?im_w=480&quot;)", backgroundSize: "contain;" }}>
                                    </div>
                                </div>
                            </div>
                            <div className="hmr-in22">필라델피아의 호스트</div>
                        </div>
                        <div className="hmr-in3"></div>
                        <div className="hmr-in4">
                            <button aria-label="재생" type="button" class="_1osbyo4">
                                <span class=" dir dir-ltr">
                                    <Play />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="hm-main">
                        <div>
                            <div className="hmmain">
                                <h2 id="host-estimate-header" class="_nudpw0">호스팅으로 올릴 수 있는<br /> 수입을 확인하세요</h2>
                                <div style={{ width: "100%" }}>
                                    <div>
                                        <div className="hmmain-a">
                                            <div className="hmmain-aa" style={{ display: "flex" }}>
                                                <div className="hmmain-ain">
                                                    <div className="hmmain-ain1">
                                                        <div className="hmmain-ain2">
                                                            <div className="_jmxiel">동일 지역 내 호스트의 평균 수입은 다음과 같습니다.*</div>
                                                            <div className="_13260ndj">
                                                                <span className="_sdzt8pt">₩2,257,219
                                                                </span>
                                                                <span className="_guws13p">/월</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                                        <div className="hmmain-ain1">
                                                            <div className="hmmain-ain2">
                                                                <div className="_jmxiel">호스팅 수입</div>
                                                                <div className="_13260ndj">
                                                                    <span className="_sdzt8pt" style={{ color: "#222222" }}>₩94,051
                                                                    </span>
                                                                    <span className="_guws13p" style={{ color: "#222222" }}>/박</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hmmain-ain1">
                                                            <div className="hmmain-ain2">
                                                                <div className="_jmxiel">예약 일수:</div>
                                                                <div className="_13260ndj">
                                                                    <span className="_sdzt8pt" style={{ color: "#222222" }}>24
                                                                    </span>
                                                                    <span className="_guws13p" style={{ color: "#222222" }}>박/월</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hmmain-b">
                                            <h3 className="_m37l9b">숙소를 소개해주세요</h3>
                                            <div className="hm-map">
                                                <div aria-hidden="false" style={{ position: "relative", width: "100%", height: "100%" }}>

                                                    <MapContents id="Mymap" className="hmmapd1" >
                                                        <div className="hmmapd2">
                                                            <div className="hmmapdd">
                                                                <div className="hmmapds">
                                                                    <div className="hmmapa">
                                                                        <div className="hmmapb">
                                                                            <span className="hmmapc">
                                                                                주소 또는 지역
                                                                            </span>
                                                                            <button classname="_b2fxuo" data-index="0" type="button">
                                                                                <span classname="a8jt5op dir dir-ltr">주소 또는 지역</span>
                                                                                <div classname="_1g5ss3l">Yangcheon-gu</div>
                                                                            </button>
                                                                            <span className="_10u04nz"></span>

                                                                            <button className="_b2fxuo" data-index="1" type="button">
                                                                                <span className="a8jt5op dir dir-ltr">숙소 유형</span>
                                                                                <div className="_1g5ss3l">공간 전체</div>
                                                                            </button>
                                                                            <span className="_10u04nz"></span>
                                                                            <button className="_b2fxuo" data-index="2" type="button">
                                                                                <span className="a8jt5op dir dir-ltr">게스트</span>
                                                                                <div className="_1g5ss3l">게스트 4명</div>
                                                                                <Button className="_o5ir51" data-icon="true">
                                                                                    <Hostsearch />
                                                                                </Button>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="hmmapdt">
                                                                    <form className="hmmapform">
                                                                        <div className="hmmapfa">
                                                                            <div className="hmmapfb">
                                                                                <div className="hmmapfc">
                                                                                    <label className="_5wnqr6h" for="location-query-input">
                                                                                        <div className="_gor68n">
                                                                                            <div className="_wtz1co">주소 또는 지역</div>
                                                                                            <input className="_3vy1xi" id="location-query-input" aria-describedby="location-query-input-description" role="combobox" placeholder="숙소 위치는 어디인가요?" name="query" spellcheck="false" autocomplete="off" autocorrect="off" aria-haspopup="listbox" aria-expanded="false" aria-controls="autocomplete-results" aria-autocomplete="list" value="Yangcheon-gu" />
                                                                                        </div>
                                                                                    </label>
                                                                                    <span id="location-query-input-description" className="_1u9fru1">추천 검색 결과를 확인하려면 계속 진행하세요.</span>
                                                                                </div>
                                                                                <div className="_43mycv"></div>
                                                                                <div className="_j8gg2a">
                                                                                    <div className="_uv7xow" role="button" tabindex="0" aria-expanded="false">
                                                                                        <div className="_seuyf">
                                                                                            <div className="_wtz1co">숙소 유형</div>
                                                                                            <div className="_vuaqekp">공간 전체</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="_43mycv"></div>
                                                                                <div className="_5t6sn0g">
                                                                                    <div className="_xdgf3kq" role="button" tabindex="0" aria-expanded="false">
                                                                                        <div className="_seuyf">
                                                                                            <div className="_wtz1co">게스트</div>
                                                                                            <div className="_vuaqekp">게스트 4명</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="_w64aej">
                                                                                        <button className="_19960d4z" type="button">
                                                                                            <div className="_1hb5o3s">
                                                                                                <div className="_14lk9e14">
                                                                                                    <Hostsearch />
                                                                                                </div>
                                                                                                <div className="_c5qlo1f">검색</div>
                                                                                            </div>
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </MapContents>
                                                    <div className="_pawvzww">
                                                        <div className=" dir dir-ltr" aria-hidden="false" style={{ whiteSpace: "nowrap", position: "absolute", marginLeft: "24px", marginTop: "24px", top: "0px", left: "0px", zIndex: "1", transition: "transform 850ms cubic-bezier(0.25, 1, 0.5, 1) 0s" }}>
                                                            <div className="c15e4bhw ctbkggg dir dir-ltr" style={{ height: "40px", flexDirection: "row" }}>
                                                                <button aria-label="숙소 표시 목록이 있는 측면 패널 열기" type="button" className="b117oblx dir dir-ltr">
                                                                    <div className="_567fxf">
                                                                        <Next />
                                                                    </div>
                                                                    <div aria-hidden="false" className="_qbhwkq">
                                                                        <span className="_8wjgtw">목록 보기</span>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="_pawvzww">
                                                            <div className=" dir dir-ltr" aria-hidden="false" style={{ whiteSpace: "nowrap", position: "absolute", marginRight: "24px", marginTop: "24px", top: "0px", right: "0px", zIndex: "1", transition: "transform 850ms cubic-bezier(0.25, 1, 0.5, 1) 0s" }}>
                                                                <div className="c15e4bhw ctbkggg dir dir-ltr" style={{ width: "40px", flexDirection: "row" }}>
                                                                    <button aria-label="확대" data-testid="map/ZoomInButton" type="button" className="cj0q2ib sne7mb7 rp6dtyx t92tojf c1y4i074 dir dir-ltr">
                                                                        <Plus />
                                                                    </button>
                                                                    <div className="c1fisx1o dir dir-ltr">
                                                                    </div>
                                                                    <button aria-label="축소" data-testid="map/ZoomOutButton" type="button" className="cj0q2ib sne7mb7 rp6dtyx b1d5ierg c1y4i074 dir dir-ltr">
                                                                        <Minus />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hmmain-c">
                                            <div class="_hbygyl">
                                                *
                                                <button type="button" class="_1s7ygi6z">에어비앤비가 예상 수입을 산정하는 방법</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="hmmain2">
                    <h2 className="hmmain2-inner">
                        언제 어디서든 <br />호스팅하실 수 있습니다
                    </h2>
                    <div className="hmmain2-in">
                        <div className="hmmain2-img">
                            <Slider {...settings}>
                                <div class="_1oqtnba"></div>
                                {
                                    hostdummy.results.map(item => (
                                        <div><img className="htdummyimg" src={item.imgpath} />
                                            <div className="htdmytxt">{item.text}</div>
                                            <img className="htdmysign" src={item.sign}/>
                                            <div className="htdmymini">{item.minitext}</div>
                                        </div>
                                    ))
                                }

                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="_22yqgp3" data-reactroot="">
                    <div className="_1nsoe13">
                        10만 명에 달하는 우크라이나 피란민에게 임시 숙소를 제공해주세요
                        <div className="_1cvivhm">
                            <Link to="/" className="_17atahn">
                                자세히 알아보기
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="_1less15w" data-reactroot="">
                    <div className="_g1tx7t">
                        <div className="_1h6n1zu" style={{ display: "inline-block", verticalAlign: "bottom", height: "auto", width: "100%", minHeight: "1px", borderRadius: "12px", role: "presentation", ariaHidden: "true" }}>
                            <img className="_792k0r1" alt="" aria-hidden="true" decoding="async" elementtiming="LCP-target" fetchpriority="low" loading="lazy" src="https://a0.muscache.com/im/pictures/93ef1829-62d1-4349-8b4a-b02ebc650a25.jpg?im_w=2560&amp;im_q=highq" data-original-uri="https://a0.muscache.com/im/pictures/93ef1829-62d1-4349-8b4a-b02ebc650a25.jpg?im_w=2560&amp;im_q=highq" style={{ verticalAlign: "bottom", borderRadius: "12px" }}></img>

                        </div>
                    </div>
                    <div className="_1ix0mx3w">
                        호스팅에 관해 궁금하신 점이 있나요? <br />
                        슈퍼호스트에게 물어보세요.
                        <div className="_90fd4d">
                            <Link to="/" className="_snbhip0">자세히 알아보기</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="hmmm">
                    <div className="_1ketzfb">
                        <div className="a8jt5op dir dir-ltr">
                            <h2>호스트를 위한 에어커버</h2>
                        </div>
                        <div className="_1h6n1zu" style={{ display: "inline-block", verticalAlign: "bottom", height: "156.5px", width: "380px", minHeight: "1px", role: "presentation", ariaHidden: "true" }}>
                            <img className="_9ofhslt" alt="" aria-hidden="true" decoding="async" elementtiming="LCP-target" fetchpriority="low" loading="lazy" src="https://a0.muscache.com/im/pictures/d3537125-14e0-48e1-b760-97490570d937.jpg" data-original-uri="https://a0.muscache.com/im/pictures/d3537125-14e0-48e1-b760-97490570d937.jpg" style={{ objectFit: "contain", verticalAlign: "bottom" }} />
                            <div className="_15p4g025" style={{ backgroundImage: "url(&quot;https://a0.muscache.com/im/pictures/d3537125-14e0-48e1-b760-97490570d937.jpg&quot;)", backgroundSize: "contain" }}>
                            </div>
                        </div>
                        <p className="_1ldjds9">호스팅 전반에 대한 보호.<br />
                            모든 예약에 항상 무⁠료⁠로&nbsp;제⁠공.<br />
                            오직 에어비앤비에서만.
                        </p>
                        <p className="_vl5d9p">호스팅 전반에 대한 보호.<br />
                            모든 예약에 항상 무⁠료⁠로&nbsp;제⁠공.<br />
                            오직 에어비앤비에서만.
                        </p>
                        <Link to="/" clasNames="_1dj2p4gk">자세히 알아보기</Link>
                    </div>
                    <div className="_1gpbeq2">
                        <div className="_1h6n1zu" style={{ display: "inline-block", verticalAlign: "bottom", height: "100%", width: "100%", minHeight: "1px", role: "presentation", ariaHidden: "true" }}>
                            <img className="_9ofhslt" alt="" aria-hidden="true" decoding="async" elementtiming="LCP-target" fetchpriority="low" loading="lazy" src="https://a0.muscache.com/im/pictures/11e10d64-867e-4dba-b0b4-896026a4f0e0.jpg?im_w=2560&amp;im_q=highq" data-original-uri="https://a0.muscache.com/im/pictures/11e10d64-867e-4dba-b0b4-896026a4f0e0.jpg?im_w=2560&amp;im_q=highq" style={{ objectFit: "contain", verticalAlign: "bottom" }} />
                            <div className="_15p4g025" style={{ backgroundImage: "url(&quot;https://a0.muscache.com/im/pictures/11e10d64-867e-4dba-b0b4-896026a4f0e0.jpg?im_w=2560&amp;im_q=highq&quot;)", backgroundSize: "contain" }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="hmmal">
                    <div className="hmmal23">
                        <h2 className="_1an1ibm">
                            <div>에어비앤비에서 <br />호스팅을 시작해보세요</div>
                        </h2>
                        <div className="_1mom3v">
                            <div>에어비앤비 호스트가 되어보세요. 에어비앤비가 <br />모든 단계에서 도와드립니다.</div>
                        </div>
                        <div className="_1j4bomsw">
                            <Link aria-label="호스팅 시작하기" data-testid="lys-intro-video-cta" to="/" className="_108mstlv">
                                <span className="tjxdvlu dir dir-ltr">
                                    <span className="t12u7nq4 dir dir-ltr" style={{ backgroundPosition: "calc((100 - var(--mouse-x, 0)) * 1%) calc((100 - var(--mouse-y, 0)) * 1%)" }}>
                                    </span>
                                </span>
                                <span className="c4wd1yj dir dir-ltr">시작하기</span>
                            </Link>
                        </div>
                    </div>
                    <div className="_kg6214">
                        <div className="_flkdv3">
                            <video className="_e2l2kr" autoplay="" aria-label="세 명의 호스트가 게스트가 도착하기 전에 숙소를 준비합니다. 첫 번째 호스트인 한 여성이 갓 구운 빵을 내놓습니다. 두 번째 호스트인 남성은 게스트를 위한 환영 카드를 적고 있습니다. 세 번째 호스트인 여성은 레몬이 담긴 그릇을 테이블 위에 놓습니다." crossorigin="anonymous" playsinline="" preload="none" style={{ objectFit: "cover" }}>
                                <source src="https://a0.muscache.com/v/9a/7a/9a7ad4a1-cfab-5f7d-96e6-fda8abceabe7/9a7ad4a1cfab5f7d96e6fda8abceabe7_4000k_1.mp4?imformat=h265" type="video/mp4; codecs=hevc" />
                                <source src="https://a0.muscache.com/v/9a/7a/9a7ad4a1-cfab-5f7d-96e6-fda8abceabe7/9a7ad4a1cfab5f7d96e6fda8abceabe7_4000k_1.mp4" type="video/mp4" />
                            </video>
                            <div className="_tgyx5c"></div>
                            <div className="_7rkbxz">
                                <button aria-label="재생" type="button" className="_1osbyo4">
                                    <span className=" dir dir-ltr">
                                        <Play />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

const MapContents = styled.div`
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  cursor: pointer !important;
  display: inline-block !important;
  margin: 0 !important;
  position: relative !important;
  text-align: center !important;
  text-decoration: none !important;
  width: auto !important;
  touch-action: manipulation !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 600 !important;
  border-radius: 8px !important;
  border-width: 1px !important;
  border-style: solid !important;
  outline: none !important;
  padding-top: 14px !important;
  padding-bottom: 14px !important;
  padding-left: 24px !important;
  padding-right: 24px !important;
  border: none;
  border-color: #FF385C;
  background: -webkit-linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%) !important;
  background: -moz-linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%) !important;
  background: linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%) !important;

`;