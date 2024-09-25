const express = require('express');
const mongoose =  require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./Models/UsersSchema')
//connect to express
const app = express();
const SECRET_KEY = "secretkey";
const PORT =3001
//connect to mongo
const dbURI ="mongodb+srv://amanhussainkhan3:amanhussainkhan3@helpmecodecluster.cm9qy.mongodb.net/helpmecode?retryWrites=true&w=majority&appName=helpmecodeCluster"
mongoose.connect(dbURI)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`sever connected at port: ${PORT} and DB connected name: helpmecode`)
    })
})
.catch(()=>{
    console.log(`unable to connect to SERVER and MongoDB`)
})
//middleware

app.use(bodyParser.json());
app.use(cors());

//schema

// routes

// CRUD CREATE READ UPDATE DELETE :


// FOR REGISTRATION OF USER ---->

app.post('/register', async (req,res)=>{
    try {
      const {email,username, password} = req.body;
      const hashedPassword = await bcrypt.hash(password,10)
      const newUser = new User({email, password:hashedPassword, username})
      await newUser.save()
      res.status(201).json({message:"user created successfully"})
    } catch (error) {
      res.status(500).json({error:"Error signing up"})
    }
})


app.get('/register', async(req,res)=>{
  try {
    const users = await User.find()
    res.status(201).json(users)
  } catch (error) {
    res.status(500).json({error: "Unable to get users"})
  }
})


// FOR LOGIN USER ---->

app.post('/login', async(req, res)=>{
  try {
    const {username, password} = req.body;
    const user = await User.findOne({username})
    if(!user){
      return res.status(401).json({error:"Invalid Credentials"})
    }
    const isPasswordValid = await bcrypt.compare(password,user.password)
    if (!isPasswordValid){
      return res.status(401).json({error:"Invalid credentials"})
    }
    const token = jwt.sign({userId:user._id}, SECRET_KEY,{expiresIn:'1hr'})
    res.json({message:'Login successful'})
  } catch (error) {
    res.status(500).json({error:"Error logging in"})
  }
})

