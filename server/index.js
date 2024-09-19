const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const  UserModel = require('./Models/Users.js')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser =  require('body-parser');
const Todo = require('./Models/todoSchema.js')

// schema
const User =require('./ModelsOne/UserSchemaAuth.js')




// connect express app 
const app = express();
const PORT=3003;
// we can use any port -->  4000 4001 5000

//MIDDLEWARE

app.use(bodyParser.json())
app.use(cors());


//Routes  we using CRUD me se --> Create  Read

//create --> POST

app.post('/register', async (req, res) => {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
        return res.status(400).json({ error: 'Please provide all required fields (email, username, password)' });
    }

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists with this email' });
        }

        // Hash the password and save the user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, username, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error signing up' });
    }
});

//READ -->GET

app.get('/register', async (req,res)=>{
    try{
        const users = await User.find()
        res.status(201).json(users);
    }
    catch(error){
    res.status(500).json({error:"Unable to get users"})
    }
})
//Update -->PUT PATCH
//DELETE -->


//old

// mongoose.connect("mongodb+srv://amanhussainkhan3:amanhussainkhan3@portfoliocluster.lyn5i.mongodb.net/?retryWrites=true&w=majority&appName=PortfolioCluster")
// .then(()=>{
//     console.log("monogo db is connected...")
// })
// .catch((err)=>{
//     console.log("error aya",err)
// })

// writing api here--->

// app.get('/',(req,res)=>{
//     UserModel.find({})  // we use find({}) to get all the records from db
//     .then(users => res.json(users))
//     .catch(err => res.json(err))
// })
 
// for creating we use POST ==> 

// app.post("/create",(req,res)=>{
//     UserModel.create(req.body)
//     .then(users =>res.json(users))
//     .catch(err => res.json(err))
// })

// Connect to mongoDB

const dbURI = "mongodb+srv://amanhussainkhan3:amanhussainkhan3@cluster0.bayan.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(dbURI,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
})  // WE ARE ADDING PARAMETERS in this because it'll make connection more efficient thats it just learn it.
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running at...${PORT} and MongoDB is connected`)
    })
    
})
.catch((err)=>{
    console.log(err,"unable to connect to server and to mongoDB")
})


