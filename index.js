// const http=require("node:http");
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/palin"});
//     res.end("Hellow world")
// });

// server.listen(3000,()=>{
//     console.log("Server Running on Port 3000");
// });

// 

const http=require("node:http");
const fs=require("node:fs");
const Server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"application/json"})
    fs.readFile('Data.json',(error,data)=>{
        if (error) {
            throw error;
        }else{
            res.end(data)
        }
    })

})

Server.listen(3000,()=>{
    console.log("server running at port 3000");
})