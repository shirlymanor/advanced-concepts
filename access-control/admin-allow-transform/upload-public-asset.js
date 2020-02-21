require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const open = require('open')

cloudinary.uploader.upload(`${process.env.ASSET_SOURCE_BASE}/assets/images/shark.jpg`, {
  public_id: "shark",
  type: "upload",
  overwrite: true
})
  .then(uploadResult => {
    console.log(uploadResult)
    let url = uploadResult.secure_url;
    open(url)
  })
  .catch(error => console.error(error));