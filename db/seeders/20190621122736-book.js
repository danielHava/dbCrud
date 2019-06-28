'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
      */
    const bookSeeds = [];
    for (let index = 0; index < 10; index++) {
      const newBook = {
        name: faker.internet.domainName(),
        author: `${faker.name.firstName()} ${faker.name.lastName()}`,
        rating: faker.random.number(10)
      };
      bookSeeds.push(newBook);
    } 
    return queryInterface.bulkInsert('Books', bookSeeds, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
      */
    return queryInterface.bulkDelete('Books', null, {});
  }
};
