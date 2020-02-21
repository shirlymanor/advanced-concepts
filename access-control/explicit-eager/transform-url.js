require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const open = require('open')


// create url
    let url = cloudinary.url("killer-whale.jpg", {
      width: 300,
      height: 300,
      quality: "auto",
      crop: "mfit"
    })
    console.log(url)
    open(url)

  