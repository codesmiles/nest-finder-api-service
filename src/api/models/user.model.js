const { DataTypes } = require('sequelize');
const { sequelize } = require('../../configs/database.config');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  // Other model options go here
  tableName: 'users',
  timestamps: true // Adds createdAt and updatedAt timestamps
});

module.exports = User;
