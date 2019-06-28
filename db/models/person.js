'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    age: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  return Person;
};