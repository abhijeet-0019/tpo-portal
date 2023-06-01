import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import style from "./login.module.css";
import useAPIAuth from "../../apiConfig/useAPIAuth";
import Navbar2 from "../components/Navbar2";
import useAPIData from "../../apiConfig/useAPIData";

function Login() {
  const { loginStatus, setUser, getAuthHeader } = useAPIAuth();
  const { getItems } = useAPIData();

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    const user = { email, password };
    setUser(user).then(success => {
      console.log(user);
      console.log("success -> ", success)
      if (success) {

      } else {
        alert("Incorrect Login Credentials");
      }
    });
  };

  useEffect(() => {
    console.log("Auth Status:", loginStatus, getAuthHeader());
    if (loginStatus) {
      console.log(sessionStorage.getItem("userEmail"));
      const user_verified_email = sessionStorage.getItem("userEmail");
      getItems(
        "TPO_students_personal_details",
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        true
      ).then(listResponse => {
        const list = listResponse.data;
        const user = list.find((item) => item.email === user_verified_email);

        const userType = user?.user_type || "";
        const user_id = user?.user_id || "";
        console.log("--> userType to be stored in session storage ", userType);
        sessionStorage.setItem("userType", userType);
        sessionStorage.setItem("userID", user_id);

        if (userType === "admin") {
          router.push("../admin/dashboard");
        } else if (userType === "applicant") {
          router.push("../client/companylist");
        }
      });
      // router.push("../client/companylist");
    }
  }, [loginStatus]);

  return (
    <Navbar2 loginStatus={false} userType={""}>
      <div className={style.logincontainer}>
        <div className={style.header}>
          <h1>Training and Placement Office</h1>
          <h2>MBM University</h2>
        </div>
        <div className={style.userinput}>
          <input
            className={style.input}
            type="email"
            id="username"
            onChange={handleUsernameChange}
            placeholder="Username"
          />

          <input
            className={style.input}
            type="password"
            id="password"
            onChange={handlePasswordChange}
            placeholder="Password"
          />
        </div>

        <div className={style.submit}>
          <button className={style.button} type="submit" onClick={handleLogin}>
            Login
          </button>
        </div>
        {/* </form> */}
      </div>
    </Navbar2>
  );
}

export default Login;
