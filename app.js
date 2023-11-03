const express = require('express');
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get("/another",(req,res)=>{
    res.json(req.query);
});

app.listen(80, () => {
    console.log('Example app listening on port 80!');
});

//Run app, then load http://localhost:port in a browser to see the output.