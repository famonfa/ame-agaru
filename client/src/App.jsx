
import './App.css'
import {Link, Routes, Route, BrowserRouter, useLocation} from 'react-router-dom'
import About from './components/About/About.jsx'
import Menu from './components/Menu/Menu'
import Cart from './components/Cart/Cart'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login'
import Nav from './components/Nav/Nav'
import Orders from './components/Orders/Orders'
import ProductDetail from './components/ProductDetail/ProductDetail'
import BackgroundImage from './components/BackgroundImage/BackgroundImage'
import { fetchUsername } from './features/usernameSlice'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect, useState } from 'react'
import {AlertModalSmall} from './components/AlertModal/AlertModal'
import { closeModal } from './features/modalSlice'



function App() {
 
  const dispatch = useDispatch()
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(state => state.getCart.userProductsInCart.products)
  const modal = useSelector((state) => state.modal.isOpen)
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
  }, [window]);

  useEffect(() => {
    dispatch(fetchUsername()).then(()=> {
      getCart(username.id)
    })
   
  }, [])

  useEffect(()=> {
   setTimeout(() => {
    closeModal()
   }, 2000);
  },[])
   

  return ( 
    <div className="App">

      <BrowserRouter>
      <Nav width={width}/>
      <BackgroundImage  />
      {(modal && username.username && !cart ) && <AlertModalSmall text={'You logged in!'}/>}
      {(modal && !username.username) && <AlertModalSmall text={'Welcome to our community, registration completed!!'}/>}
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/products/:id' element={<ProductDetail/>}/>
        <Route path='/cart' element={<Cart width={width}/>}/>
        <Route path='/orders' element={<Orders />}/>
        <Route path='/login' element={<Login />}/>

      </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
