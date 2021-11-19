const dogCollection = require('../connection/dbschema').dogs;

const newRecord = (data) =>{
    return dogCollection.create(data);
}

const allData = () =>{
    return dogCollection.find({});
}

// const updateDataById = (id) =>{
//     return dogCollection.update(godID: id, $set: req.body);
// }

module.exports = {newRecord, allData};