var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authRouter = require('./routes/auth')
var apiRouter = require('./routes/api')

const Cohort = require("./models/Cohort.model");
const Student = require("./models/Student.model");

var app = express();

const mongoose = require("mongoose");

 

mongoose //Verificar la instalacion y via de datos con la clase

  .connect("mongodb://127.0.0.1:27017/cohort-tools-api")

  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))

  .catch(err => console.error("Error connecting to mongo", err));
  



//


app.get('/docs', (req, res, next) => {
  console.log('Accessing Docs');
  res.sendFile(path.join(__dirname, 'views', 'docs.html'));
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
    cors({
        origin: [process.env.REACT_APP_URI],
    })
    );
    
    app.use("/", indexRouter);
    app.use("/users", usersRouter);
    app.use('/auth', authRouter);
    app.use('/api', apiRouter);

    module.exports = app;

