const mongoose = require('mongoose');
require('../models/Website');
const Website = mongoose.model('Website');
mongoose.Promise = global.Promise;

exports.getWebsite = async (req, res) => {
  try {
    console.log('req.hostname !!!!!!!!!!->>>>> ', req.hostname);
    console.log('req.headers >  !!!!!!!!!!->>>>> ', req.headers);
    console.log('req.get host >  !!!!!!!!!!->>>>> ', req.get('host'));
    console.log('req.get(origin); >  !!!!!!!!!!->>>>> ', req.get('origin'));
    const item = await Website.findOne({ domain: 'test' });
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
