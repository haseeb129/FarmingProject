const mongoose = require("mongoose");
const Auth = require("../models/register");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const nodemailer = require("nodemailer");

// if (typeof localStorage === "undefined" || localStorage === null) {
//   const LocalStorage = require("node-localstorage").LocalStorage;
//   localStorage = new LocalStorage("./scratch");
// }

module.exports.signup = async (req, res, next) => {
  const { firstName, lastName, userName, password, email } = req.body;
  console.log(req.body);
  Auth.findOne({ email: email })
    .exec()
    .then(async (auth) => {
      if (auth) {
        return res.status(403).json({
          message: "email already exists",
        });
      } else {
        bcrypt.hash(password, saltRounds, (err, hash) => {
          if (err) {
            return res.status(500).json({
              message: "password encryption error",
            });
          } else {
            const auth = new Auth({
              _id: mongoose.Types.ObjectId(),
              firstName: firstName,
              lastName: lastName,
              userName: userName,
              email: email,
              password: hash,
            });

            auth
              .save()
              .then(async (authObj) => {
                const id = authObj._id;
                const token = await jwt.sign(
                  { id },
                  process.env.JWT_SESSION_KEY,
                  { expiresIn: "5d" }
                );
                // localStorage.setItem('jwtToken', token);
                res.status(201).json({
                  message: "User Signup/Register Successfully",
                  user: authObj,
                  token: token,
                  id: id,
                });
              })
              .catch((err) => console.log("here", err));
          }
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

module.exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  Auth.findOne({ email: email })
    .exec()
    .then(async (auth) => {
      if (auth) {
        const id = auth._id;
        await bcrypt.compare(password, auth.password, (err, result) => {
          if (err) {
            return res.status(500).json({
              message: "password decryption error",
            });
          } else {
            if (result == true) {
              // const userToken = localStorage.getItem('userToken')
              const loginToken = jwt.sign({ id }, process.env.JWT_SESSION_KEY, {
                expiresIn: "5d",
              });
              res.status(200).json({
                message: "Login Successful",
                token: loginToken,
                user: auth,
                id: id,
              });
            } else {
              return res.status(403).json({
                message: "Invalid password",
              });
            }
          }
        });
      } else {
        return res.status(404).json({
          message: "Sorry ! No Email Found",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

module.exports.forgetPassword = (req, res, next) => {
  // console.log("req", req.body);
  const { email } = req.body;
  console.log("email", email);

  Auth.findOne({ email: email })
    .exec()
    .then(async (authObj) => {
      if (authObj) {
        console.log("Object Found", authObj);
        const token = jwt.sign(
          {
            _id: authObj._id,
            email: authObj.email,
            firstName: authObj.firstname,
            lastName: authObj.lastname,
            username: authObj.username,
          },
          process.env.JWT_SESSION_KEY,
          { expiresIn: "60d" }
        );
        var transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.user,
            pass: process.env.pass,
          },
        });

        var mailOptions = {
          from: process.env.email,
          to: `${email}`,
          subject: "Account activation link",
          html: `
                            <h2>please click on the following link to activate your account</h2>
                            <a href="http://localhost:3000/ResetPassword/${token}"> ${process.env.CLIENT_URL}/ResetPassword/${token} </a>
                            `,
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });

        res.status(201).json({
          message: "please check your email for account activation",
        });
      } else {
        res.status(403).json({
          message: "Email Not found",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Email Not found",
        error: err,
      });
    });
};

module.exports.updatePassword = (req, res, next) => {
  // console.log("request received", req.body);
  const id = req.body.id;

  const decodedToken = jwt.verify(id, process.env.JWT_SESSION_KEY);
  // const authId = decodedToken.id;
  console.log("decodedToken", decodedToken);
  const password = req.body.password;
  Auth.findById(decodedToken._id)
    .exec()
    .then(async (foundObject) => {
      console.log("updatePassword", foundObject);
      await bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
          return res.state(500).json({
            error: err,
          });
        } else {
          foundObject.password = hash;
          foundObject
            .save()
            .then(() => {
              res.status(201).json({
                message: "password updated successfully",
              });
            })
            .catch((err) => {
              res.status(500).json({
                error: err,
              });
            });
        }
      });
    })
    .catch((err) => {
      console.log("Error Occur", err.message);
      res.status(500).json({
        error: err,
        message: "putter chuti kar",
      });
    });
};
