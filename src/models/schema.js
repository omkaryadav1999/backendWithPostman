const mongoose = require("mongoose")

const Dataschema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true, // trim for remove extra spce befor and after the text.
    },
    ranking: {
        type: Number,
        require: true,
        unique: true
    },
    score: {
        type: Number,
        require: true,
    },
    event: {
        type: String,
        default: "100m" // default value for all the memebers.
    },
    contury: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    dob: {
        type: String,
        require: true
    }
})

// create the model. create the collection.

const MensRanking = new mongoose.model("MensRanking", Dataschema);

module.exports = MensRanking