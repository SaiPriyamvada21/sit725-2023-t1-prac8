let express = require('express');
let app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:admin@cluster0.dwhgcgh.mongodb.net/?retryWrites=true&w=majority"
let port = process.env.port || 3000;
let collection;

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


async function runDBConnection() {
    try {
        await client.connect();
        collection = client.db().collection('State');
        console.log(collection);
    } catch(ex) {
        console.error(ex);
    }
}

app.get('/', function (req,res) {
    res.render('index.html');
});

app.get('/api/state', async(req,res) => {
    try{
      await runDBConnection();
    
      getAllState((err,result)=>{
        if (!err) {
            res.json({statusCode:200, data:result, message:'get all states successful'});
        }
    });

  }
  catch(error){
    console.error(error);
    res.status(500).json({ statusCode: 500, message: 'Internal server error' });
}
});

app.post('/api/state', (req,res)=>{
    let state = req.body;
    postState(state, (err, result) => {
        if (!err) {
            res.json({statusCode:201, data:result, message:'success'});
        }
    });
});

function postState(state,callback) {
    collection.insertOne(state,callback);
}

function getAllState(callback){
    collection.find({}).toArray(callback);
}

app.listen(port, ()=>{
    console.log('express server started');
    runDBConnection();
});