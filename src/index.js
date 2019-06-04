const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const productsRoutes = require('./routes/products');

// iniciando o app
const app = express();
app.use(cors());
app.use(express.json());

// iniciando o DB
mongoose.connect('mongodb://127.0.0.1:27017/nodeapi', {
  useNewUrlParser: true
});

// rotas
app.use('/api', productsRoutes);

app.listen(3001);