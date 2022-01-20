// Import express module
const express = require("express");
// import Mongoose
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

// Create backend application
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//define image folder destination
app.use("/images", express.static(path.join("backend/images")));
// import match model from models/match.js
const Match = require("./models/match");
const Player = require("./models/player");
const User = require("./models/user");
// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

// define images to insert
const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    // verify if image correspends to mime type
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, "backend/images");
  },
  // define file name
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "-crococoder-" + "." + extension;
    cb(null, imgName);
  },
});

// Connect application to DB
// if not exists, create DB, else connect automatically
mongoose.connect("mongodb://localhost:27017/soccerDBS", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// / : http://localhost:3000/
app.get("/allMatches", (req, res) => {
  // here traitment
  console.log("I am here for allMatches");
  // Connect to DB and get all Matches
  Match.find((err, docs) => {
    if (err) {
      console.log("Error", err);
    } else {
      res.status(200).json({
        message: "Here all objects",
        matches: docs,
      });
    }
  });
});

app.post(
  "/addMatch",
  multer({ storage: storage }).single("image"),
  (req, res) => {
    console.log("Here in adding");
    //
    // const p = new Player({
    //   nameP: "Abderrahmen",
    //   posteP: "ATK"
    // });

    // p.save();
    url = req.protocol + "://" + req.get("host");
    // create object to insert into DB
    const match = new Match({
      scoreOne: req.body.scoreOne,
      scoreTwo: req.body.scoreTwo,
      teamOne: req.body.teamOne,
      teamTwo: req.body.teamTwo,
      image: url + "/images/" + req.file.filename,
    });
    match.save().then((result) => {
      if (result) {
        res.status(200).json({
          message: "Added successfully",
        });
      }
    });
  }
);

app.delete("/deleteMatch/:id", (req, res) => {
  Match.deleteOne({ _id: req.params.id }).then((result) => {
    if (result) {
      res.status(200).json({
        message: "Deleted Successfully",
      });
    }
  });
});

app.get("/displayMatch/:id", (req, res) => {
  console.log("here in get", req.params.id);
  Match.findOne({ _id: req.params.id }).then((data) => {
    if (data) {
      res.status(200).json({
        match: data,
      });
    }
  });
});

app.put("/editMatch/:id", (req, res) => {
  const match = new Match({
    _id: req.body._id,
    scoreOne: req.body.scoreOne,
    scoreTwo: req.body.scoreTwo,
    teamOne: req.body.teamOne,
    teamTwo: req.body.teamTwo,
  });
  // update takes 2 params: 1st for search Object and 2nd to replace it
  Match.update({ _id: req.params.id }, match).then((result) => {
    if (result) {
      res.status(200).json({
        message: "Updated Successfully",
      });
    }
  });
});

app.post("/signup", (req, res) => {
  console.log("Here in adding user");
  // create object to insert into DB
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    pwd: req.body.pwd,
    tel: req.body.tel,
  });
  user.save().then((result) => {
    if (result) {
      res.status(200).json({
        message: "User Added successfully",
      });
    }
  });
});
app.get("/allUsers", (req, res) => {
  User.find((err, docs) => {
    if (err) {
      console.log("Error", err);
    } else {
      res.status(200).json({
        message: "Here all users",
        users: docs,
      });
    }
  });
});

app.delete("/deleteUser/:id", (req, res) => {
  User.deleteOne({ _id: req.params.id }).then((result) => {
    if (result) {
      res.status(200).json({
        message: " User Deleted Successfully",
      });
    }
  });
});

app.post("/login", (req, res) => {
  User.find({ email: req.body.email, pwd: req.body.pwd }).then((data) => {
    if (data) {
      res.status(200).json({
        user: data,
      });
    }
  });
});

app.get("/api/search/:term", (req, res) => {
  console.log("req.body", req.body);
  console.log("req.params", req.params.term);
  Match.find({ teamOne: req.params.term }).then((result) => {
    console.log("Here searched result", result);
    if (result) {
      res.send(result);
    }
  });
});




// players
app.get("/allPlayers", (req, res) => {
  // here traitment
  console.log("I am here for allPlayers");
  // Connect to DB and get all Players
  Player.find((err, docs) => {
    if (err) {
      console.log("Error", err);
    } else {
      res.status(200).json({
        message: "Here all objects",
        players: docs,
      });
    }
  });
});
const storagePlayer = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    // verify if image correspends to mime type
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, "backend/images");
  },
  // define file name
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgPlayer = name + "-" + Date.now() + "-crococoder-" + "." + extension;
    cb(null, imgPlayer);
  },
});


app.post("/addPlayer",multer({ storage: storagePlayer }).single('image'), (req, res) => {
  url = req.protocol + '://' + req.get('host');
  const player = new Player({
    name: req.body.name,
    poste: req.body.poste,
    
    image: url + '/images/' + req.file.filename
  });
  player.save().then((result) => {
    if (result) {
      res.status(200).json({
        message: "Player Added successfully",
      });
    }
  });
});
app.get("/api/getPlayer/:id", (req, res) => {
  Player.findOne({ _id: req.params.id }).then((document) => {
    res.status(200).json({
      player: document,
    });
  });
});
app.put("/api/editPlayer/:id", (req, res) => {
  const player = new Player({
    _id: req.body._id,
    name: req.body.name,
    poste: req.body.poste,
    
  });

  Player.update({ _id: req.params.id }, player).then((result) => {
    if (result) {
      res.status(201).json({
        message: "Updated successfully",
      });
    } else {
      console.log("here error");
    }
  });
});
app.get("/displayPlayer/:id", (req, res) => {
  console.log("here in get", req.params.id);
  Player.findOne({ _id: req.params.id }).then((data) => {
    if (data) {
      res.status(200).json({
        player: data,
      });
    }
  });
});
app.delete("/deletePlayer/:id", (req, res) => {
  Player.deleteOne({ _id: req.params.id }).then((result) => {
    if (result) {
      res.status(200).json({
        message: "Deleted Successfully",
      });
    }
  });
});
app.get("/api/search/:term", (req, res) => {
  console.log("req.body", req.body);
  console.log("req.params", req.params.term);
  Player.find({ name: req.params.term }).then((result) => {
    console.log("Here searched result", result);
    if (result) {
      res.send(result);
    }
  });
});




module.exports = app;