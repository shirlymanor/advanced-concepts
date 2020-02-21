require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// choose a image in a remote media subfolder and rename it so 
// that is is located directly under remote-media

cloudinary.uploader.rename('remote-media/images/pineapple',
    'remote-media/pineapple',
    { invalidate: true },
    function (error, result) { console.log(result, error) });

    // public_id: 'remote-media/pineapple',