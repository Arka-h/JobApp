const mongoURL = require('../mongo')
const multer = require('multer')
const crypto = require('crypto')
const GridFsStorage = require('multer-gridfs-storage')
// to pass created references of the file from the db to the admin->user->resume

const storage = new GridFsStorage({
    url: mongoURL,
    file: (req, file) => {
      // logic Query to db
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err)
            return reject(err);
          const filename = file.originalname;
          const fileInfo = { filename: filename, bucketName: "upload" };
          resolve(fileInfo);
        });
      });
    },
  });
module.exports = multer({ storage });