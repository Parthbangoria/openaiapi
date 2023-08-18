require("dotenv").config();
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const Sequelize = require("sequelize");
const sequelize = require("./config/database");
// const registercontroller = require("./controllers/regiser.usercontrollers");
// const logincontroller = require("./controllers/login.usercontrolles");
// const questioncontroller = require ("./controllers/question.controller");



app.use(express.urlencoded({ extended : true }));
app.use(express.json());

require("./routes/route")(app);

// app.post("/register", registercontroller.registerUser);
// app.post("/login", logincontroller.checkUser);
// app.post("/question",auth,questioncontroller.createquestion);


sequelize.sync({ force: false, logging: false })
    .then(() => {
        console.log('Database is connected!');
    })
    .catch((error) => {
        console.error('Error syncing database:', error);
    });


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server is running on Port:${PORT}`);
});
