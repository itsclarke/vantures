import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const user = 'brian';
const pass = '32cRl33sELIPW4OX';
const cluster = 'droulia';
const db = 'sample_airbnb';
const uri =`mongodb+srv://${user}:${pass}@${cluster}.g31ak.mongodb.net/${db}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('sample_airbnb');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;