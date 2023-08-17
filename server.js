let express = require('express');
let app = express();
let port = process.env.port || 3000;
let collection;
require('./dbConnection');

let router =require('./routers/stateRouter');
app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/state',router);

app.listen(port, ()=>{
    console.log('express server started');
});
