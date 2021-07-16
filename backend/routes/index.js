const express = require('express');
const cors = require('cors');
const router = express.Router();
const builderController = require('../controllers/builderController');

// External API
const corsOptions = {
  origin: 'https://www.sleepyme.ru',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};
// router.options('/getWebsite/:id', cors(corsOptions));

router.post('/builderSync', builderController.builderSync);

// CURRENT:
router.get(
  '/getWebsite/:host',
  cors(corsOptions),
  builderController.getWebsite
);

module.exports = router;
