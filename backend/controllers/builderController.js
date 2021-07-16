const mongoose = require('mongoose');
require('../models/Website');
const Website = mongoose.model('Website');
mongoose.Promise = global.Promise;

function removeEmptyArrays(data) {
  return data.filter((res) => {
    const allEmpty = res.every((resp) => !resp);
    return !allEmpty;
  });
}

function getGridItemData(item, titles) {
  const multiFields = {
    filter: true,
    extra: true,
  };

  const objectModel = {
    id: true,
    title: true,
    description: true,
    price: true,
    link: true,
    image: true,
    tag: true,
    comment: true,
    button: true,
    filter: true,
    extra: true,
  };

  const itemObject = {};
  titles.forEach((title, i) => {
    // Check if title is ALLOWED
    if (objectModel[title]) {
      // Check if ITEM with multiple items
      if (multiFields[title]) {
        // If haven't been added yet - create with current item
        if (!itemObject[title]) {
          if (item[i]) {
            itemObject[title] = [item[i]];
          }
        } else {
          // eslint-disable-next-line no-lonely-if
          if (item[i]) {
            itemObject[title].push(item[i]);
          }
        }
      } else {
        itemObject[title] = item[i];
      }
    }
  });
  return itemObject;
}

// 01 - Create Website
exports.builderSync = async (req, res) => {
  try {
    const { id, data } = req.body;
    if (!id || !data) throw new Error();

    const [first, ...restData] = data;
    const titles = first.map((title) => title.trim().toLowerCase());
    const dataComplete = removeEmptyArrays(restData);

    const dataToStore = dataComplete.map((item) =>
      getGridItemData(item, titles)
    );

    const site = await Website.findOne({ spId: id });

    if (!site) {
      const newWebsite = await new Website({ spId: id });
      newWebsite.cards = dataToStore;
      await newWebsite.save();
      const link = `https://gsheets.onrender.com/website/${newWebsite._id}`;
      res.status(200).send(link);
    } else {
      site.cards = dataToStore;
      await site.save();
      const link = `https://gsheets.onrender.com/website/${site._id}`;
      res.status(200).send(link);
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

exports.getWebsite = async (req, res) => {
  try {
    const item = await Website.findOne({ domain: req.params.host });

    if (!item) {
      return res.status(404).json('404');
    }
    res.status(200).send(item);
  } catch (err) {
    return res.status(500).json(err);
  }
};
