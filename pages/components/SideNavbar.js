import React from "react";
import Link from "next/link";
import Image from "next/image";
import layers from "../../public/utils/layers.png";
import grid from "../../public/utils/grid.png";
import users from "../../public/utils/users.png";
import group from "../../public/utils/group.png";
import vector from "../../public/utils/vector.png";
import add from "../../public/utils/credit_card.png";

const SideNavbar = () => {
    return (
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
    )
}

export default SideNavbar