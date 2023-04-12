module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define("Orders", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      purchaseDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    }, {
      timestamps: false,
    });
  
    Orders.associate = (models) => {
      Orders.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
        },
      });
      Orders.belongsToMany(models.Products, {
        through: 'ProductOrders',
        foreignKey: 'orderId'
      });
    };
  
    return Orders;
  };