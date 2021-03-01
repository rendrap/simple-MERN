import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import routes from './routes/soccerRoutes.js'


const app = express();
const PORT = 3000;
// const PORT = 27017;

//mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/soccerDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


// Body Parser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

routes(app);

app.get('/', (req, res) =>
  res.send(`Our soccer app is running on PORT: ${ PORT }`)
);

app.listen(PORT, () =>
  console.log(`Our soccer app is running on PORT: ${ PORT }`)
);