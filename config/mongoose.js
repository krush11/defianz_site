const mongoose = require('mongoose');
const process = require('process');

const uri = process.env.MONGO_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
const db = mongoose.connection;
mongoose.set('useFindAndModify', false);

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));
db.once('open', function () {
    // console.log('Connected to Database :: MongoDB');
});

module.exports = db;
