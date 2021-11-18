const schema = require('./schemaValidation').validations;
const dogCollection = require('../model/dogs');

const postData = async (req, res) =>{
    const data = {
        name: req.body.name,
        owner: req.body.owner,
        dob: req.body.dob,
        color: req.body.color
    }

    let {error, validatedData} = schema.validate(data);
    if(error){
        console.log(error);
        res.send(error.details[0].message);
    }else{
        try{
            console.log(data.dob);
            resultVal = await dogCollection.newRecord(data);
            res.send("Data is successfully updated");
        }catch(err){
            console.log(err);
            res.send(err);
        }
    }
}

module.exports = {postData};