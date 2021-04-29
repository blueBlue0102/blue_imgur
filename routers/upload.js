const express = require("express");
const formidable = require("formidable");
const path = require("path");

const router = express.Router();

const FORMIDABLE_CONFIG = {
  uploadDir: path.join(
    path.dirname(require.main.filename),
    process.env.IMAGE_STORAGE_PATH
  ),

  keepExtensions: true,

  allowEmptyFiles: false,

  maxFileSize: Number(process.env.DATA_MAX_SIZE) * 1024 * 1024,

  filename: function (name, ext, part, form) {
    let result = [];

    // generate string by Math.random()
    const length = 3;
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++) {
      result.push(
        characters.charAt(Math.floor(Math.random() * characters.length))
      );
    }

    // generate string by Date().getTime()
    let ts = String(new Date().getTime());

    for (let i = 1; i < ts.length; i += 3) {
      result.push(Number(ts.substr(i, 3)).toString(36));
    }

    return result.join("") + ext;
  },

  // filter: function ({ name, originalFilename, mimetype }) {
  //   return mimetype && mimetype.includes("image");
  // },
};

router.post("/", async (req, res, next) => {
  const form = formidable(FORMIDABLE_CONFIG);
  form.parse(req, function (err, fields, files) {
    if (err) {
      console.log(err.message);
      return res.status(400).end(err.message);
    }
    console.log("parsing");
    console.log("files:", files.file.mimetype);
    return res.status(200).render("upload");
  });
});

module.exports = router;