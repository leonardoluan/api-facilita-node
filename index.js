require('dotenv/config');
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
const cors = require('cors');

require('./src/database');

const PORT = process.env.PORT || 3001;

const app = express();

app.use('/files', express.static('upload', { maxAge: '120 days' }));
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
