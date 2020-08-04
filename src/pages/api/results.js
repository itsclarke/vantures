import nextConnect from 'next-connect';
import middleware from 'middleware';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    let doc = await req.db.collection('listingsAndReviews').find({}).limit(5).toArray();
    res.json(doc);
});

export default handler;