'use strict';
const faker = require('faker/locale/es_MX');

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
    const newPeople = [];
    for (let index = 0; index < 20; index++) {
      const newPerson = {
        name: `${faker.name.title()} ${faker.name.firstName()} ${faker.name.lastName()}`,
        age: faker.random.number(99)
      };
      newPeople.push(newPerson);
    }
    return queryInterface.bulkInsert('People', newPeople, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
      */
    return queryInterface.bulkDelete('People', null, {});
  }
};
