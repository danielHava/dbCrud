'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {});
  return Book;
};