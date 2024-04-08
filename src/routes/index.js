const express = require('express');
const routerActor = require('./actor.router');
const routerdirector = require('./director.router');
const routerGenre = require('./genre.router');
const routerMovie = require('./movie.router');
const router = express.Router();

router.use('/actors', routerActor)

router.use('/directors', routerdirector)

router.use('/genres', routerGenre)

router.use('/movies', routerMovie)


module.exports = router;