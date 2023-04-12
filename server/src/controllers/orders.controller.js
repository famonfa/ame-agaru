


const { Orders, Products } = require('../models');

const createOrder = async (req, res) => {
    const { username, cart, total } = req.body;
    console.log(cart);

  console.log(req.body);
  try {

    // const totalAmount = cart.reduce((acc, { price, quantity }) => acc + price * quantity, 0);

    // Create the order
    const order = await Orders.create({
      purchaseDate: new Date(),
      amount: total,
      UserId: username,
    });

    // Associate the products with the order

    for (const item of cart) {
      const { ProductId, quantity } = item;
      await order.addProduct(ProductId, { through: { quantity } });
    }

    // Return the created order
    res.status(201).json(order);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { createOrder };

const getOrders = async (req, res) => {
  let {id} = req.params 
  id = Number(id)
  try {
    const orders = await Orders.findAll({ where: { UserId: id}, include: Products });
    res.status(200).json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};


module.exports = { createOrder, getOrders };
