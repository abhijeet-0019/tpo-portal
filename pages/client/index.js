import React from "react";
import Link from "next/link";
import Image from "next/image";
import mbmlogo from "../../public/utils/mbmu-logo.png"
import bell from "../../public/utils/bell.png"
import placeholderprofile from "../../public/utils/profile-placeholder.png"
import layers from "../../public/utils/layers.png"
import grid from "../../public/utils/grid.png"
import users from "../../public/utils/users.png"
import group from "../../public/utils/group.png"
import vector from "../../public/utils/vector.png"
import add from "../../public/utils/credit_card.png"

const TopNavigation = () => {
    return (
        <div className="wrapper">
            <div className="top_navbar">
                <div className="logo">
                    <Image src={mbmlogo} className="image" />
                </div>
                <div className="top_menu">
                    <div className="home_link">
                        Dashboard
                    </div>
                    <div className="right_info">
                        <div className="icon_wrap">
                            <div className="icon">
                                <Image src={bell} className="bell" />
                            </div>
                        </div>
                        <div className="icon_wrap">
                            <div className="icon">
                                <Image src={placeholderprofile} className="placeholder-profile" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main_body">

                <div className="sidebar_menu">
                    <div className="inner__sidebar_menu">
                        <ul>
                            <li>
                                <a href="#">
                                    <div className="list-tab">
                                        <span className="icon">
                                            <Image src={layers} className="nav-icons" />
                                        </span>
                                        <span className="list">Dashboard</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="active">
                                    <div className="list-tab">
                                        <span className="icon">
                                            <Image src={grid} className="nav-icons" />
                                        </span>
                                        <span className="list">Companies</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="list-tab">
                                        <span className="icon">
                                        <Image src={users} className="nav-icons" />
                                        </span>
                                        <span className="list">Students</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="list-tab">
                                        <span className="icon">
                                        <Image src={group} className="nav-icons" />
                                        </span>
                                        <span className="list">Notifications</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="list-tab">
                                        <span className="icon">
                                        <Image src={vector} className="nav-icons" />
                                        </span>
                                        <span className="list">FAQs</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="list-tab">
                                        <span className="icon">
                                        <Image src={add} className="nav-icons" />
                                        </span>
                                        <span className="list">Add Students</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

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

const HomePage = () => {
    return (
        <div>
            <TopNavigation />
        </div>
    );
};

export default HomePage;