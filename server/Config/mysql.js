const mysql= require("mysql2")
const dataBase= mysql.createConnection({
    user: "root",
    host: "localohost",
    password: "",
    database: "stock"
})

dataBase.connect((error)=>{
    if(error) throw error
    console.log("database connect successfully");
})
module.exports= dataBase