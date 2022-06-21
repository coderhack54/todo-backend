const { Schema, model } = require("../connection");

const schema = new Schema({
  title: String,
});

module.exports = model("todoCollection", schema);
