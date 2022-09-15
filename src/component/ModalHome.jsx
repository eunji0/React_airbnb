import React from "react";
import {Modal, Button} from 'react-bootstrap';

const ModalHome = ({show, onHide})=>{
    return(
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered

      >
        <Modal.Body>
            <div className="modalhome-btn">
            <div className="modalhome-btn2">
            <Button className="modalhome-signup">회원 가입</Button>
          <Button className="modalhome-login">로그인</Button>
             </div>
          <div className="modalhome-btn3">
          <Button className="modalhome-host">숙소 호스트 되기</Button>
          <Button className="modalhome-hosting">체험 호스팅하기</Button>
          <Button className="modalhome-help">도움말</Button>
          </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={onHide}>close</Button>
        </Modal.Footer>
      </Modal>
    );
}


export default ModalHome;