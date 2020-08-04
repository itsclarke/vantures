import nextConnect from 'next-connect';
import middleware from 'middleware';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const id = req.query.id;
    const doc = await req.db.collection('listingsAndReviews').findOne({ _id: id });
    res.json(doc);
});

export default handler;