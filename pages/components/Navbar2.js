import React, { useState, useEffect } from "react";
import Image from "next/image";
import style from "./Navbar2.module.css";
import mbmLogo from "../../public/assets/mbmLogo.png";
import Link from "next/link";
import useAPIAuth from "../../apiConfig/useAPIAuth";
import { useRouter } from "next/router";

function Navbar2({ children, loginStatus, userType }) {
  const { logoutUser } = useAPIAuth();
  const [activeLink, setActiveLink] = useState("");

  const router = useRouter();

  useEffect(() => {
    console.log("loginStatus:", loginStatus);
    console.log("userType:", userType);
  }, []);

  const nav_list_default = [
    { id: "1", text: "Login", url: "/login" },
    // { id: "2", text: "Register", url: "/" },
    { id: "3", text: "Placement Stats", url: "/default/placementstats" },
    { id: "4", text: "Support", url: "/default/support" },
    { id: "5", text: "FAQ", url: "/default/faq" },
    { id: "6", text: "TPO Team", url: "/default/tpoteam" },
  ];

  const nav_list_client = [
    { id: "1", text: "Company List", url: "/client/companylist" },
    { id: "2", text: "Notification", url: "/client/notification" },
    { id: "3", text: "Profile", url: "/client/profile" },
    // { id: "3", text: "Update Profile", url: "/client/profile" },
    { id: "5", text: "Support", url: "/client/support" },
    { id: "7", text: "FAQ", url: "/client/faq" },
    { id: "6", text: "Logout", url: "/login" },
  ];

  const nav_list_admin = [
    { id: "1", text: "Dashboard", url: "/admin/dashboard" },
    { id: "2", text: "Company List", url: "/admin/companylist" },
    { id: "3", text: "Placement Stats", url: "/admin/placementstats" },
    { id: "7", text: "Students List", url: "/admin/studentlist" },
    { id: "4", text: "Notifications", url: "/admin/notification" },
    { id: "5", text: "Settings", url: "/admin/settings" },
    { id: "6", text: "Logout", url: "/login" },
  ];

  const nav_list = (loginStatus) ? ((userType === 'admin') ? (nav_list_admin) : (nav_list_client)) : nav_list_default;

  const routes = [""];
  const handleLinkClick = (url) => {
    setActiveLink(url);
  };

  const handleLogout = () => {
    logoutUser();
    router.push("/");
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
                    <Image
                      src={mbmLogo}
                      alt="MBM logo"
                      className={style.image}
                    />
                  </div>
                </span>
              </div>
            </li>
            {nav_list.map((item) => (
              <li key={item.id} className={style.items}>
                {item.text === "Logout" ? (
                  <Link href={item.url}>
                    <div
                      className={`${style.list_tab} ${activeLink === item.url ? style.active : ""}`}
                      onClick={handleLogout}
                    >
                      <span className={style.list}>{item.text}</span>
                    </div>
                  </Link>
                ) : (
                  <Link href={item.url}>
                    <div
                      className={`${style.list_tab} ${activeLink === item.url ? style.active : ""}`}
                      onClick={() => handleLinkClick(item.url)}
                    >
                      <span className={style.list}>{item.text}</span>
                    </div>
                  </Link>
                )}
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