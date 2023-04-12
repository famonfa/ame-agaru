import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import style from "../Home/Home.module.css";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchUsername } from "../../features/usernameSlice";
import { getCart } from "../../features/getCartSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarMobile from "./NavbarMobile";

const Nav = ({ width }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const cart = useSelector(
    (state) => state.getCart.userProductsInCart.products
  );
  const username = useSelector((state) => state.user.username.id);
  const [isNavActive, setIsCartActive] = useState(false);

  const handleActiveHamburger = () => {
    setIsCartActive((prevState) => !prevState);
  };

  useEffect(() => {
    dispatch(fetchUsername());
    dispatch(getCart(username));
  }, []);

  const logOut = () => {
    sessionStorage.removeItem("accessToken");
    dispatch(getCart());
    dispatch(fetchUsername());
    navigate("/");
  };

  return (
    <>
      {width && width > 712 && location.pathname != "/about" ? (
        <div
          className={location.pathname === "/" ? style.column : style.columnTwo}
        >
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
          <div className={style.rowTwo}>
            {location.pathname === "/" ? (
              <div>
                <h2>Ame Agaru</h2>
                <p>
                  Chef Takashi Miike's fusion of traditional and contemporary
                  Japanese cuisine with locally sourced ingredients, served in a
                  cozy and modern atmosphere in the heart of Buenos Aires.{" "}
                </p>
              </div>
            ) : (
              <div>
                <Link to="/">
                  {" "}
                  <img
                    className={style.imgLogo}
                    src="http://butagumi.com/shabuan/wp-content/themes/eatery-child/img/logo.png"
                    alt="logo"
                  ></img>
                </Link>
              </div>
            )}
            <nav className={style.nav}>
              <Link className={style.link} to="/about">
                <div className={style.navDiv}>
                  <p>About</p>
                  <ArrowRightIcon />
                </div>
              </Link>
              <Link className={style.link} to="/menu">
                <div className={style.navDiv}>
                  <p>Menu</p>
                  <ArrowRightIcon />
                </div>
              </Link>
              <Link className={style.link} to="/cart">
                <div className={style.navDivTwo}>
                  <div>
                    <p>Cart</p>
                    <ArrowRightIcon />
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
                  <ArrowRightIcon />
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
        </div>
      ) : (
        <div className={style.navBarMobile}>
          <div className={style.navBarMenuMobile}>
            <Link to="/">
              <img
                className={style.imgLogo}
                src="http://butagumi.com/shabuan/wp-content/themes/eatery-child/img/logo.png"
                alt="logo"
              ></img>
            </Link>
          </div>
          <div className={style.hamburgerAndCart}>
            <Link to="/cart">
              <div className={style.shopLength}>
                <ShoppingCartIcon className={style.shopCart} />
                <p className={style.cartLength}>{cart && cart.length}</p>
              </div>
            </Link>
            <div onClick={handleActiveHamburger} className={style.Hamburger}>
              {" "}
              <MenuIcon className={style.hamburger} />
            </div>
          </div>
          {isNavActive && (
            <NavbarMobile
              logOut={logOut}
              handleActiveHamburger={handleActiveHamburger}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Nav;
