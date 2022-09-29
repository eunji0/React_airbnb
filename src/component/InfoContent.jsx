import React from "react";
import InfoContentMid from "./InfoContentMid";
import InfoContentTop from "./InfoContentTop";
import InfoContentBtm from "./InfoContentBtm";
import { useLocation } from "react-router-dom";

export default function InfoContent() {
    const { state } = useLocation();

    return(
        <div>
        <InfoContentTop state={{state:state}}/>
        <InfoContentMid state={{state:state}} />
        <InfoContentBtm />
        </div>
    );
}