// SNIPPETS
// 1

<div className="container">
  {" "}
  <div className="jumbotron">
    {" "}
    <h1 className="display-4">Image Uplaoder</h1>{" "}
    <p className="lead">
      {" "}
      This is a simple application to upload and retrieve images from a database{" "}
    </p>{" "}
    <hr className="my-4" />{" "}
  </div>{" "}
  <div className="input-group mb-3">
    {" "}
    <div className="custom-file">
      {" "}
      <input
        type="file"
        className="custom-file-input"
        id="inputGroupFile01"
        aria-describedby="inputGroupFileAddon01"
      />{" "}
      <label className="custom-file-label" htmlFor="inputGroupFile01">
        {" "}
        Choose file{" "}
      </label>{" "}
    </div>{" "}
  </div>{" "}
  <button type="button" className="btn btn-primary">
    {" "}
    Upload{" "}
  </button>{" "}
</div>
///////////////////////////////////////////////////////////////////
// const express = require("express");
// const bodyParser = require("body-parser");
// const path = require("path");
// const app = express();
// app.use(bodyParser.json());
// const port = 5000;
// app.listen(port, () => console.log(`Server started on port ${port}`));

// 2

//Connect to DB

// const mongoose = require("mongoose");
// const mongoURI = YOUR_MONGO_URI;
// const conn = mongoose.createConnection(mongoURI);
// conn.once("open", () => {
//   console.log("Connection Successful");
// });

//3

// Create storage engine
// const storage = new GridFsStorage({
//   url: mongoURI,
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//       crypto.randomBytes(16, (err, buf) => {
//         if (err) {
//           return reject(err);
//         }
//         const filename = file.originalname;
//         const fileInfo = { filename: filename, bucketName: "upload" };
//         resolve(fileInfo);
//       });
//     });
//   },
// });
// const upload = multer({ storage });

//4

// app.post("/", upload.single("img"), (req, res, err) => {
//   if (err) throw err;
//   res.status(201).send();
// });

//5

// Post = (e) => {
//   e.preventDefault();
//   const file = document.getElementById("inputGroupFile01").files;
//   const formData = new FormData();
//   formData.append("file", file[0]);
//   fetch("http://localhost:4000/", { method: "POST", body: formData }).then(
//     (r) => {
//       console.log(r);
//     }
//   );
//   console.log(file[0]);
// };

// 6

// let gfs;
// conn.once("open", () => {
//   gfs = Grid(conn.db, mongoose.mongo);
//   gfs.collection("uploads");
//   console.log("Connection Successful");
// });

// 7

app.get("/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({ err: "No file exists" });
    } // Check if image
    if (file.contentType === "image/jpeg" || file.contentType === "image/png") {
      // Read output to browser
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({ err: "Not an image" });
    }
  });
});

// 8

<img id="img" style={{ display: "block" }}>
  {" "}
</img>;

// 9

document
  .getElementById("img")
  .setAttribute("src", `http://localhost:5000/${file[0].name}`);

// https://medium.com/swlh/uploading-images-to-mongodb-with-multer-ed345f2922ba
