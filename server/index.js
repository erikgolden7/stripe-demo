require('dotenv').config();
const cors = require('cors');
const { json } = require('body-parser');
const express = require('express');
const stripe = require('stripe');
const port = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(json());

app.get('/', (req, res) => {
  res.send({
    message: 'Hello Stripe checkout server!',
    timestamp: new Date().toISOString()
  });
});

app.post('/api/transaction', (req, res) => {
  const stripeSecretKey =
    process.env.NODE_ENV === 'production'
      ? 'sk_live_MY_SECRET_KEY'
      : process.env.STRIPE_SECRET_KEY;

  stripe(stripeSecretKey).charges.create(
    req.body,
    res => (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).send({ error: stripeErr });
      } else {
        res.status(200).send({ success: stripeRes });
      }
    }
  );
});

app.listen(port, err => {
  if (err) throw err;
  console.log(`Server running on port: ${port}`);
});
