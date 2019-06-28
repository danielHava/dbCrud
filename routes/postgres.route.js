const BookController = require('../controllers').BookController;
const PersonController = require('../controllers').PersonController;
// const verifyToken = require('../middleware/verifyToken');
const apiResponse = require('../utils/apiResponse');
const express = require('express');
const router = express.Router();

// router.use(verifyToken);

// Book endpoints
router.get('/book/test', (req, res) => {
  res.status(200).json({message: 'Welcome to the Book end-point!'})
});

router.get('/book/list', BookController.list, apiResponse);

router.get('/book/:id', BookController.find, apiResponse);

router.post('/book/', BookController.create, apiResponse);

router.put('/book/:id', BookController.update, apiResponse);

router.delete('/book/:id', BookController.delete, apiResponse);

// Person endpoints
router.get('/person/test', (req, res) => {
  res.status(200).json({message: 'Welcome to the Person end-point!'})
});

router.get('/person/list', PersonController.list, apiResponse);

router.get('/person/:id', PersonController.find, apiResponse);

router.post('/person/', PersonController.create, apiResponse);

router.put('/person/:id', PersonController.update, apiResponse);

router.delete('/person/:id', PersonController.delete, apiResponse);

module.exports = router;
