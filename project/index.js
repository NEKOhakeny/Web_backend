const express = require('express');

const mysql  = require('mysql');

const app = express();

const port = 3001;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'product'
});
app.get('/',(rew,res)=>{
    res.send('Hello world');
});

app.get('/api',(req,res)=>{
    connection.query(
        'SELECT * FROM products',
        (err,results,fields)=>{
            if(err){
                console.log('Connection err');
                throw err;
            }
            const json = JSON.stringify(results);
            console.log(json);
            res.json(json);
        }
    )
})
app.listen(port,()=>{
    console.log(`listening on *:${port}`);
});