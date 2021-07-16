const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const websiteSchema = new mongoose.Schema({
  spId: {
    type: String,
    trim: true,
    required: true,
  },
  domain: {
    type: String,
    trim: true,
    unique: true,
    default: '',
  },
  cards: [mongoose.Schema.Types.Mixed],
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Website', websiteSchema);
