const dogCollection = require('../connection/dbschema').dogs;

const newRecord = (data) =>{
    return dogCollection.create(data);
}

const allData = () =>{
    return dogCollection.find({});
}

const updateDataById = (id, dataToUpdate) =>{
    return dogCollection.update({dogID: id}, {$set: dataToUpdate});
}

module.exports = {newRecord, allData, updateDataById};