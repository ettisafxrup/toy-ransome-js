console.clear()
const fs = require("fs")
const path = require("path")
const encryptedExtension = ".rupbhaichekxy"

fs.readdir(__dirname, (err, data) => {
  if (err) {
    console.log("Oops, something went wrong!!")
  }

  data.forEach((file) => {
    const getEncryptedFileData = fs.readFileSync(path.join(__dirname, file))
    const encryptedBufferData = Buffer.from(getEncryptedFileData, "base64")
    const decryptedData = encryptedBufferData.toString("ascii")
    const finalBuffer = Buffer.from(decryptedData, "base64")
    const text = finalBuffer.toString("ascii")

    const decryptedFileName = file.split(encryptedExtension).join("")

    if (path.extname(file) === encryptedExtension) {
      fs.writeFile(path.join(__dirname, file), text, (err, data) => {
        if (err) console.log("Oops, Cannot decrypt your Data!")
      })

      fs.rename(
        path.join(__dirname, file),
        path.join(__dirname, decryptedFileName),
        (err) => {
          if (err) {
            console.log("Bhai Ganja Effect")
          }
        }
      )
    }
  })
})
