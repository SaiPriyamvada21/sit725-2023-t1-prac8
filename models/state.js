let client = require('../dbConnection');
let collection=client.db().collection('State');

function postState(state,callback) {
    collection.insertOne(state,callback);
}

function getAllState(callback){
    collection.find({}).toArray(callback);
}
module.exports ={postState,getAllState}