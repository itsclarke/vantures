import nextConnect from 'next-connect';
import Cors from 'cors';
import middleware from 'middleware';

const handler = nextConnect();

// allows port 3000 to POST to the API on port 8080
const cors = Cors({
    methods: ['POST']
})

handler.use(middleware, cors);

handler.post(async (req, res) => {
    const payload = req.body;
    await req.db.collection('listingsAndReviews').insertOne(payload);
    return res.json('ok');
});

export default handler;