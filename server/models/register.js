const mongoose = require("mongoose");

const registerSchema = mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  firstName: {
    type: String,
    // require: true,
  },
  lastName: {
    type: String,
    // require: true,
  },
  email: {
    type: String,
    require: true,
  },
  userName: {
    type: String,
    // require: true,
  },
  password: {
    type: String,
    require: true,
    validate: [
      checkPasswordLength,
      "Password must be atleast 8 cahracters long",
    ],
  },
});
function checkPasswordLength(val) {
  if (val.toString().length >= 8) {
    return true;
  } else {
    return false;
  }
}
module.exports = mongoose.model("registerUser", registerSchema);
