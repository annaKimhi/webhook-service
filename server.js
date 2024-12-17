const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON payloads
app.use(bodyParser.json());

// Webhook endpoint
app.post('/webhook', (req, res) => {
    console.log('Received webhook payload:', req.body);

    // Respond to acknowledge receipt
    res.status(200).send('Webhook received');
});

app.listen(PORT, () => {
    console.log(`Webhook server is running on http://localhost:${PORT}`);
});
