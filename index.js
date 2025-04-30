const { sequelize } = require('./models');

sequelize
  .sync({ force: true })
  .then(() => console.log('Sync ok'))
  .catch(err => console.log('err', err));
