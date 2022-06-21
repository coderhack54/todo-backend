const mongoose = require("mongoose");

const url = `mongodb+srv://AnmolSrivastava:Anmol123@cluster0.7bzrq.mongodb.net/todo?retryWrites=true&w=majority`;

mongoose
  .connect(url)
  .then(() => {
    console.log("database connection successful");
  })
  .catch((err) => {
    console.error(err);
  });
module.exports = mongoose;
