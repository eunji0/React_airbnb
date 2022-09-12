import React from "react";
import Menu1 from "./Menu1";
import Header from "../component/Header";
import UnderHeader from "../component/UnderHeader";
import Footer from "../component/Footer";


export default function Home() {
    return (
        <div>
            <Header />
        <UnderHeader />
            <Footer/>
            <Menu1 />
        </div>
    )
}