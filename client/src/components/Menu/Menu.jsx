import style from "./Menu.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productsSlice";
import MenuCardDetail from "../MenuCardDetail/MenuCardDetail";
import { createCart } from "../../features/cartSlice";

const Menu = () => {
  const [categoriesDiv, setCategoriesDiv] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const products = useSelector((state) => state.products.products);
  const user = useSelector((state) => state.user.username);
  const userm = useSelector((state) => state.user);

  console.log(userm);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const categoriesDivHandler = () => {
    setCategoriesDiv((prevState) => !prevState);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    categoriesDivHandler();
  };

  const handleCreateCart = (productId) => {
    const cartData = {
      quantity: 1,
      UserId: user.id,
      ProductId: productId,
    };
    dispatch(createCart(cartData));
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className={style.Wrapper}>
      <div className={style.CardsWrapper}>
        <div
          onClick={categoriesDivHandler}
          className={!categoriesDiv ? style.MenuNav : style.MenuNavFalse}
        >
          <p>Filter</p>
        </div>
        {categoriesDiv && (
          <div className={style.Categories}>
            <div className={style.MenuNavbar}>
              <div
                onClick={() => handleCategoryClick("")}
                className={style.filterCategory}
              >
                <p>All</p>
                <p>ラーメン</p>
              </div>
              <div
                onClick={() => handleCategoryClick("ramen")}
                className={style.filterCategory}
              >
                <p>Ramen</p>
                <p>ラーメン</p>
              </div>
              <div
                onClick={() => handleCategoryClick("small-plates")}
                className={style.filterCategory}
              >
                <p>Small-plates</p>
                <p>ラーメン</p>
              </div>
              <div
                onClick={() => handleCategoryClick("salads")}
                className={style.filterCategory}
              >
                <p>Salads</p>
                <p>ラーメン</p>
              </div>
              <div
                onClick={() => handleCategoryClick("rice-bowls-and-curry")}
                className={style.filterCategory}
              >
                <p>Rice Bowls and Curry</p>
                <p>ラーメン</p>
              </div>
              <div
                onClick={() => handleCategoryClick("dessert")}
                className={style.filterCategory}
              >
                <p>Desserts</p>
                <p>ラーメン</p>
              </div>
            </div>
          </div>
        )}
        <div className={style.Cards}>
          {products.length && (
            <MenuCardDetail
              handleCreateCart={handleCreateCart}
              products={filteredProducts}
              user={user}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
