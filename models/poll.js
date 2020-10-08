const sequelize = require('sequelize');
const db = require('../database/connection');
const logger = require('../logging/logger');

const schema = {
<<<<<<< HEAD
  code: {
    type: sequelize.INTEGER,
  },
=======
>>>>>>> a41f70ecf3b711e01db650fd91594de87be3e569
  pollId: {
    type: sequelize.UUID,
    primaryKey: true
  },
  title: {
    type: sequelize.STRING(255),
    allowNull: false
  },
  userId: {
    type: sequelize.UUID,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'userId'
    }
  }
};

const options = {
  timestamps: false
};
const Poll = db.define('Polls', schema, options);

Poll.sync({ alter: true })
  .then(() => {
    logger.info('Polls Migration Made');
  })
  .catch(err => {
    logger.error('An Error Occurred:' + err);
  });

module.exports = Poll;
