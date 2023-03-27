const Users = require('./Users');
const Projects = require('./Projects');

Users.hasMany(Projects, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Projects.belongsTo(Users, {
  foreignKey: 'user_id'
});

module.exports = { Users, Projects };
