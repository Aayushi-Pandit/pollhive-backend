const sequelize = require('sequelize');
const db = require('../database/connection');
const logger = require('../logging/logger');

const schema = {
  choiceId: {
    type: sequelize.UUID,
    primaryKey: true
  },
  choice: {
    type: sequelize.STRING(255),
    allowNull: false
  },
  pollId: {
    type: sequelize.UUID,
    allowNull: false,
    references: {
      model: 'Polls',
      key: 'pollId'
    }
  }
};

const options = {
  timestamps: false
};
const Choice = db.define('Choices', schema, options);

Choice.sync({ alter: true })
  .then(() => {
    logger.info('Choices Migration Made');
  })
  .catch(err => {
    logger.error('An Error Occurred:' + err);
  });

module.exports = Choice;
