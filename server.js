'use strict';
const express = require('express')
const app = express();
const PORT = process.env.PORT || 3010

app.use(express.static('./html'))

app.listen(PORT, () => {
    console.log('App is running on', PORT)
})