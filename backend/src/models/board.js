const mongoose = require('../database');

const BoardSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true,
   },
   daysDone: {
      type: Array,
      default: [],
   },
   user : {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
   },
   createdAt: {
      type: Date,
      default: Date.now,
   },
});

const Board = mongoose.model('Board', BoardSchema);

module.exports = Board;