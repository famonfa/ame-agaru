module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("Cart", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
          notEmpty: true,
          min: 1,
        },
      },
    }, {
      timestamps: false,
    });
  
    Cart.associate = (models) => {
      Cart.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
        },
      });
      Cart.belongsTo(models.Products, {
        foreignKey: {
          allowNull: false,
        },
      });
    };
  
    return Cart;
  };