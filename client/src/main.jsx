import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import productReducer  from './features/productsSlice'
import cartReducer  from './features/cartSlice'
import getCartReducer from './features/getCartSlice'
import usernameReducer  from './features/usernameSlice'
import orderReducer from './features/ordersSlice'
import modalReducer from './features/modalSlice'

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    getCart: getCartReducer,
    user:usernameReducer,
    order:orderReducer,
    modal: modalReducer
  }
})

console.log(store.products);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
