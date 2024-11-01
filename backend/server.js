const express=require('express');
const app=express();

app.get('/',(req,res)=>
{
    return res.send("Home Page");
});
app.get('/about',(req,res)=>
{
    return res.send("Hello I am Akarsh Singh ");
});

// function myHandler (req,res){
//     const log=`${Date.now()} ${req.method}${req.url}:New Request Recieved\n`;
//     const myUrl=url.parse(req.url,true);
//     fs.appendFile("log.text",log,(err,data)=>
//     {
//         if(err)
//         {
//             console.log("error",err);
//         }
//         else{
//         switch(myUrl.pathname){
//             case "/":
//                if(req.method==='GET') res.end("You are at Homepage");
//             break;
//             case  "/about":
//                 const username=myUrl.query.myname;
//                 res.end(`Hi ${username}`);
//             break;
//             case '/signup':
//                 if(req.method==='GET') res.end("This is a signup page");
//                 else if(req.method==='POST')
//                 {
//                     // DB query i.e. store the data of the user into the database
//                     res.end('Signed Up Successfully');
//                 }
//                 break;
//             default:
//                 res.end("404 Not Found");       
//         }
//         }
//     });
// }
app.listen(8000,()=> console.log('Server Started! at \n port: 8000'));