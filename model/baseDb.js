var sequelize = require('sequelize');

var connection = new Sequelize('blog_0704', 'root', 'root', {
    host: '127.0.0.1',
    dialect: 'mysql'
})


module.exports = connection;