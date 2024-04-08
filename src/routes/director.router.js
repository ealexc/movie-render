const { getAll, create, getOne, remove, update } = require('../controllers/director.controllers');
const express = require('express');

const routerdirector = express.Router();

routerdirector.route('/')
    .get(getAll)
    .post(create);

routerdirector.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerdirector;