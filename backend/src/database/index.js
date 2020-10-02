const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/users-information', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

module.exports = mongoose;