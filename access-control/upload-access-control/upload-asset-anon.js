require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const open = require('open');

const today = new Date().toISOString();

const addDays = days=>{
  let currentDate = new Date();
  return new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate()+days);
}
// set to expire after 1 day
const enddate = addDays(7).toISOString();
console.log('oneweekfromtoday',enddate);


cloudinary.uploader.upload(`${process.env.ASSET_SOURCE_BASE}/assets/images/koi.jpg`, {
  public_id: "koi",
  type: "upload",
  overwrite: true,
  invalidate:true,
  "access_control": [
    { access_type: "anonymous", start: today, end: enddate}
  ]
})
  .then(uploadResult => {
    console.log(uploadResult)
    let url = uploadResult.secure_url;
    open(url)
  })
  .catch(error => console.error(error));