import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import api from './api.js';

const app = express();

app.use(bodyParser.json({  extended: true }))
app.use(bodyParser.urlencoded({  extended: true }))
app.use(cors());
app.use('/api', api);

const CONNECTION_URL = "mongodb+srv://Omarmohamed2013:Omarmohamed2013@cluster0.0ffel.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
