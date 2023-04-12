import style from "./Login.module.css";
import Nav from "../Nav/Nav";
import Registration from "../Registration/Registration";
import { useState } from "react";
import Log from "../Log/Log";

const Login = () => {
  const [isLogged, setIsLogged] = useState(false);

  const handleRegisterOrLog = () => {
    setIsLogged((prevState) => !prevState);
  };

  console.log(isLogged);

  return (
    <div className={style.wrapper}>
      <div className={style.loginImg}></div>
      <div className={style.loginCard}>
        <div className={style.wrapperForm}>
          {isLogged ? (
            <Registration handleRegisterOrLog={handleRegisterOrLog} />
          ) : (
            <Log
              handleRegisterOrLog={handleRegisterOrLog}
              setIsLogged={setIsLogged}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
