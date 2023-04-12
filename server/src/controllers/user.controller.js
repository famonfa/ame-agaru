const db = require('../models')
const bcrypt = require('bcrypt')
const { sign } = require('jsonwebtoken')

const createUser = async (req, res) => {
    const {username, password, phone, adress} = req.body;
    const user = await db.User.findOne({ where: {username: username} })
    try {
        if (!user) {
            bcrypt.hash(password, 10).then((hash) => {
                db.User.create({
                    username: username,
                    password: hash,
                    phone: phone, 
                    adress: adress
                })
                res.json("Success")
            })
        }else {
            res.json({error: "User already exists"})
        }
       
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, phone, adress } = req.body;
  
    try {
      const user = await db.User.findOne({ where: { id } });
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      const updatedUser = await user.update({
        username: username || user.username,
        phone: phone || user.phone,
        adress: adress || user.adress,
      });
  
      return res.json(updatedUser);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };


const createLogin = async (req, res) => {
    const {username, password} = req.body;
    const user = await db.User.findOne({ where: {username: username} })
    if (user) {
        bcrypt.compare(password, user.password).then((same) => {
            if (!same) {
                return res.json({ erorr: "Wrong username or password" });
            }
            
            const accessToken = sign(
                {username:user.username, id: user.id}, 
                "importantsecret" )
            return res.json(accessToken);
        });
    } else {
        return res.json({ error: "User does not exist" });
    }
}

module.exports = {createUser, createLogin, updateUser}