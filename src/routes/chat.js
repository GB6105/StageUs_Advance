const router = require("express").Router();
// const connect = require("../constants/mongodb")
const client = require("mongodb").MongoClient

router.post("/",async(req, res)=>{
    const {id, text} = req.body;

    try{
        const connect = await client.connect("mongodb://localhost:27017") // connect 하고 end 안쓰는데 왜?
        // mongodb도 pool 있지 않을까? 
        await connect.db("web").collection("chat").insertOne({
            "id": id,
            "text" : text
        })

        res.status(200).send({})
    }catch(err){
        res.status(err.statusCode || 500).send({
            "message": err.message
        })
    }
})

router.get("/list", async (req,res)=>{
    try{
        const connect = await client.connect("mongodb://localhost:27017")
        const result = await connect.db("web").collection("chat").find().toArray()
       
        res.status(200).send({
            "data":result
        })
    }catch(err){
        res.status(err.statusCode || 500).send({
            "message": err.message
        })
    }
})

module.exports = router;