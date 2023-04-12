const db = require("../models");

const createCart = async (req, res) => {
  const { quantity, UserId, ProductId } = req.body;
  try {
    const existingCartItem = await db.Cart.findOne({
      where: {
        UserId: UserId,
        ProductId: ProductId,
      },
    });

    if (existingCartItem) {
      // If the item exists, update its quantity
      const newQuantity = existingCartItem.quantity + quantity;
      await existingCartItem.update({ quantity: newQuantity });
    } else {
      // If the item doesn't exist, create a new cart item
      await db.Cart.create({
        quantity: quantity,
        UserId: UserId,
        ProductId: ProductId,
      });
    }

    res.json("Success");
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
const getUserCart = async (req, res) => {
  let { userid } = req.params;
  userid = Number(userid);
  try {
    const cartItems = await db.Cart.findAll({ where: { UserId: userid } });

    if (cartItems.length === 0) {
      return res
        .status(404)
        .json({ error: "User does not have any products in cart." });
    }

    const products = await db.Cart.findAll({
      where: { UserId: userid },
      include: [db.Products],
    });

    return res.status(200).json({ products });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server error" });
  }
};

const updateCart = async (req, res) => {
  const { quantity } = req.body;
  const { ProductId, UserId } = req.params;

  try {
    const existingCartItem = await db.Cart.findOne({
      where: {
        UserId,
        ProductId: Number(ProductId),
      },
    });

    if (existingCartItem) {
      await existingCartItem.update({ quantity: quantity });
      return res.status(200).send(existingCartItem);
    } else {
      return res.status(404).send({
        message: "Cart item not found.",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: "An error occurred while updating the Cart entry.",
      error,
    });
  }
};

const deleteCartItem = async (req, res) => {
  const {ProductId, UserId} = req.params; 
  console.log(req.params);
  try {
    await db.Cart.destroy({
      where: {
        UserId: Number(UserId),
        ProductId: Number(ProductId),
      },
    });
    return res.status(200).send('Deleted')
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: "An error occurred while updating the Cart entry.",
      error,
    });
  }
};

const deleteAllItems = async (req, res) => {
  let {username} = req.params
  username = Number(username)
  console.log(username);
  try {
    await db.Cart.destroy({
      where: {
        UserId: username
       }
    })
    return res.status(200).send('All cart deleted')
  } catch (error) {
    console.error(error)
    return res.status(500).send({
      message: "An error occurred while deleting the Cart.",
      error,
    });
  }
}

module.exports = { createCart, getUserCart, updateCart, deleteCartItem, deleteAllItems };
