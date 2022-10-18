import React from "react";
import Menu from "../component/Menu"
import { dummy } from "../airbnbDummy"


export default function Menu2() {
    return (
        <div>
            <main className="site-content">
                <div className="main_content">
                    <div>
                        <div className="main_content_ctt">
                            <div className="main_content_mdl">
                                <div className="main_ctt_mdl">
                                    {

                                        dummy.results.map((item) => {
                                            return (
                                                <Menu 
                                                place={item.place}
                                                km={item.km}
                                                day={item.day}
                                                price={item.price}
                                                img_path={item.img_path}
                                                star={item.star}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}