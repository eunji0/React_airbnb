import React from "react";
import Menu1 from "../pages/Menu1"
import { dummy } from "../airbnbDummy"


export default function Home() {
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
                                                <Menu1 
                                                place={item.place}
                                                km={item.km}
                                                day={item.day}
                                                price={item.price}
                                                img_path={item.img_path}
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