const express = require("express");
const MensRanking = require("../models/schema");
const router = new express.Router // create the router

// handle the post request.

router.post("/mens", async (req, resp) => {
    try {
        const data = new MensRanking(req.body)
        console.log(req.body)
        const insertMens = await data.save()
        resp.status(201).send(data)

    } catch (error) {
        resp.status(400).send(error)
    }
})



// get method 

router.get("/mens", async (req, resp) => {
    try {      // for to red the data we will use the get method and for that we use the find method
        const getData = await MensRanking.find({}).sort({ "ranking": 1 }) // read the sort the data
        resp.send(getData)

    } catch (error) {
        resp.status(400).send(error)
    }
})




// get the data for indiviuall person.

router.get("/mens/:id", async (req, resp) => {
    try {
        const _id = req.params.id;
        const getMen = await MensRanking.findById(_id)  // in the mongoose there is an method called findById it is used for to find the data by the id.
        resp.send(getMen)
    } catch (error) {
        resp.status(400).send(error)
    }
})



// update method.

router.patch("/mens/:id", async (req, resp) => {
    try {
        const _id = req.params.id;
        const findData = await MensRanking.findByIdAndUpdate(_id, req.body, {
            new: true
        })  // for to update the data we are using thr findByIdAndUpdate method in the mogoose and also get the updated in to the findByIdAndUpdate
        // new:true is for to see the updated data 
        resp.send(findData)
    } catch (error) {
        resp.status(500).send(error)  // status code 500 for to server.
    }
})


// delete the data:


router.delete("/mens/:id", async (req, resp) => {
    try {
        const _id = req.params.id;
        const findData = await MensRanking.findByIdAndDelete(_id)
        resp.send(findData)
    } catch (error) {
        resp.send(error)
    }
})

module.exports = router

