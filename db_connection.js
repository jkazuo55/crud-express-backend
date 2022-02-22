const mongoose = require('mongoose');

require('dotenv').config();

// mongoose.connect(process.env.CONNECTION_STRING);

// const connection = mongoose.connection;

// connection.on('connected', () => {
//   console.log('correct connection ');
// });

// connection.on('error', () => {
//   console.log('error connection ');
// });


// Connecting mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true
}).then(() => {
  console.log('Database connected')
},
error => {
  console.log('Database could not be connected : ' + error)
}
)

module.exports = mongoose;