const { default: axios } = require('axios');
const mongoose = require('mongoose');
require('../models/Website');
const Website = mongoose.model('Website');
mongoose.Promise = global.Promise;

exports.getWebsite = async (req, res) => {
  try {
    console.log(' process.env.WEBSITE_NAME >>>>> ', process.env.WEBSITE_NAME);

    const item = await Website.findOne({ domain: process.env.WEBSITE_NAME });

    // const testRequest = await axios.get(
    //   'https://gsheets.onrender.com/api/testWebsite'
    // );

    // console.log('testRequest >>> ', testRequest.data);

    // let item = '';
    // if (req.hostname !== 'google-sheets-dns.onrender.com') {
    //   item = await Website.findOne({ domain: req.hostname });
    // } else {
    //   item = await Website.findOne({ domain: 'test' });
    // }

    if (!item || !Object.keys(item)) {
      return res.status(404).json('404');
    }
    res.status(200).send(item);
  } catch (err) {
    console.log('errrr controller >>>>>>>>>>>>>>>>>>>>>>>>>>>>> ', err);
    return res.status(500).json(err);
  }
};
