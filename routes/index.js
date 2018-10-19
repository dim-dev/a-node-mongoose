const express = require('express');
const standupCtrl = require('../controllers/standup.server.controller');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => { standupCtrl.list(req, res); });

router.post('/', (req, res) => { standupCtrl.filterByMember(req, res); });

/* GET new note page. */
router.get('/newnote', (req, res) => standupCtrl.getNote(req, res));

/* POST new note page. */
router.post('/newnote', (req, res) => standupCtrl.create(req, res));

module.exports = router;
