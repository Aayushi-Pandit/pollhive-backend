const User = require('./user');
const Poll = require('./poll');
const Choices = require('./choices');

User.hasMany(Poll, { foreignKey: 'userId' });
Poll.hasMany(Choices, { foreignKey: 'pollId' });
