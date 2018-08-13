const path = require('path');
const express = require('express');
const errorHandler = require('./errorHandling');
const app = express();

app.use(express.json());