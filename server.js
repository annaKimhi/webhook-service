const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON payloads
app.use(bodyParser.json());

// Webhook endpoint
app.post('/webhook', (req, res) => {
console.log("I'm here!");
    console.log('Received webhook payload:', req.body);
    const payload = req.body;
    if (payload.eventType === 'workitem.updated') {
        const workItemId = payload.resource.id;
        const updatedFields = payload.resource.fields;
        const state = updatedFields['System.State'];
        const title = updatedFields['System.Title'];

        console.log(`Work Item ID: ${workItemId}`);
        console.log(`Title: ${title}`);
        console.log(`State: ${state}`);

        // Add your business logic here, e.g., validate child tasks or take action
    } else {
        console.log(`Unhandled event type: ${payload.eventType}`);
    }
    // Respond to acknowledge receipt
    res.status(200).send('Webhook received');

    
});

app.listen(PORT, () => {
    console.log(`Webhook server is running on http://localhost:${PORT}`);
});
