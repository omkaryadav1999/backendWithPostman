const express = require("express")
const app = express()
app.use(express.json());  // get permission for use the data in thje form of json.
require("../src/db/conection");
const MensRanking = require("./models/schema");
const router = require("../src/routers/main")
app.use(router)


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`connect to the port no.${port}`)
})