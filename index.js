const express = require("express");
const app = express();
const product = require("./api/product");
const { serve } = require('inngest/express');
const inngestFunction = require('./api/inngestFunction');

app.use(express.json({ extended: false }));

app.use('/api/inngest', serve('My App', [inngestFunction]));
app.use("/", product);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
