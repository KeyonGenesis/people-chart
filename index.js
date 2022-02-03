const express   = require('express');
const app       = express();
const path      = require('path');
const Sequelize = require('sequelize');
const indexRouter = require('./Routers/IndexRouter');
const db        = require('./Config/Sequelize');
const port      = require('./Config/Database')
const env       = process.env.NODE_ENV || 'development';
const config    = require(path.join(__dirname, 'Config', 'config.json'))[env];

// console.log("path config", config)

if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
}


app.use(express.json());
app.use(express.urlencoded({ extended: true }))

db.sequelize.sync({ force: false }).then(() => {
    // console.log("Drop and re-sync db.");
});
app.use(indexRouter)
app.listen(3000)