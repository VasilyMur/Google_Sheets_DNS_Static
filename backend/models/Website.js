const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const websiteSchema = new mongoose.Schema({
  spId: {
    type: String,
    trim: true,
    required: true,
  },
  googleId: {
    type: String,
    trim: true,
    default: '',
  },
  domain: {
    type: String,
    trim: true,
    unique: true,
    default: '',
  },
  cards: [mongoose.Schema.Types.Mixed],
  header: {
    title: {
      type: String,
      trim: true,
      default: '',
    },
    image: {
      type: String,
      trim: true,
      default: '',
    },
  },
  frontseo: {
    title: {
      type: String,
      trim: true,
      default: '',
    },
    description: {
      type: String,
      trim: true,
      default: '',
    },
    canonical: {
      type: String,
      trim: true,
      default: '',
    },
  },
  pages: [
    {
      url: {
        type: String,
        trim: true,
        default: '',
      },
      title: {
        type: String,
        trim: true,
        default: '',
      },
      paragraphone: {
        type: String,
        trim: true,
        default: '',
      },
      paragraphtwo: {
        type: String,
        trim: true,
        default: '',
      },
      seotitle: {
        type: String,
        trim: true,
        default: '',
      },
      seodescription: {
        type: String,
        trim: true,
        default: '',
      },
    },
  ],

  hero: {
    title: {
      type: String,
      trim: true,
      default: '',
    },
    subtitle: {
      type: String,
      trim: true,
      default: '',
    },
    image: {
      type: String,
      trim: true,
      default: '',
    },
    button: {
      type: String,
      trim: true,
      default: '',
    },
  },
  footer: {
    email: {
      type: String,
      trim: true,
      default: '',
    },
    phone: {
      type: String,
      trim: true,
      default: '',
    },
    title: {
      type: String,
      trim: true,
      default: '',
    },
  },
  textmain: { type: String, trim: true, default: '' },
  cardsheader: { type: String, trim: true, default: '' },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Website', websiteSchema);
