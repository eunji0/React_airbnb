import React from 'react';

const ModalSign = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
          {/* <button className="closelogin" onClick={close}>
              <Closelogin />
            </button> */}
          </header>
          <main>
            {props.children}</main>
        </section>
      ) : close}
    </div>
  );
};

export default ModalSign;