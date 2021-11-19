const db = require('./dbconnection');
// const db = require('mongoose');

const Schema = db.Schema;
const Model = db.model;

const postSchema = new Schema({
    dogID: {type: Number},
    name: {type:'String'},
    dob: {type:Date},
    owner: {type:String},
    color: {type:String}
})

const dogs = Model("Dogs", postSchema);

module.exports = {dogs};