const dogCollection = require('../connection/dbschema').dogs;

const newRecord = (data) =>{
    return dogCollection.create(data);
}

module.exports = {newRecord};