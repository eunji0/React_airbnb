import React from "react";
// import { useState, useEffect, useRef } from "react";


const ModalFilter = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close } = props;

    return (
        <div className={open ? 'nextmodal' : "nonemodal"}>
            {open?(
            <div className='nmmodal'>
               
            </div>
            ) : null}
        </div>
    );
}

export default ModalFilter;