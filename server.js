let express = require('express');
let app= express();
let port=process.env.port || 3000;

app.use(express.static(__dirname + '/'));

app.get('/',(req,res)=>{
    res.render('index.html');
});



app.get('/add/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1); 
    const num2 = parseInt(req.params.num2); 
    const result = num1 + num2;
    res.json({ operation: 'addition', num1, num2, result }); 
  });
app.get('/multiply/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1); 
    const num2 = parseInt(req.params.num2); 
    const result = num1 * num2; 
    res.json({ operation: 'multiplication', num1, num2, result }); 
  });

  app.listen(port, ()=>{
    console.log('server started');
});