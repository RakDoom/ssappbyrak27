const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

let con = mysql.createConnection({
      host:"sql5.freesqldatabase.com",
      user:"sql5696744",
      password:"PHvTiGreA7",
      database:"sql5696744"
      
});

app.post("/save",(req,res)=>{
      let data = [req.body.name, req.body.company, req.body.pkg];
      let sql="insert into student values(?,?,?)";
      con.query(sql,data,(err,result) =>{
           if(err) res.send(err);
           else    res.send(result);
    });
 });
 

app.listen(4000, () => { console.log("server ready @4000")});
