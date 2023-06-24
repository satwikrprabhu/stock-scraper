const express = require('express');
const scrape = require('./scrape');
const app = express();
const cors = require('cors');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.post('/getStockLink',scrape);

app.listen(5000, ()=>console.log("Server running on port 5000"));