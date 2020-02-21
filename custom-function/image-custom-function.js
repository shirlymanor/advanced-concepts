require('dotenv').config();
const cloudinary = require('cloudinary').v2;
// generate 3 image tags using custom function

// blur
console.log(cloudinary.image("tiger-lilly", {
  custom_function: {
    function_type: "wasm",
    source: "wasm_example_blur.wasm"
  }
}))

// quantized with color input 4
console.log(cloudinary.image("tiger-lilly",{
  raw_transformation: "$colors_4,fn_wasm:wasm_example_quantize.wasm"
}))

// original
console.log(cloudinary.image("tiger-lilly"))



