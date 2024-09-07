const express = require('express')
const cors = require('cors')
const app = express();

const mysql = require('mysql2');

app.use(express.json());
app.use(cors());



const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'kasibante',
    database:'crud'
})

app.get('/', (req, res)=>{
    // res.json("Backend connected succesfuly ")
    const sql = "SELECT * FROM student ";
    db.query(sql, (err,data)=>{
        if(err){return res.json(err)}
        return res.json(data)
    })
})

app.post('/create', (req, res)=>{
    const sql = "INSERT INTO student (`Name`, `Email`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email
    ]

    db.query(sql, [values], (err,data)=>{
        if(err){return res.json(err)}
        return res.json(data)
    })
})

app.put('/update/:id', (req, res)=>{
    const sql = "update student set `Name`=?, `Email`= ? where id = ?";
    const values = [
        req.body.name,
        req.body.email
    ]
    const id = req.params.id;

    db.query(sql, [...values, id], (err,data)=>{
        if(err){return res.json(err)}
        return res.json(data)
    })
})

app.delete('/student/:id', (req, res)=>{
    const sql = "DELETE FROM student where id = ?";
    
    const id = req.params.id;

    db.query(sql, [id], (err,data)=>{
        if(err){return res.json(err)}
        return res.json(data)
    })
})


app.listen('8082', ()=>{
    console.log('Server listening !')
})