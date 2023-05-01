import React, { useState } from "react";
import Image from "next/image";
import style from "./Navbar2.module.css";
import mbmLogo from "../../public/assets/mbmLogo.png";
import Link from "next/link";


function Navbar2({ children }) {
    const [activeLink, setActiveLink] = useState("");
 

  const list = [
    { id: "1", text: "Login", url: "/mainlogin/login" },
    { id: "2", text: "Register", url: "/registration/register" },
    { id: "3", text: "Placement-Stats", url: "/Placement-Stats" },
    { id: "4", text: "TPO-MBMU-and-team", url: "/TPO-MBMU-and-team" },
    { id: "5", text: "Support", url: "/Support" },
    { id: "6", text: "FAQ", url: "/FAQ" },
  ];

  const routes = [""];
  const handleLinkClick = (url) => {
    setActiveLink(url);
  };
  return (
    <div className={style.parent}>
      <div className={style.sidebar}>
        <div className={style.inner_sidebar}>
          <ul>
            <li>
              <div className={style.list_tab}>
                <span className={style.list_tab}>
                  <div className={style.logo}>
                    <Image src={mbmLogo} className={style.image} />
                  </div>
                </span>
              </div>
            </li>
            {list.map((item) => (
              <li key={item.id} className={style.items}>
                <Link href={item.url}>
                  <div
                    className={`${style.list_tab} ${
                      activeLink === item.url ? style.active : ""
                    }`}
                    onClick={() => handleLinkClick(item.url)}
                  >
                    <span className={style.list}>{item.text}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* right component */}
      <div className={style.content}>{children}</div>
    </div>
  );
}

export default Navbar2;
