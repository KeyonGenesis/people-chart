'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('People', [
        {
            Name: "Rubi",
            Age: 31,
            Gender: "F"
        },
        {
            Name: "Randy",
            Age: 32,
            Gender: "M"
        },
        {
            Name: "Apple",
            Age: 18,
            Gender: "F"
        },
        {
            Name: "Mango",
            Age: 14,
            Gender: "F"
        },
        {
            Name: "Ferry",
            Age: 37,
            Gender: "M"
        },
        {
            Name: "Johnson",
            Age: 55,
            Gender: "M"
        },
        {
            Name: "Larry",
            Age: 45,
            Gender: "M"
        },
        {
            Name: "Ryne",
            Age: 12,
            Gender: "F"
        },
        {
            Name: "Christopher",
            Age: 24,
            Gender: "M"
        }
        ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};