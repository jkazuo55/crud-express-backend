const express = require('express');
const app= express();
const connectionDB=require("./db_connection");
const userRoute=require("./routes/user.route");
const bodyParser=require("body-parser");
const path = require('path');
const cors   = require('cors');

// Setting up express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

// Api root
app.use('/api/user', userRoute)
// Create port
const port = process.env.PORT || 5000;
// Conectting port
const server = app.listen(port, () => {
    console.log('Port connected to: ' + port)
})
// Find 404 and hand over to error handler
app.use((req, res, next) => {
    next(createError(404));
});
// Index Route
app.get('/', (req, res) => {
    res.send('invaild endpoint');
});
// error handler
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
// Static build location
app.use(express.static(path.join(__dirname, 'dist')));