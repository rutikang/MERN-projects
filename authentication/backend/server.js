const express = require('express')
const app = express()

const cors =  require('cors')
const mysql = require('mysql2')
const bcrypt = require('bcrypt')

const salt = 10

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"kasibante",
    database:"crud"
})

app.post('/register', (req,res)=>{
    const sql = "INSERT INTO users (`name`,`email`,`password`) VALUES (?)"; 

    bcrypt.hash(req.body.password.toString(), salt, (err, hash)=>{
        if(err)return console.log({Error: 'Failed to hash the password'})
        const values = [
        req.body.name,
        req.body.email,
        hash
        ]

        db.query(sql, [values], (err, data)=>{
            if(err) return res.json({Error : 'Failed to post to server', err: err})
            // return console.log({Status: 'Success'})
            return res.json({Status: 'Success'})
        })
    })

    
})

app.post('/login', (req,res)=>{

    const sql = "SELECT * FROM users WHERE email = ?";

    db.query(sql, [req.body.email], (err, data)=>{
        if(err) return res.json({Error: 'Error in connection', err:err})
        if(data.length > 0){
            bcrypt.compare(req.body.password.toString(), data[0].password , (err,response)=>{
                if(err) return res.json({Error: 'Err in con', err:err})
                if(response) res.json({Status:'Success'})
                else{
                    res.json({Error:'Password doesnt match'})
                }
            })
        }
        else{
            return res.json({Error:'Email not in db'})
        }
    })
})

app.listen('8082', ()=>{
    console.log('Server listening')
})