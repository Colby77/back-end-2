const express = require("express")
const cors = require("cors")

const app = express()

const {getHouse, createHouse, updateHouse, deleteHouse} = require("./controller.js")


app.use(cors())
app.use(express.json())

port = 4004

app.get("/api/houses", getHouse)
app.delete("/api/houses/:id", deleteHouse)
app.post("/api/houses", createHouse)
app.put("/api/houses/:id", updateHouse)

app.listen(port, () => {
    console.log("Server running on " + port)
})