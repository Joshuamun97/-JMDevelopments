const router = require ('express').Router;
const { Projects } = require('../models');
const withAuth = require('../seeds/utils/auth');

router.get('/', async (req, res) => {
  // console.log(Projects)
    try {
      // console.log (req)
      const projectData = await Projects.findAll({});
      // console.log (adoptableData)
      // Serialize data so the template can read it
      const projects = projectData.map((project) => project.get({ plain: true }));
      console.log(projects)
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        projects, 
        logged_in: req.session.logged_in 
  
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;