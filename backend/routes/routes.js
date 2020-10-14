const router = require("express").Router();
const passport = require("passport");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const upload = require("./storageEngine");
const mongoose = require("mongoose");
const Grid = require("gridfs-stream");
const ObjectId = require("mongodb").ObjectID;
const _ = require("lodash").cloneDeep;

const connection = mongoose.connection; //mongoose connection

// handles all the login register logout logic
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.login(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});

router.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) {
      res.send("User already exists");
      // console.log('User already exists')
    } else {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword,
        userType: req.body.userType,
        name: req.body.name,
        company: req.body.company,
      });
      await newUser.save();
      res.send("User Created");
      // console.log('User Created')
    }
  });
});

router.get("/logout", (req, res, next) => {
  req.logout();
  res.send("Logged out");
});

router.get("/user", (req, res) => {
  res.send(req.user); // req.user has all of the user stored in it and can be used anywhere
});

router.get("/jobs", async (req, res) => {
  if (req.user === undefined)
    //not logged in, send null
    res.send(null);
  else {
    let final = [];
    User.find({ userType: "Employer" }, { _id: 0, Jobs: 1 }, (err, users) => {
      for (user of users) {
        final = final.concat(user["Jobs"]);
      }
      res.send(final);
    });
  }
});

//-------------------------------------------------------------------------------------FILE UPLOAD DOWNLOAD-------------------------------------------------------------------------------------
// Connection to gridfs
connection.once("open", () => {
  gfs = Grid(connection.db, mongoose.mongo);
  gfs.collection("upload");
  console.log("Connection Successful");
});
router.post("/test", (req, res, next) => {
  const jobs = [
    {
      company: "AkkiBhat Industries",
      JobName: "jobname1",
      Description: "Description etc etc etc",
      Resumes: [
        {
          nameCan: "nameCan1",
          emailCan: "emailCan1",
          resumeFile: "resume1",
        },
        {
          nameCan: "nameCan2",
          emailCan: "emailCan2",
          resumeFile: "resume2",
        },
      ],
    },
    {
      company: "AkkiBhat Industries",
      JobName: "jobname2",
      Description: "Description2 etc etc etc",
      Resumes: [
        {
          nameCan: "nameCan3",
          emailCan: "emailCan3",
          resumeFile: "resume3",
        },
        {
          nameCan: "nameCan4",
          emailCan: "emailCan4",
          resumeFile: "resume4",
        },
      ],
    },
  ];
  User.updateOne(
    { username: "Akshat Bhat" },
    {
      Jobs: jobs,
    },
    (err, res) => {
      console.log(res);
    }
  );
});

router.post("/upload", upload.single("file"), (req, res, next) => {
  if (req.file === undefined) res.status(406).send();

  // req.user._id
  User.updateOne(
    { _id: ObjectId(req.user._id) },
    { $push: { jobApplied: req.body.jobID } },
    (err, res) => {
      console.log(req.body.jobID);
      console.log(res);
      //logic here
    }
  );

  User.updateOne(
    {
      Jobs: { $elemMatch: { _id: ObjectId(req.body.jobID) } },
    },
    {
      $push: {
        "Jobs.$.Resumes": {
          nameCan: req.user.name,
          emailCan: req.user.email,
          resumeFile: req.file["id"].toString(),
        },
      }, // Resumes should be an array
    },
    (err, res) => {
      if (err) throw err;
      console.log(JSON.stringify(res));
    }
  );

  res.status(201).send();
});

router.post("/create-job", (req, res) => {
  const obj = {
    company: req.user.company,
    JobName: req.body.JobName,
    Description: req.body.Description,
  };
  User.updateOne(
    { _id: ObjectId(req.user._id) },
    {
      $push: {
        Jobs: obj,
      },
    },
    () => {
      res.status(201).send();
    }
  );
});

router.get("/applied", async (req, res) => {

  const runQuery= async(final)=>{
    for (appliedJob of req.user.jobApplied) {
      const [{ Jobs: jobs }] = await User.find(
        { Jobs: { $elemMatch: { _id: ObjectId(appliedJob) } } },
        { _id: 0, Jobs: 1 });

      let search = jobs.find((job) => {
        if (job._id == appliedJob) return true;
        else return false;
      });
      search.Resumes = undefined;
      final.push(search);
      
    }
    return final
  }
  if (req.user === undefined)
    res.send(null);
  else {
    let final = [];
    res.send(await runQuery(final));
  }
});

router.get("/:id", (req, res) => {
  gfs.files.findOne({ _id: ObjectId(req.params.id) }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({ err: "No file exists" });
    } // Check if image
    //   if (file.contentType === "image/jpeg" || file.contentType === "image/png") {
    // Read output to browser
    const readstream = gfs.createReadStream(file.filename);
    readstream.pipe(res);
    //   } else {
    //     res.status(404).json({ err: "Not an image" });
    //   }
  });
});

module.exports = router;
