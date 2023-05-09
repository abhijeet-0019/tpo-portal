import { useState } from "react";
import { useRouter } from "next/router";
import style from "./login.module.css";
import useAPIAuth from "../../apiConfig/useAPIAuth";
import Navbar2 from '../components/Navbar2'
import useAPIData from "../../apiConfig/useAPIData";

function Login() {
  const { setUser } = useAPIAuth();
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
    const success = await setUser(user);
    console.log(user);
    if (success) {
      console.log(sessionStorage.getItem('userEmail'));
      const user_verified_email = sessionStorage.getItem('userEmail');
      const listResponse = await getItems('TPO_students_personal_details', null, null, null, null, null, null, true);
      const list = listResponse.data;
      const user = list.find((item) => item.email === user_verified_email);

      const userType = user?.user_type || ""; // if user is null, return an empty string as the user_type
      console.log("--> userType to be stored in session storage ", userType)
      sessionStorage.setItem('userType', userType);

      console.log("hello there mate")
      if(userType === 'admin'){
        router.push("../admin/dashboard");
      }else if(userType === 'applicant'){
        router.push("../client/companylist")
      }
      // router.push("../client/companylist");
    } else {
      alert("Incorrect Login Credentials");
    }
  };

  return (
    <Navbar2 loginStatus={false} userType={''}>
      <div className={style.logincontainer}>
        <div className={style.header}>
          <h1>Training and placement office</h1>
          <h2>MBM University</h2>
        </div>
        {/* <form onSubmit={handleLogin} className={style.login}> */}
        <div className={style.userinput}>
          <input
            className={style.input}
            type="email"
            id="username"
            //value={email}
            onChange={handleUsernameChange}
            placeholder="Username"
          />

          <input
            className={style.input}
            type="password"
            id="password"
            // value={password}
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
