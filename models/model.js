//jshint esversion: 6
const mongoose = require("mongoose");


mongoose.connect(`mongodb+srv://admin-ryan:766Huffnagle@cluster0-kzf2g.mongodb.net/list?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useFindAndModify: false
});

// mongoose.Promise = Promise;

let todoItemSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true
  },
  complete: Boolean
});


const Item = mongoose.model("Item",todoItemSchema);

module.exports.Item = Item;
