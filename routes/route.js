const registercontroller = require("../controllers/regiser.usercontrollers");
const logincontroller = require("../controllers/login.usercontrolles");
const express = require("express");
const {auth }= require("./utils/auth");
const router = express.Router();


module.exports = (app)=>{

router.post("/register", registercontroller.registerUser);
router.post ("/login", logincontroller.checkUser);
router.post("/question",auth,questioncontroller.createquestion);
}
