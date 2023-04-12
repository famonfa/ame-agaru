const express = require('express')
const db = require('../models')
const {getProducts, 
        getProductsByCategory,
        getProductsByVegan, 
        getProductById} = require('../controllers/product.controller')
const {createUser, createLogin, updateUser }  = require('../controllers/user.controller')
const { createOrder, getOrders }  = require('../controllers/orders.controller')

const {createCart, getUserCart, updateCart, deleteCartItem, deleteAllItems}  = require('../controllers/cart.controller')
const {validateToken} = require('../Middlewares/AuthMiddleware')


const router = express.Router()

//PRODUCTS
router.get('/products', getProducts)
router.get('/products/:id', getProductById)
router.get('/products/:category', getProductsByCategory)
router.get('/products/vegan/:vegan', getProductsByVegan)

//USER
router.post('/user', createUser)
router.post('/user/login', createLogin)
router.put('/user/:id', updateUser)
router.get('/user/auth', validateToken, async (req, res) => {
        try {
            const user = await db.User.findOne({ where: { id: req.user.id } });
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
            const userData = {
                username: user.username,
                phone: user.phone,
                address: user.adress,
                id: user.id
            };
            return res.status(200).json(userData);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    });

//CART
router.post('/cart/add', createCart )
router.get('/cart/:userid', getUserCart)
router.put('/cart/:UserId/:ProductId', updateCart);
router.delete('/cart/delete/:UserId/:ProductId', deleteCartItem);
router.delete('/cart/delete/:username', deleteAllItems);

//ORDERS

router.post('/order', createOrder )
router.get('/order/:id', getOrders)


module.exports = router