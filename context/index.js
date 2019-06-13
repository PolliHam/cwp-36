const config = require('../config.json');
const task = require('../models/task');

module.exports = (Sequelize) => {
    const sequelize = new Sequelize(config.db, config.login, config.password, config.options);

    const Task = task(Sequelize, sequelize);

    return {
        Task,
        sequelize,
        Sequelize
    };
};
