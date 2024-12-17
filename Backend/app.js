
const dotenv = require('dotenv');
dotenv.config();
let express = require("express");
const app = express();
const cors = require('cors');

app.use(cors()); //middleware,for all the request.




module.exports = app;