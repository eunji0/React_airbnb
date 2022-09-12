import React from "react";
import InfoContentMid from "./InfoContentMid";
import InfoContentTop from "./InfoContentTop";
import InfoContentBtm from "./InfoContentBtm";

export default function InfoContent() {
    return(
        <div>
        <InfoContentTop />
        <InfoContentMid />
        <InfoContentBtm />
        </div>
    );
}