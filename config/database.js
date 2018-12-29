const Sequelize = require('sequelize');

// Or you can simply use a connection uri
const sequelize = new Sequelize('d83t5mf3unp22b', 'evounrovqtfkyg', 'c460a7d2e6998a843a9f9b515e25a6fda98529197ef8de8cae50575c749d6c0d', {
  host: 'ec2-54-221-225-11.compute-1.amazonaws.com',
  dialect: 'postgres',
  operatorsAliases: false, // Not sure what this is doing
  protocol: 'postgres',
  dialectOptions: {
        ssl: true           // This ssl: true is heroku specific 
    }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports = sequelize;