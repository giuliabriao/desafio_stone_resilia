const express = require('express');
const routes = express.Router();
const UserController = require('../controllers/UserController');
const auth = require('../middlewares/isAuthenticated');

//routes.use(auth.isAuthenticated)
routes
  .get('/', UserController.index)
  .get('/me', UserController.me)
  .post('/', UserController.create)
  .put('/:id',auth.isAuthenticated, UserController.update)
  .delete('/:id',auth.isAuthenticated, UserController.delete)

module.exports = routes