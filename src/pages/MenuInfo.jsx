import React from "react"
import InfoHeader from "../component/InfoHeader"
import InfoContent from "../component/InfoContent";
import { useLocation } from "react-router-dom";

export default function MenuInfo() {
    const { state } = useLocation();
    console.log(state);
    
    return (
        <div>
            <InfoHeader />
            <InfoContent state={{state:state}} />
        </div>
    );
}