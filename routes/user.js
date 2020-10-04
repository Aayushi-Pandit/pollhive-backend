const UserController = require('../controllers/user');
const middlewares = require('../middlewares/auth');
const router = require('express').Router();

router.post('/register', (req, res) => {
  const response = UserController.register(req.body.name, req.body.email, req.body.password);
  res.status(response.code).send(response);
});

router.post('/login', (req, res) => {
  const response = UserController.login(req.body.email, req.body.password);
  res.status(response.code).send(response);
});

router.post('/details/fetch', (req, res) => {
  const response = UserController.fetchDetails(req.decoded.userId);
  res.status(response.code).send(response);
});

router.post('/details/update', middlewares.isLoggedIn, (req, res) => {
  const response = UserController.updateDetails(req.decoded.userId, req.body.name, req.body.email);
  res.status(response.code).send(response);
});

module.exports = router;
