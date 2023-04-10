import React from "react";
import Link from "next/link";
import Image from "next/image";

import mbmlogo from "../../public/utils/mbmu-logo.png";
import bell from "../../public/utils/bell.png";
import placeholderprofile from "../../public/utils/profile-placeholder.png";

const TopNavbar = () => {
    return (
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
    )
}

export default TopNavbar