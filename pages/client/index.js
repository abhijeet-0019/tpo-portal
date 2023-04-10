import React from "react";

import SideNavbar from "../components/SideNavbar";
import TopNavbar from "../components/TopNavbar"

const Structure = () => {
    return (
        <div className="wrapper">
            <TopNavbar />
            <div className="main_body">
                <SideNavbar />
                <div className="container">
                    <div className="item_wrap">
                        <div className="item item1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum omnis nihil aut aperiam adipisci suscipit ullam sunt saepe cupiditate quam distinctio officiis tempore laudantium, animi amet corrupti ratione est commodi! Sunt tempora quod magnam optio, reiciendis veritatis, necessitatibus eos molestias facilis reprehenderit maiores ipsum quaerat placeat laborum, a aspernatur corporis.</div>
                        <div className="item item2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum omnis nihil aut aperiam adipisci suscipit ullam sunt saepe cupiditate quam distinctio officiis tempore laudantium, animi amet corrupti ratione est commodi! Sunt tempora quod magnam optio, reiciendis veritatis, necessitatibus eos molestias facilis reprehenderit maiores ipsum quaerat placeat laborum, a aspernatur corporis.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum omnis nihil aut aperiam adipisci suscipit ullam sunt saepe cupiditate quam distinctio officiis tempore laudantium, animi amet corrupti ratione est commodi! Sunt tempora quod magnam optio, reiciendis veritatis, necessitatibus eos molestias facilis reprehenderit maiores ipsum quaerat placeat laborum, a aspernatur corporis.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Client = () => {
    return (
        <div>
            <Structure />
        </div>
    );
};

export default Client;