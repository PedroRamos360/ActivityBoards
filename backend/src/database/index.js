const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/activity-boards', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

module.exports = mongoose;