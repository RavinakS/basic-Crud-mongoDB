const schema = require('./schemaValidation').validations;
const dogCollection = require('../model/dogs');

//post
const postData = async (req, res) =>{
    const data = {
        dogID: req.body.dogID,
        name: req.body.name,
        owner: req.body.owner,
        dob: req.body.dob,
        color: req.body.color
    }

    let {error} = schema.validate(data);
    if(error){
        return res.send(error.details[0].message);
    }

    try{
        resultVal = await dogCollection.newRecord(data);
        res.send("Data is successfully updated");
    }catch(err){
        console.log(err);
        res.send(err);
    }
}

//get
const getData = async (req, res) =>{
    try{
        let data = await dogCollection.allData();
        res.send(data);
    }catch(err){
        console.log(err);
        res.send(err);
    }
}


const updateData = async (req, res) =>{
    id = req.params.id;
    
}
module.exports = {postData, getData};