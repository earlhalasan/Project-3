const mongoose = require("mongoose");
const { Schema, model } = mongoose;
require('./category')

// make todo schema
const todoSchema = new Schema({
  name: { type: String, required: true },
  date: Date,
  time: String,
  category: [{ type: Schema.Types.ObjectId, ref: "Category" }],

  urgency: String,
});

const Todo = model("Todo", todoSchema);

// make category model
const Category = model("Category", categorySchema);

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = Todo;
