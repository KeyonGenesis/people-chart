const { now } = require("sequelize/dist/lib/utils");

module.exports = (sequelize, Sequelize) => {
    const People = sequelize.define('People', {
        ID: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        Name: { type: Sequelize.STRING },
        Age: { type: Sequelize.INTEGER },
        Gender: { type: Sequelize.STRING },
        createdAt: {
            defaultValue: new Date() // true - false
        },
        updatedAt: {
            defaultValue: new Date() // true - falsealse
        }
    },
    {
        freezeTableName: true
    })
    return People;
}
