const express = require('express');
const app = express();
var db = require("./db/conn");
const StudentsSchema = require('./models/schema');
const port = process.env.PORT || 8080;

var bodyParser = require('body-parser');
const Students = require('./models/schema');
var cors = require('cors')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.get('/',async (req,res)=>{
   res.send('home page change');
})



app.post('/students', async (req,res)=>{

    try {
        //console.log(req.body);
    const users = new StudentsSchema(req.body);
     const createData = await users.save();
    res.status(201).send(users);
    } catch (error) {
        res.status(400).send(error);
    }
    
})

// get the document

app.get('/students', async (req,res)=>{
  try {
  
    const userData =  await StudentsSchema.find({});
    
    res.send(userData);
  } catch (error) {
      res.send(error);
  }
})

app.get('/students/:id', async (req,res) =>{
    try {
        const data = req.params;
        console.log(data.id);
        const dataByid = await StudentsSchema.findById({_id:data.id});
        res.send(dataByid);
    } catch (error) {
        res.send(error);
    }
})

app.put('/students/:id',async (req,res) =>{
    try {
        const data = req.params.id;
        const updatedata = req.body;
        console.log(updatedata);
        var newvalues = { $set: updatedata };      
        const updatedData = await StudentsSchema.updateOne(
            { _id: data},
            newvalues
          );
        res.status(201).send(updatedData);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.delete('/students/:id',  async(req,res) =>{
    try {
        const data = req.params.id;
        const deletedData = await StudentsSchema.deleteOne({_id:data},(err,data)=>{
            if(err) throw err;
            res.send(data); 
        });        
    } catch (error) {
        res.send(error);
    }
} )

app.get('/getdata/:id', async(req,res) =>{
  try {
      const id = req.params.id;
      const data = await StudentsSchema.findOne({phone:9562885820});
      if(data){
         res.send(data);
      }
  } catch (error) {
      res.send(error);
  }
})

app.listen(port, ()=>{
    console.log(`server start at port  ${port}`);
})