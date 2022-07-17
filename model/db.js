const res = require('express/lib/response');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

// Connection URL
const uri = "mongodb+srv://"+process.env.MONGODB_USERNAME+":"+process.env.MONGODB_PASSWORD+"@cluster0.uatx21n.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// Database Name

const find = async function(collectionname,json) {      
    await client.connect();
    const col = client.db("test").collection(collectionname);
    const result = await col.find(json).toArray();
    console.log(result)
    client.close();
    return result    
  }

const insert = async function(collectionname,json) {
    await client.connect();
    const col = client.db("test").collection(collectionname);
    const result = await col.insertMany(json);
    return result;
  }


module.exports = {
  find,
  insert,
}

