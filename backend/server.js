const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.get('/', function (req, res) {     //basically menu card ka item
    res.send('Contact Backend');
});

app.listen(3000, ()=>{
    console.log('listening on port 3000');
}); 
  