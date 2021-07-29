const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config({ path: 'variables.env' });
const routes = require('./routes/index');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';

const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

// Connect to DB
const useDB =
  process.env.NODE_ENV === 'development'
    ? process.env.DATABASE_DEV
    : process.env.DATABASE;

mongoose.connect(`${useDB}`, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

nextApp
  .prepare()
  .then(() => {
    const server = express();
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));

    server.use((req, res, next) => {
      const { host } = req.headers;
      console.log(
        'req.host server ---------------------------------------------------------->> ',
        host
      );
      console.log(
        'req.hostNAME server ---------------------------------------------------------->> ',
        req.hostname
      );

      next();
    });
    // API routes
    server.use('/api/', routes);

    // Catch all pages
    server.get('*', (req, res) => handle(req, res));

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
