const sequelize = require('../config/connection');
const Projects = require ('../models/Projects');
const Users = require ('../models/Users');

const projectData = require('./projectData.json');
const userData = require('./userData.json');
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await Users.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

//   for (const project of projectData) {
//    await Projects.create({
//     ...project,
//     user_id: users[Math.floor(Math.random() * users.length)].id,
//   });

  // for (const animals of animalData) {
  //   await Animals.create({
  //    ...animals,
  //    user_id: users[Math.floor(Math.random() * users.length)].id,
  //  });
//  }
// }


  process.exit(0);
};

seedDatabase();