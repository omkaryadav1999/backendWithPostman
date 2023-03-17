const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/database", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connect to the database")
}).catch((er) => {
    console.log(er)
})