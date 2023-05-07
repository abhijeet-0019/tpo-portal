import { useState } from "react";
import { useRouter } from "next/router";
import style from "./login.module.css";
import useAPIAuth from "../../apiConfig/useAPIAuth";

function Login() {
  const { setUser } = useAPIAuth();

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  //console.log(email);
  //console.log(password);
  const handleLogin = async (event) => {
    const user = { email, password };
    const success = await setUser(user);
   console.log(user);
    if (success) {
      console.log("hello there mate")
      router.push("../client/faq");
      // router.push("../client/companylist");
    } else {
      alert("Incorrect Login Credentials");
    }
  };

  return (
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
  );
}

export default Login;
