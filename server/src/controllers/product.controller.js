const db = require('../models')

const getProducts = async (req, res) => {
    try {
        const products = await db.Products.findAll() 
        res.json(products)
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
}

const getProductById = async (req, res) => {
   let {id} = req.params
    id = Number(id)
    try {
        const ProductById = await db.Products.findByPk(id)
        if (!ProductById) {
            throw new Error('Product not found')
        }else {
            return res.status(200).json(ProductById)
        }
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
}

const getProductsByCategory = async (req, res) => {
    const { category } = req.params 
    try {
        const products = await db.Products.findAll({where: { category }})
        res.json(products)
    } catch (error) {
        return res.status(400).json({error:error.message})

    }
}

const getProductsByVegan = async (req, res) => {
    const { vegan } = req.params 
    try {
        const products = await db.Products.findAll({where: { vegan: Boolean(vegan) }})
        res.json(products)
    } catch (error) {
        return res.status(400).json({error:error.message})

    }
}

module.exports = {getProducts, getProductsByCategory, getProductsByVegan, getProductById}