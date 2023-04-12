import style from "../Home/Home.module.css";
import { Link, useLocation } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

const NavbarMobile = ({ handleActiveHamburger, logOut }) => {
  const cart = useSelector(
    (state) => state.getCart.userProductsInCart.products
  );
  const location = useLocation();
  const username = useSelector((state) => state.user.username.id);
  const user = useSelector((state) => state.user.username);

  return (
    <div
      className={
        location.pathname !== "/about"
          ? style.MobileNavOnClick
          : style.MobileNavOnClickTwo
      }
    >
      <div className={style.filter}>
        <div className={style.rowTwo}>
          <div>
            <h2>Ame Agaru</h2>
            <p>{user.username}</p>
            <p className={style.pOrange}>
              Chef Takashi Miike's fusion of traditional and contemporary
              Japanese cuisine with locally sourced ingredients, served in a
              cozy and modern atmosphere in the heart of Buenos Aires.{" "}
            </p>
          </div>

          <nav onClick={handleActiveHamburger} className={style.nav}>
            <Link className={style.link} to="/about">
              <div className={style.navDiv}>
                <p>About</p>
              </div>
            </Link>
            <Link className={style.link} to="/menu">
              <div className={style.navDiv}>
                <p>Menu</p>
              </div>
            </Link>
            <Link className={style.link} to="/cart">
              <div className={style.navDivTwo}>
                <div>
                  <p>Cart</p>
                </div>
                <div>
                  <ShoppingCartIcon />
                  <p>{cart && cart.length}</p>
                </div>
              </div>
            </Link>
            <Link className={style.link} to="/orders">
              <div className={style.navDiv}>
                <p>My Orders</p>
              </div>
            </Link>
            {!username ? (
              <Link className={style.link} to="/login">
                <div className={style.navDiv}>
                  <p>Log In</p>
                  <div className={style.login}>
                    <VpnKeyIcon />
                  </div>
                </div>
              </Link>
            ) : (
              <div onClick={logOut} className={style.navDiv}>
                <p>Log Out</p>
                <div className={style.login}>
                  <VpnKeyIcon />
                </div>
              </div>
            )}
          </nav>
        </div>
        <div className={style.rowOne}>
          <p className={style.par}>This page was created by famonfa </p>
          <div className={style.SocialIcons}>
            <Link to="https://github.com/famonfa/">
              <GitHubIcon />
            </Link>
            <Link to="https://www.linkedin.com/in/facundo-monsegur-b850b723a/">
              <LinkedInIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
