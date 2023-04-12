import style from "./Home.module.css";
import Nav from "../Nav/Nav";
import { fetchUsername } from "../../features/usernameSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Welcome from "../Welcome/Welcome";

const Home = ({ width }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsername());
  }, []);

  return (
    <div className={style.backgroundSlider}>
      <Welcome />

      <div className={style.logo}>
        <img
          src="http://butagumi.com/shabuan/wp-content/themes/eatery-child/img/logo.png"
          alt="logo"
        ></img>
      </div>
    </div>
  );
};

export default Home;
