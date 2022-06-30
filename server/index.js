const express = require("express")
const path = require("path")
const cors = require("cors")
const morgan = require("morgan")

const data = require("./data.json")

const app = express()
const port = process.env.PORT || 3001

app.use(express.static("../client/dist"))

app.use(morgan("dev"))
app.use(cors())

app.get("/api/destination", function (req, res) {
  res.json(data.destination)
})

app.get("/api/technology", function (req, res) {
  res.json(data.technology)
})

app.get("/api/crew", function (req, res) {
  res.json(data.crew)
})

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"))
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
