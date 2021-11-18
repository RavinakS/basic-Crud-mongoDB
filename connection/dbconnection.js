const mongoose = require('mongoose');
const dbAtlasUri = "mongodb+srv://ravina18:ravina18@cluster0.pbo19.mongodb.net/pets?retryWrites=true&w=majority";

// connect to the mongoDB cluster
mongoose.connect(
    dbAtlasUri,
    {useNewUrlParser: true, useUnifiedTopology: true}
).then((res)=>{
    console.log("Connected to DB");
}).catch((err)=>{
    console.log(err);
})

module.exports = mongoose;