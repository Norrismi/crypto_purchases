const express = require('express');
const app = express();
const PORT = 5555;




app.get('/',(req,res)=>{
    console.log('hello from server')
})






app.listen(PORT,()=>{
    console.log(`listening on http://localhost:${PORT}/`)
})