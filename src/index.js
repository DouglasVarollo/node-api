const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const productsRoutes = require('./routes/products');

// iniciando o app
const app = express();
app.use(cors());
app.use(express.json());

// iniciando o DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true
});

// rotas
app.use('/api', productsRoutes);

app.listen(3001);