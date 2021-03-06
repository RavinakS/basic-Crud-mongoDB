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


const dataUpdateById = async (req, res) =>{
    id = req.params.id;
    data = {
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
        updated = await dogCollection.updateDataById(id, data);
        // console.log(updated);
        res.send("Data is successfully updated.");
    }catch(err){
        console.log(err);
        res.send(err);
    }
}

const deleteDataByID = async (req, res) =>{
    id = req.params.id;
    try{
        removed = await dogCollection.removeDataById(id);
        res.send({"status": "Successful", "deletedID": removed});
    }catch(err){
        console.log(err);
        res.send(err);
    }
}

module.exports = {postData, getData, dataUpdateById, deleteDataByID};