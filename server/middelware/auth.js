var jwt = require("jsonwebtoken");
// const auth = require("");
const Auth = require("../models/register");

module.exports = async (req, res, next) => {
  console.log(req.headers);
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, process.env.JWT_SESSION_KEY);
    console.log(decodedToken);
    const authId = decodedToken.indexOf;
    const authObj = await (await Auth.findById(authId)).exec();
    console.log("request approved");
    next();
  } catch {
    res.status(401).json({
      message:
        "Auhorization error! please send a valid token via authorization header!",
    });
  }
};
