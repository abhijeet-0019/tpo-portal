import { useState } from "react";
import style from "./login.module.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className={style.logincontainer}>
      <div className={style.header}>
        <h1>Training and placement office</h1>
        <h2>MBM University</h2>
      </div>
      <form onSubmit={handleSubmit} className={style.login }>
        <div className={style.userinput}>
        <input
          className={style.input}
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Username"
        />
       
        <input
          className={style.input}
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
        />
        </div>

        <div className={style.submit}>
        <button className={style.button} type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
